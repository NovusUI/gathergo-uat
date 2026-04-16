const SETTINGS = {
  spreadsheetId: "",
  sheetName: "GatherGo UAT Submissions",
  driveFolderId: "",
};

const HEADERS = [
  "submissionId",
  "receivedAt",
  "phaseId",
  "phaseTitle",
  "testerName",
  "testerEmail",
  "testerRole",
  "submissionType",
  "rating",
  "summary",
  "suggestion",
  "issues",
  "completedSteps",
  "instructionComments",
  "instructionPhotos",
  "photoLinks",
  "stageStatus",
  "completedAt",
  "pageUrl",
  "rawPayload",
];

function doPost(e) {
  try {
    const payload = parsePayload_(e);
    console.log("GatherGo collector received: " + payload.submissionType);
    const receivedAt = new Date().toISOString();
    const submissionId = buildSubmissionId_(payload.phaseId || payload.submissionType || "submission", receivedAt);
    const photoFiles = saveInstructionPhotos_(payload, submissionId);
    appendSubmissionRow_(payload, submissionId, receivedAt, photoFiles);

    return ContentService.createTextOutput(
      JSON.stringify({
        ok: true,
        submissionId: submissionId,
        savedPhotos: photoFiles.length,
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error("GatherGo collector error: " + String(error && error.stack ? error.stack : error));
    return ContentService.createTextOutput(
      JSON.stringify({
        ok: false,
        error: String(error && error.message ? error.message : error),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function parsePayload_(e) {
  const contentType = e && e.postData && e.postData.type ? String(e.postData.type) : "";
  const raw = e && e.postData && e.postData.contents ? String(e.postData.contents) : "";
  const fieldPayload = e && e.parameter && e.parameter.payload ? String(e.parameter.payload) : "";
  let body = "";

  if (fieldPayload) {
    body = fieldPayload;
  } else if (contentType.indexOf("application/x-www-form-urlencoded") !== -1 && raw.indexOf("payload=") === 0) {
    body = decodeFormField_(raw.substring("payload=".length));
  } else {
    body = raw;
  }

  if (!body) {
    throw new Error("Missing request body.");
  }

  const payload = JSON.parse(body);
  if (!payload || !payload.submissionType) {
    throw new Error("Invalid payload.");
  }

  if (
    payload.submissionType === "stage-review" &&
    (!payload.phaseId || !payload.phaseTitle)
  ) {
    throw new Error("Invalid stage review payload.");
  }

  if (
    payload.submissionType === "tester-interest" &&
    (!payload.testerName || !payload.testerEmail)
  ) {
    throw new Error("Invalid interest signup payload.");
  }

  return payload;
}

function decodeFormField_(value) {
  return decodeURIComponent(String(value || "").replace(/\+/g, "%20"));
}

function appendSubmissionRow_(payload, submissionId, receivedAt, photoFiles) {
  const sheet = getSheet_();
  const headers = ensureHeaders_(sheet);

  const photoLinks = photoFiles
    .map(function (photo) {
      return "Step " + photo.stepNumber + " - " + photo.stepTitle + ": " + photo.url;
    })
    .join("\n");

  const valuesByHeader = {
    submissionId: submissionId,
    receivedAt: receivedAt,
    phaseId: payload.phaseId || "",
    phaseTitle: payload.phaseTitle || "",
    testerName: payload.testerName || "",
    testerEmail: payload.testerEmail || "",
    testerRole: payload.testerRole || "",
    testerDevice: "",
    submissionType: payload.submissionType || "",
    rating: payload.rating || "",
    summary: payload.summary || "",
    suggestion: payload.suggestion || "",
    issues: payload.issues || "",
    completedSteps: payload.completedSteps || "",
    instructionComments: payload.instructionComments || "",
    instructionPhotos: payload.instructionPhotos || "",
    photoLinks: photoLinks,
    stageStatus: payload.stageStatus || "",
    completedAt: payload.completedAt || "",
    pageUrl: payload.pageUrl || "",
    rawPayload: JSON.stringify(sanitizePayload_(payload)),
  };

  sheet.appendRow(
    headers.map(function (header) {
      return Object.prototype.hasOwnProperty.call(valuesByHeader, header)
        ? valuesByHeader[header]
        : "";
    })
  );
}

function saveInstructionPhotos_(payload, submissionId) {
  const evidence = Array.isArray(payload.instructionEvidence) ? payload.instructionEvidence : [];
  if (!SETTINGS.driveFolderId || !evidence.length) {
    return [];
  }

  const folder = DriveApp.getFolderById(SETTINGS.driveFolderId);

  return evidence
    .filter(function (item) {
      return item && item.photoDataUrl;
    })
    .map(function (item) {
      const blob = dataUrlToBlob_(
        item.photoDataUrl,
        item.photoMimeType || "image/jpeg",
        buildPhotoName_(submissionId, item)
      );
      const file = folder.createFile(blob);

      return {
        stepId: item.stepId || "",
        stepNumber: item.stepNumber || "",
        stepTitle: item.stepTitle || "Instruction",
        name: file.getName(),
        url: file.getUrl(),
      };
    });
}

function dataUrlToBlob_(dataUrl, mimeType, name) {
  const parts = String(dataUrl).split(",");
  if (parts.length < 2) {
    throw new Error("Invalid photo payload.");
  }

  const bytes = Utilities.base64Decode(parts[1]);
  return Utilities.newBlob(bytes, mimeType || "image/jpeg", name || "gathergo-evidence.jpg");
}

function sanitizePayload_(payload) {
  const clone = JSON.parse(JSON.stringify(payload || {}));
  clone.instructionEvidence = Array.isArray(clone.instructionEvidence)
    ? clone.instructionEvidence.map(function (item) {
        const next = Object.assign({}, item);
        delete next.photoDataUrl;
        return next;
      })
    : [];
  return clone;
}

function getSheet_() {
  if (!SETTINGS.spreadsheetId) {
    throw new Error("Set SETTINGS.spreadsheetId first.");
  }

  const spreadsheet = SpreadsheetApp.openById(SETTINGS.spreadsheetId);
  const existing = spreadsheet.getSheetByName(SETTINGS.sheetName);
  return existing || spreadsheet.insertSheet(SETTINGS.sheetName);
}

function ensureHeaders_(sheet) {
  if (sheet.getLastRow() > 0) {
    return sheet
      .getRange(1, 1, 1, sheet.getLastColumn())
      .getValues()[0]
      .map(function (header) {
        return String(header || "");
      });
  }

  sheet.appendRow(HEADERS);
  return HEADERS.slice();
}

function buildSubmissionId_(phaseId, receivedAt) {
  const safePhase = String(phaseId || "phase").replace(/[^a-z0-9-]+/gi, "-").toLowerCase();
  const safeStamp = String(receivedAt || new Date().toISOString()).replace(/[^0-9]/g, "").slice(0, 14);
  const randomSuffix = Math.floor(Math.random() * 100000)
    .toString()
    .padStart(5, "0");

  return safePhase + "-" + safeStamp + "-" + randomSuffix;
}

function buildPhotoName_(submissionId, item) {
  const extension = mimeTypeToExtension_(item.photoMimeType || "image/jpeg");
  const stepNumber = item.stepNumber || "x";
  const safeTitle = String(item.stepTitle || "instruction")
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();

  return submissionId + "-step-" + stepNumber + "-" + safeTitle + extension;
}

function mimeTypeToExtension_(mimeType) {
  switch (String(mimeType || "").toLowerCase()) {
    case "image/png":
      return ".png";
    case "image/webp":
      return ".webp";
    default:
      return ".jpg";
  }
}
