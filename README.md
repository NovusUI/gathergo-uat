# GatherGo UAT Hub

This is a lightweight static site for GatherGo user acceptance testing. It gives testers:

- a clear 3-phase flow
- one instruction page at a time inside each phase
- date-based locks for later phases
- dependency checks so testers are pushed back to the previous unfinished phase
- one stage review at the end of each phase
- tester signup can register interest before any phase opens
- optional photo evidence on each instruction
- invite prompts for bringing in more testers
- local backup plus optional remote collection

## Files

- `index.html`: page shell
- `banners.html`: standalone GatherGo UAT banner generator and downloader
- `styles.css`: GatherGo-inspired styling
- `script.js`: stage-by-stage rendering, page flow, lock logic, local progress, photo evidence, and review submission
- `config.js`: edit this to set release dates and collection details
- `apps-script-collector.gs`: free Google Apps Script collector template for centralising reviews and photo evidence

## Change the release dates

Open `config.js` and update:

```js
phaseReleaseDates: {
  "phase-1": "2026-04-19T09:00:00+01:00",
  "phase-2": "2026-04-26T09:00:00+01:00",
  "phase-3": "2026-05-03T09:00:00+01:00",
}
```

Use full ISO date strings so the unlock schedule is predictable.

## Collect submissions centrally

The site now supports two remote collection paths:

- `collectorUrl`: a Google Apps Script web app that receives the full stage payload plus per-instruction photo evidence
- `googleFormUrl`: optional text-only mirror into Google Forms if you still want the same form workflow

If neither is configured, reviews and photos are still saved locally in the browser and can be exported from the page.

### Recommended free setup: Google Apps Script

1. Create a Google Sheet for submissions.
2. Create a Google Drive folder where uploaded instruction photos should be stored.
3. Open [script.google.com](https://script.google.com) and create a new Apps Script project.
4. Paste in the contents of `apps-script-collector.gs`.
5. Set `spreadsheetId`, `sheetName`, and `driveFolderId` inside that script.
6. Deploy it as a Web app:
   `Execute as: Me`
   `Who has access: Anyone`
7. Copy the deployed `/exec` URL into `config.js` as `feedback.collectorUrl`.
8. Submit one real test stage and confirm that the row appears in the Sheet and the photos appear in Drive.
9. Redeploy the Apps Script collector whenever you update `apps-script-collector.gs`, including the pre-test interest signup support.

### Optional: mirror text into Google Forms

The site already supports direct Google Form submission with a local backup. In `config.js`, set:

```js
feedback: {
  collectorUrl: "https://script.google.com/macros/s/<DEPLOYMENT_ID>/exec",
  googleFormUrl: "https://docs.google.com/forms/d/e/<FORM_ID>/viewform",
  entryMap: {
    testerName: "entry.x",
    testerEmail: "entry.x",
    testerRole: "entry.x",
    submissionType: "entry.x",
    phaseId: "entry.x",
    phaseTitle: "entry.x",
    rating: "entry.x",
    summary: "entry.x",
    suggestion: "entry.x",
    issues: "entry.x",
    completedSteps: "entry.x",
    instructionComments: "entry.x",
    instructionPhotos: "entry.x",
    stageStatus: "entry.x",
    completedAt: "entry.x",
    pageUrl: "entry.x",
  },
}
```

`collectorUrl` is the important one if you want central collection of screenshots or photos. Google Forms can only mirror the text fields that you map.

## Run locally

You can open `index.html` directly in a browser, but serving it over a simple local server is better for testing.
