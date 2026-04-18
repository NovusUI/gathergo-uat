const DEFAULT_CONFIG = {
  timezone: "Africa/Lagos",
  phaseReleaseDates: {
    "phase-1": "2026-04-19T09:00:00+01:00",
    "phase-2": "2026-04-26T09:00:00+01:00",
    "phase-3": "2026-05-03T09:00:00+01:00",
  },
  feedback: {
    collectorUrl: "",
    googleFormUrl: "",
    entryMap: {},
  },
};

const STORAGE_KEYS = {
  profile: "gathergo-uat-profile",
  profileInterest: "gathergo-uat-profile-interest",
  phaseProgress: "gathergo-uat-phase-progress",
  stageReviews: "gathergo-uat-stage-reviews",
  backup: "gathergo-uat-feedback-backup",
  ui: "gathergo-uat-ui",
};

const STEP_PHOTO_MAX_DIMENSION = 1280;
const STEP_PHOTO_OUTPUT_QUALITY = 0.72;
const TEST_ENVIRONMENT_NOTICE =
  "The test backend runs on a free server, so the first API call may take a little longer than usual. Please wait a moment before retrying, and only report it as an issue if the delay keeps happening.";

const PHASES = [
  {
    id: "phase-1",
    label: "Phase 1",
    shortTitle: "Onboarding and first actions",
    title: "Onboarding, auth, ticketing, donation, registration, and UI/UX",
    summary:
      "This stage checks the first-time attendee experience from opening the app to completing an event action.",
    goals: [
      "Can a new user understand GatherGo quickly?",
      "Is sign-up or sign-in smooth enough to trust?",
      "Does event registration, ticketing, or donation feel clear and safe?",
    ],
    invitePrompt:
      "I just finished Phase 1 of the GatherGo UAT. It covers onboarding, sign-in, and first event actions. If you can help, please join the test hub and complete the same phase.",
    steps: [
      {
        id: "phase-1-step-install",
        title: "Download and install GatherGo",
        summary: "Install the Android APK before starting the rest of this testing phase.",
        doThis: [
          "Tap the download button on this page to open the GatherGo APK build.",
          "Download the APK and open it from your browser downloads or Files app.",
          "If Android blocks the install, open Settings and look for Security or Privacy.",
          "Open Install unknown apps, choose the app you used to download the APK, then turn on Allow from this source.",
          "Return to the APK, finish installation, and open GatherGo.",
        ],
        focusOn: [
          "Whether the install flow is easy to understand",
          "Any warning message that feels confusing",
          "Whether the app opens successfully after install",
        ],
        actionLabel: "Download GatherGo APK",
        actionHref:
          "https://expo.dev/accounts/thenodenovice/projects/gathergoapp/builds/0a7ebc88-2c58-4a45-ace5-80393631c9fb",
        installTips: [
          "On most Android phones the path is Settings > Security or Privacy > Install unknown apps.",
          "Choose Chrome, your browser, or your Files app, depending on where you opened the APK from.",
          "Turn on Allow from this source, then go back and run the APK again.",
        ],
      },
      {
        id: "phase-1-step-1",
        title: "Go through onboarding",
        summary: "Check whether the app explains itself clearly from the first screen.",
        doThis: [
          "Open the app and move through the onboarding screens from start to finish.",
          "Notice how easy it is to continue, skip, or go back.",
          "Pay attention to whether the value of the app is obvious without extra explanation.",
        ],
        focusOn: ["Copy clarity", "Visual polish", "Overall first impression"],
      },
      {
        id: "phase-1-step-2",
        title: "Create an account or sign in",
        summary:
          "Test the path into the app as a new or returning user using email sign-up/sign-in or Google login only.",
        doThis: [
          "Do not use phone number login for this test round.",
          "Use email sign-up, email sign-in, or Google login only.",
          "If possible, log out and sign back in once.",
          "If recovery or verification is available, try at least one of those paths.",
        ],
        focusOn: [
          "Validation and error messages",
          "Loading states",
          "Confidence after sign-in completes",
        ],
      },
      {
        id: "phase-1-step-3",
        title: "Register for an event",
        summary: "Make sure the registration flow feels simple and predictable.",
        doThis: [
          "Find an event that supports registration.",
          "Go through the full registration flow.",
          "If payment is involved, check whether the amount and next steps feel clear.",
        ],
        focusOn: [
          "Registration clarity before you tap",
          "Confidence after registration succeeds",
          "Any confusion about who is being registered",
        ],
      },
      {
        id: "phase-1-step-4",
        title: "Buy a ticket or make a donation",
        summary: "Review how clearly GatherGo handles pricing and payment flow.",
        doThis: [
          "Open a ticketed event or donation event.",
          "Review the amount, fees, and payment method options if shown.",
          "Try the full purchase or donation flow available to you.",
        ],
        focusOn: [
          "Fee transparency",
          "Payment trust",
          "Clarity of success or pending states",
        ],
      },
      {
        id: "phase-1-step-5",
        title: "Do a quick UI/UX pass",
        summary: "Capture the quality of the overall attendee experience.",
        doThis: [
          "Think back across the screens you used in this stage.",
          "Notice any friction around navigation, spacing, readability, or trust.",
          "Decide what one improvement would most help first-time users.",
        ],
        focusOn: ["Consistency", "Ease of use", "Confidence in the product"],
      },
    ],
  },
  {
    id: "phase-2",
    label: "Phase 2",
    shortTitle: "Carpool, requests, notifications, and chat",
    title: "Creating or joining carpool, request handling, notifications, and chat",
    summary:
      "This stage checks the complete transport workflow from ride discovery to coordination.",
    goals: [
      "Can a rider or driver understand the ride flow quickly?",
      "Do request states update clearly across the app?",
      "Are notifications and chat strong enough for real event coordination?",
    ],
    invitePrompt:
      "I just finished Phase 2 of the GatherGo UAT for carpool, ride requests, notifications, and chat. If you can test transport and communication flows, please join the test hub and complete this phase.",
    steps: [
      {
        id: "phase-2-step-1",
        title: "Create a carpool",
        summary: "Test the driver-side setup from event selection to ride details.",
        doThis: [
          "Open a physical event that supports carpool.",
          "Create a new ride with pickup point, departure time, seats, and notes.",
          "Review the final ride details before moving on.",
        ],
        focusOn: ["Ease of setup", "Form clarity", "Trust signals for passengers"],
      },
      {
        id: "phase-2-step-2",
        title: "Request to join a ride",
        summary: "Check the rider-side flow before and after sending a request.",
        doThis: [
          "Open an existing ride and review the details carefully.",
          "Submit a join request with any extra note or origin if needed.",
          "Check whether the ride state clearly changes to pending.",
        ],
        focusOn: [
          "Safety and trust",
          "Clarity before requesting",
          "Confidence after request submission",
        ],
      },
      {
        id: "phase-2-step-3",
        title: "Accept or reject requests",
        summary: "Test how clearly the driver can manage incoming riders.",
        doThis: [
          "Switch to the driver view if your setup allows it.",
          "Open incoming requests and review the request information.",
          "Accept at least one request if possible and reject another if your environment supports it.",
        ],
        focusOn: [
          "Difference between accept and reject actions",
          "Status updates after an action",
          "Any missing warning or confirmation",
        ],
      },
      {
        id: "phase-2-step-4",
        title: "Check notifications",
        summary: "Validate how the app communicates ride updates.",
        doThis: [
          "Trigger ride-related updates through request submission, acceptance, or rejection.",
          "Open notifications and review the unread and carpool groupings.",
          "Tap one notification and confirm it lands in the correct place.",
        ],
        focusOn: [
          "Badge counts and grouping",
          "Accuracy of deep links",
          "Missing updates a user would rely on",
        ],
      },
      {
        id: "phase-2-step-5",
        title: "Use carpool chat",
        summary: "Check whether the messaging experience is strong enough for coordination.",
        doThis: [
          "Open ride chat for an accepted ride.",
          "Send a few short coordination messages.",
          "Leave and return once to check whether the chat still feels consistent.",
        ],
        focusOn: [
          "Readability and message order",
          "Input comfort and keyboard handling",
          "Whether last-minute coordination would feel stressful",
        ],
      },
      {
        id: "phase-2-step-6",
        title: "Try an edge case",
        summary: "Look for recovery gaps before the feature is used more widely.",
        doThis: [
          "If your setup allows it, try leaving a ride, handling an unavailable ride, or resolving a conflict.",
          "Watch what warnings appear before the action.",
          "Check whether the user can recover cleanly afterward.",
        ],
        focusOn: [
          "Recovery flow",
          "Warnings and consequences",
          "Any state that feels impossible to fix",
        ],
      },
    ],
  },
  {
    id: "phase-3",
    label: "Phase 3",
    shortTitle: "Event creation and KYC",
    title: "Event creation and KYC completion",
    summary:
      "This stage focuses on the creator experience from event setup to payout readiness.",
    goals: [
      "Does event creation feel guided and hard to get wrong?",
      "Are pricing and publishing choices easy for creators to understand?",
      "Does wallet and KYC setup feel trustworthy enough to complete?",
    ],
    invitePrompt:
      "I just finished Phase 3 of the GatherGo UAT for event creation and KYC. If you can test from a creator point of view, please join the test hub and complete this phase.",
    steps: [
      {
        id: "phase-3-step-1",
        title: "Start a new event",
        summary: "Check whether the event form feels structured and creator-friendly.",
        doThis: [
          "Start a new event and add core details such as title, description, image, tags, and links.",
          "Notice whether the form naturally guides you through setup.",
          "Look for anything that feels too long, unclear, or easy to misconfigure.",
        ],
        focusOn: [
          "Clarity of required fields",
          "Ease of authoring",
          "Overall setup confidence",
        ],
      },
      {
        id: "phase-3-step-2",
        title: "Set date, time, and location",
        summary: "Make sure schedule and location settings are easy to understand.",
        doThis: [
          "Configure a realistic event schedule.",
          "Set the location and switch between physical or non-physical logic if available.",
          "Notice whether the validation helps prevent confusing setup.",
        ],
        focusOn: [
          "Time and date clarity",
          "Physical versus virtual logic",
          "Confidence in what attendees will see",
        ],
      },
      {
        id: "phase-3-step-3",
        title: "Set pricing or donation",
        summary: "Check how strong GatherGo feels when money and access are involved.",
        doThis: [
          "Choose the most relevant flow available to you: registration, tickets, or donation.",
          "If tickets are available, create at least one tier and review its setup.",
          "Save or publish and check whether the next step feels obvious.",
        ],
        focusOn: [
          "Pricing clarity",
          "Confidence before publishing",
          "Missing guardrails",
        ],
      },
      {
        id: "phase-3-step-4",
        title: "Complete payout setup and KYC",
        summary: "Assess whether the wallet flow feels trustworthy and manageable.",
        doThis: [
          "Open the wallet or payout area and add the settlement account if available.",
          "Continue the KYC flow including identity or liveness steps if your setup supports it.",
          "Check whether the final status makes it obvious what happens next.",
        ],
        focusOn: [
          "Trust when sharing identity or bank details",
          "Clarity of status labels",
          "Anything too difficult or surprising",
        ],
      },
      {
        id: "phase-3-step-5",
        title: "Do a creator confidence check",
        summary: "Decide whether a creator would trust GatherGo for a real event.",
        doThis: [
          "Think back across the full creator journey you just used.",
          "Identify the one change that would most increase confidence.",
          "Decide whether the product feels ready for real creator use today.",
        ],
        focusOn: [
          "Operational readiness",
          "Trust in payouts and setup",
          "Biggest remaining blocker",
        ],
      },
    ],
  },
];

const config = mergeConfig(DEFAULT_CONFIG, window.GATHERGO_UAT_CONFIG || {});

const appShell = document.querySelector(".app-shell");
const toastRoot = document.querySelector("#toast-root");

let profile = readStorage(STORAGE_KEYS.profile, {
  name: "",
  email: "",
  role: "attendee",
});
let profileInterestState = readStorage(STORAGE_KEYS.profileInterest, {
  signature: "",
  submittedAt: "",
  result: "",
});
let phaseProgress = readStorage(STORAGE_KEYS.phaseProgress, {});
let stageReviews = readStorage(STORAGE_KEYS.stageReviews, {});
let feedbackBackup = readStorage(STORAGE_KEYS.backup, []);
let uiState = readStorage(STORAGE_KEYS.ui, {
  selectedPhaseId: "",
  appView: determineInitialView(),
});
let submissionCelebrationTimer = null;

ensureSelectedPhase();
render();

function determineInitialView() {
  const storedProfile = readStorage(STORAGE_KEYS.profile, {});
  return storedProfile.name && storedProfile.email ? "testing" : "welcome";
}

function mergeConfig(base, incoming) {
  return {
    ...base,
    ...incoming,
    phaseReleaseDates: {
      ...base.phaseReleaseDates,
      ...(incoming?.phaseReleaseDates || {}),
    },
    feedback: {
      ...base.feedback,
      ...(incoming?.feedback || {}),
      entryMap: {
        ...base.feedback.entryMap,
        ...(incoming?.feedback?.entryMap || {}),
      },
    },
  };
}

function render() {
  if (!appShell) {
    return;
  }

  stopSubmissionCelebration();

  if (uiState.appView === "testing" && (!profile.name || !profile.email)) {
    uiState.appView = "profile";
    persistUiState();
  }

  switch (uiState.appView) {
    case "welcome":
      renderWelcomeView();
      break;
    case "profile":
      renderProfileView();
      break;
    case "testing":
    default:
      renderTestingView();
      break;
  }
}

function renderWelcomeView() {
  appShell.innerHTML = `
    <div class="ambient ambient-left"></div>
    <div class="ambient ambient-right"></div>

    <main class="welcome-container panel" style="max-width: 860px; margin: 2rem auto;">
      <div class="welcome-card">
        <div class="welcome-topline">
          <div class="logo-mark welcome-logo" aria-hidden="true">
            ${renderLogoMark()}
          </div>
          <a
            class="button welcome-top-cta"
            href="https://partners.gathergo.events"
            target="_blank"
            rel="noreferrer"
          >
            Explore GatherGo Partners→
          </a>
        </div>

        <p class="eyebrow">GatherGo User Acceptance Test</p>
        <h1 class="welcome-title">Welcome to GatherGo UAT</h1>
        <p class="hero-description welcome-copy">
          Help us shape a smoother event experience. You will test real features
          page by page, one phase at a time.
        </p>

        ${renderTestEnvironmentNotice("Before you start")}

        <div class="welcome-phase-grid">
          ${PHASES.map(
            (phase) => `
              <article class="welcome-phase-card">
                <span class="status-badge open">${phase.label}</span>
                <h3>${phase.shortTitle}</h3>
                <p>${phase.summary}</p>
              </article>
            `
          ).join("")}
        </div>

        <div class="wizard-controls">
          <button class="button button-primary" type="button" id="start-profile-btn">
            Set up tester profile
          </button>
          <a class="button button-secondary" href="./banners.html">
            Share UAT banner
          </a>
        </div>

        <p class="welcome-footer">
          Already have a profile?
          <button class="button-link" type="button" id="skip-to-testing-btn">
            Jump to testing
          </button>
        </p>
      </div>
    </main>
  `;

  document.querySelector("#start-profile-btn")?.addEventListener("click", () => {
    uiState.appView = "profile";
    persistUiState();
    render();
  });

  document.querySelector("#skip-to-testing-btn")?.addEventListener("click", () => {
    if (!profile.name || !profile.email) {
      showToast("Please complete your profile first.", "warning");
      uiState.appView = "profile";
    } else {
      uiState.appView = "testing";
    }
    persistUiState();
    render();
  });
}

function renderProfileView() {
  appShell.innerHTML = `
    <div class="ambient ambient-left"></div>
    <div class="ambient ambient-right"></div>

    <main class="profile-container panel" style="max-width: 660px; margin: 2rem auto;">
      <div class="profile-card">
        <div class="profile-topline">
          <div class="logo-mark profile-logo" aria-hidden="true">
            ${renderLogoMark()}
          </div>
          <div>
            <p class="eyebrow">Step 2 of 3</p>
            <h2>Tell us about you</h2>
          </div>
        </div>

        <p class="muted-copy profile-copy">
          This info will be attached to every stage review you submit, and saving it now
          also registers your interest before the test phases open. We are testing
          Android only for now.
        </p>

        <form id="profile-form" class="profile-form-single">
          <label>
            Full name
            <input
              name="name"
              type="text"
              placeholder="e.g. Ada Tester"
              value="${escapeHtml(profile.name)}"
              required
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="e.g. ada@example.com"
              value="${escapeHtml(profile.email)}"
              required
            />
          </label>

          <label>
            Testing as
            <select name="role">
              <option value="attendee" ${profile.role === "attendee" ? "selected" : ""}>Attendee</option>
              <option value="creator" ${profile.role === "creator" ? "selected" : ""}>Creator</option>
              <option value="both" ${profile.role === "both" ? "selected" : ""}>Both</option>
              <option value="observer" ${profile.role === "observer" ? "selected" : ""}>Observer</option>
            </select>
          </label>

          <div class="profile-actions">
            <button class="button button-primary" type="submit">Save and continue</button>
            <button class="button button-ghost" type="button" id="back-to-welcome">
              Back
            </button>
            <p id="profile-status" class="inline-status" aria-live="polite"></p>
          </div>
        </form>
      </div>
    </main>
  `;

  const profileForm = document.querySelector("#profile-form");
  const profileStatus = document.querySelector("#profile-status");

  profileForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(profileForm);

    profile = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      role: String(formData.get("role") || "attendee"),
    };

    if (!profile.name || !profile.email) {
      setInlineStatus(profileStatus, "Name and email are required.", "error");
      return;
    }

    localStorage.setItem(STORAGE_KEYS.profile, JSON.stringify(profile));
    setInlineStatus(
      profileStatus,
      hasRemoteDestination()
        ? "Profile saved. Registering your interest..."
        : "Profile saved. Redirecting...",
      "success"
    );
    showToast("Profile saved. Let’s start testing.", "success");

    registerProfileInterest(profile)
      .then((result) => {
        if (result === "already-synced") {
          showToast("Your tester interest is already registered.", "success");
          return;
        }

        if (isRemoteSubmissionResult(result)) {
          showToast("Your tester interest has been registered.", "success");
          return;
        }

        if (result === "local") {
          showToast("Profile saved locally. Interest signups will appear once a remote collector is active.", "warning");
        }
      })
      .catch(() => {
        showToast("Profile saved, but the interest signup could not be sent yet.", "warning");
      });

    uiState.appView = "testing";
    persistUiState();
    render();
  });

  document.querySelector("#back-to-welcome")?.addEventListener("click", () => {
    uiState.appView = "welcome";
    persistUiState();
    render();
  });
}

function renderTestingView() {
  appShell.innerHTML = `
    <div class="ambient ambient-left"></div>
    <div class="ambient ambient-right"></div>

    <main class="main-layout testing-layout">
      <nav id="phase-nav" class="phase-nav panel" aria-label="Testing phases"></nav>
      <section id="phases-root" class="phases-root" aria-live="polite"></section>
    </main>
  `;

  ensureSelectedPhase();

  const phaseStatuses = getAllPhaseStatuses();
  const selectedStatus = resolveSelectedPhaseStatus(phaseStatuses);

  renderPhaseNav(phaseStatuses, selectedStatus.phase.id);
  renderSelectedPhase(selectedStatus);
}

function renderPhaseNav(phaseStatuses, selectedPhaseId) {
  const phaseNav = document.querySelector("#phase-nav");
  if (!phaseNav) {
    return;
  }

  phaseNav.innerHTML = phaseStatuses
    .map((status) => {
      const isSelected = selectedPhaseId === status.phase.id;
      const helperText = getPhaseCardHelper(status);
      return `
        <button
          class="phase-nav-item ${isSelected ? "is-selected" : ""}"
          type="button"
          data-phase-link="${status.phase.id}"
        >
          <div class="nav-item-topline">
            <span class="section-label">${status.phase.label}</span>
            <span class="status-badge ${statusToClass(status.status)}">${status.statusLabel}</span>
          </div>
          <strong>${status.phase.shortTitle}</strong>
          <p class="nav-helper">${helperText}</p>
        </button>
      `;
    })
    .join("");

  phaseNav.querySelectorAll("[data-phase-link]").forEach((button) => {
    button.addEventListener("click", () => {
      const phaseId = button.getAttribute("data-phase-link");
      selectPhase(phaseId, true);
    });
  });
}

function getPhaseCardHelper(status) {
  if (status.status === "scheduled") {
    return `Opens ${formatPhaseCardDate(status.releaseDate)}`;
  }

  if (status.status === "blocked" && status.previousPhase) {
    return `Complete ${status.previousPhase.label} first`;
  }

  if (status.status === "complete") {
    return "Review submitted";
  }

  return "Ready to test";
}

function renderSelectedPhase(phaseStatus) {
  const phasesRoot = document.querySelector("#phases-root");
  if (!phasesRoot) {
    return;
  }

  if (phaseStatus.status === "scheduled") {
    phasesRoot.innerHTML = renderScheduledPhase(phaseStatus);
    bindScheduledPhaseEvents();
    return;
  }

  if (phaseStatus.status === "blocked") {
    phasesRoot.innerHTML = renderBlockedPhase(phaseStatus);
    bindBlockedPhaseEvents();
    return;
  }

  phasesRoot.innerHTML = renderStageWizard(phaseStatus);
  bindStageEvents(phaseStatus);
}

function renderScheduledPhase(phaseStatus) {
  return `
    <section class="panel stage-shell">
      <article class="gate-box">
        <p class="eyebrow">${phaseStatus.phase.label}</p>
        <span class="status-badge locked">Locked by date</span>
        <h3 class="page-title">This stage is not open yet.</h3>
        <p class="page-copy">${phaseStatus.dateLabel}.</p>
        <p class="page-note">Finish the earlier stage now so testers are ready when this one opens.</p>
        <div class="wizard-controls">
          <button class="button button-secondary" type="button" data-go-next-open>
            Go to the next available stage
          </button>
          <a
            class="button button-ghost"
            href="https://partners.gathergo.events"
            target="_blank"
            rel="noreferrer"
          >
            Explore GatherGo partners
          </a>
        </div>
      </article>
    </section>
  `;
}

function renderBlockedPhase(phaseStatus) {
  return `
    <section class="panel stage-shell">
      <article class="gate-box">
        <p class="eyebrow">${phaseStatus.phase.label}</p>
        <span class="status-badge blocked">Finish previous stage first</span>
        <h3 class="page-title">Go back to ${phaseStatus.previousPhase.label}.</h3>
        <p class="page-copy">
          If a tester starts from a later stage, point them back to the previous unfinished one first.
        </p>
        <div class="wizard-controls">
          <button class="button button-primary" type="button" data-go-prev="${phaseStatus.previousPhase.id}">
            Open ${phaseStatus.previousPhase.label}
          </button>
          <a
            class="button button-ghost"
            href="https://partners.gathergo.events"
            target="_blank"
            rel="noreferrer"
          >
            Explore GatherGo partners
          </a>
        </div>
      </article>
    </section>
  `;
}

function renderStageWizard(phaseStatus) {
  const phase = phaseStatus.phase;
  const pages = getPhasePages(phase);
  const progress = getPhaseProgress(phase.id, pages.length);
  const currentPage = pages[progress.pageIndex];
  const completedSteps = getCompletedSteps(phase.id);
  const review = ensureStageReview(phase.id);
  const allStepsDone = completedSteps.length === phase.steps.length;
  const showCelebrationOnly = currentPage.type === "review" && review.completed;

  if (showCelebrationOnly) {
    return `
      <section class="panel stage-shell stage-shell-success" id="${phase.id}">
        <article class="stage-page stage-page-success">
          ${renderSubmissionCelebration(phase)}
        </article>
      </section>
    `;
  }

  return `
    <section class="panel stage-shell" id="${phase.id}">
      <header class="stage-header stage-header-minimal">
        <p class="eyebrow">${phase.label}</p>
        <h2>${phase.shortTitle}</h2>
      </header>

      <article class="stage-page">
        ${renderPageContent(phase, currentPage, progress, review, allStepsDone)}
      </article>
    </section>
  `;
}

function renderPageContent(phase, page, progress, review, allStepsDone) {
  if (page.type === "intro") {
    return `
      <div class="page-frame">
        <p class="section-label">Start here</p>
        <h3 class="page-title">${phase.shortTitle}</h3>
        <p class="page-copy">
          Move through this stage one page at a time. Rating comes only at the
          end of the stage.
        </p>

        <div class="page-grid">
          <section class="page-panel">
            <h4 class="page-panel-title">What this stage checks</h4>
            <ul class="page-list">
              ${phase.goals.map((goal) => `<li>${goal}</li>`).join("")}
            </ul>
          </section>

          <section class="page-panel">
            <h4 class="page-panel-title">Before you begin</h4>
            <ul class="page-list">
              <li>Use a real Android device or your closest Android test setup.</li>
              <li>Move in order so the feedback stays consistent.</li>
              <li>Add the full stage rating only after the last page.</li>
            </ul>
          </section>
        </div>

        ${renderTestEnvironmentNotice("Quick note about test speed")}

        <div class="wizard-controls">
          <button class="button button-primary" type="button" data-page-next="${phase.id}">
            Start stage
          </button>
        </div>
      </div>
    `;
  }

  if (page.type === "step") {
    const savedComment = getStepComment(progress, page.id);
    const savedPhoto = getStepPhoto(progress, page.id);
    return `
      <div class="page-frame">
        <p class="section-label">Instruction ${page.stepNumber} of ${phase.steps.length}</p>
        <h3 class="page-title">${page.title}</h3>
        <p class="page-copy">${page.summary}</p>

        <div class="page-grid">
          <section class="page-panel">
            <h4 class="page-panel-title">Do this</h4>
            <ul class="page-list">
              ${page.doThis.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </section>

          <section class="page-panel">
            <h4 class="page-panel-title">Focus on</h4>
            <ul class="page-list">
              ${page.focusOn.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </section>
        </div>

        <p class="page-note">
          If you notice issues, keep them in mind and include them on the final
          stage review page.
        </p>

        ${renderStepSupport(page)}
        ${renderStepPhotoUpload(phase.id, page.id, savedPhoto)}

        <label class="instruction-comment">
          Comment on this instruction
          <textarea
            name="instruction-comment"
            data-step-comment="${phase.id}"
            data-step-id="${page.id}"
            placeholder="Optional: add what happened on this step, including any confusion, bug, or suggestion."
          >${escapeHtml(savedComment)}</textarea>
        </label>

        <div class="wizard-controls">
          <button
            class="button button-ghost"
            type="button"
            data-page-prev="${phase.id}"
            ${progress.pageIndex === 0 ? "disabled" : ""}
          >
            Back
          </button>
          <button class="button button-primary" type="button" data-page-next="${phase.id}">
            ${page.stepNumber === phase.steps.length ? "Go to final review" : "Next instruction"}
          </button>
        </div>
      </div>
    `;
  }

  const ratingButtons = [1, 2, 3, 4, 5]
    .map(
      (rating) => `
        <button
          type="button"
          class="rating-chip ${review.rating === rating ? "is-selected" : ""}"
          data-stage-rating="${phase.id}"
          data-stage-rating-value="${rating}"
        >
          ${rating}
        </button>
      `
    )
    .join("");

  if (review.completed) {
    return renderSubmissionCelebration(phase);
  }

  return `
    <div class="page-frame">
      <p class="section-label">Final review</p>
      <h3 class="page-title">Rate ${phase.label}</h3>
      <p class="page-copy">
        You have reached the end of this stage. Add one overall rating and
        summarize what worked, what should improve, and any issue or blocker.
      </p>

      <form class="review-form" id="review-form-${phase.id}" data-review-form="${phase.id}">
        <div>
          <p class="helper-copy">Overall stage rating</p>
          <div class="rating-row">${ratingButtons}</div>
        </div>

        <label>
          What worked well?
          <textarea name="summary" placeholder="What felt strong or clear?">${escapeHtml(
            review.summary || ""
          )}</textarea>
        </label>

        <label>
          Suggestions
          <textarea name="suggestion" placeholder="What should be improved?">${escapeHtml(
            review.suggestion || ""
          )}</textarea>
        </label>

        <label>
          Issues or blockers
          <textarea name="issues" placeholder="Describe any bug, blocker, or confusing moment.">${escapeHtml(
            review.issues || ""
          )}</textarea>
        </label>

        <p class="page-note">
          ${allStepsDone
            ? "All instruction pages are complete."
            : "Go back and finish all instruction pages before submitting."}
        </p>

        <p class="inline-status" data-review-status="${phase.id}"></p>
      </form>

      <article class="invite-card">
        <div class="invite-header">
          <strong>Invite more testers after this stage</strong>
          <button class="button button-secondary" type="button" data-copy-invite="${phase.id}">
            Copy invite message
          </button>
        </div>
        <p class="invite-message" id="invite-${phase.id}">${phase.invitePrompt}</p>
      </article>

      <div class="wizard-controls">
        <button class="button button-ghost" type="button" data-page-prev="${phase.id}">
          Back
        </button>
        <button
          class="button button-primary"
          type="submit"
          form="review-form-${phase.id}"
          ${!allStepsDone ? "disabled" : ""}
        >
          Submit ${phase.label} review
        </button>
      </div>
    </div>
  `;
}

function renderStepSupport(page) {
  if (!page.actionHref && !page.installTips?.length) {
    return "";
  }

  return `
    <section class="page-panel page-panel-support">
      <h4 class="page-panel-title">Download and install help</h4>
      ${
        page.actionHref
          ? `
            <a
              class="button button-primary page-action-link"
              href="${page.actionHref}"
              target="_blank"
              rel="noreferrer"
            >
              ${escapeHtml(page.actionLabel || "Open link")}
            </a>
          `
          : ""
      }
      ${
        page.installTips?.length
          ? `
            <ul class="page-list">
              ${page.installTips.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          `
          : ""
      }
    </section>
  `;
}

function renderStepPhotoUpload(phaseId, stepId, photo) {
  const fileLabel = photo?.name ? escapeHtml(photo.name) : "No photo uploaded yet.";
  const metaLabel = photo
    ? escapeHtml(
        [photo.width && photo.height ? `${photo.width} x ${photo.height}` : "", formatBytes(photo.storedSize)]
          .filter(Boolean)
          .join(" · ")
      )
    : "";

  return `
    <section class="page-panel page-panel-photo">
      <div class="page-photo-topline">
        <div>
          <h4 class="page-panel-title">Upload a screenshot or photo</h4>
          <p class="page-panel-copy">
            Optional.
          </p>
        </div>
        ${
          photo
            ? `
              <button
                class="button button-ghost page-photo-remove"
                type="button"
                data-step-photo-remove="${phaseId}"
                data-step-id="${stepId}"
              >
                Remove photo
              </button>
            `
            : ""
        }
      </div>

      ${
        photo
          ? `
            <figure class="step-photo-preview">
              <img
                class="step-photo-image"
                src="${escapeHtml(photo.dataUrl)}"
                alt="Uploaded photo for this instruction"
              />
              <figcaption>
                <strong>${fileLabel}</strong>
                ${metaLabel ? `<span>${metaLabel}</span>` : ""}
              </figcaption>
            </figure>
          `
          : ""
      }

      <div class="page-photo-actions">
        <label class="button ${photo ? "button-secondary" : "button-primary"} page-upload-trigger">
          ${photo ? "Replace photo" : "Upload photo"}
          <input
            class="page-upload-input"
            type="file"
            accept="image/*"
            data-step-photo-input="${phaseId}"
            data-step-id="${stepId}"
          />
        </label>
        <p class="inline-status ${photo ? "success" : ""}" data-step-photo-status>
          ${
            photo
              ? "Saved locally and ready for export."
              : "Optional. Add a screenshot to show what happened on this task."
          }
        </p>
      </div>
    </section>
  `;
}

function renderSubmissionCelebration(phase) {
  return `
    <section
      class="submission-celebration"
      aria-label="${phase.label} submission success"
      data-submission-celebration="${phase.id}"
    >
      <div class="submission-orb submission-orb-a" aria-hidden="true"></div>
      <div class="submission-orb submission-orb-b" aria-hidden="true"></div>
      <div class="submission-orb submission-orb-c" aria-hidden="true"></div>

      <p class="eyebrow">Submission received</p>
      <h4 class="submission-title">${phase.label} is complete</h4>

      <div class="submission-animation" aria-hidden="true">
        <svg viewBox="0 0 600 220" role="img" data-submission-svg>
          <g data-submission-single class="submission-single">
            <circle data-eye-ring="left" class="submission-eye-ring" cx="272" cy="72" r="16"></circle>
            <circle data-eye-ring="right" class="submission-eye-ring" cx="328" cy="72" r="16"></circle>
            <path
              data-eye-path="left"
              class="submission-eye-path"
              d="M258 76 Q272 62 286 76"
            ></path>
            <path
              data-eye-path="right"
              class="submission-eye-path"
              d="M314 76 Q328 62 342 76"
            ></path>
            <path
              data-single-smile="flat"
              class="submission-single-smile"
              d="M248 125 Q300 125 352 125"
            ></path>
            <path
              data-single-smile="curve"
              class="submission-single-smile"
              d="M248 125 Q300 172 352 125"
            ></path>
          </g>

          <g data-submission-multi class="submission-multi">
            <circle data-multi-ring="1" class="submission-ring" cx="150" cy="82" r="52"></circle>
            <circle data-multi-ring="2" class="submission-ring" cx="300" cy="82" r="52"></circle>
            <circle data-multi-ring="3" class="submission-ring" cx="450" cy="82" r="52"></circle>

            <path data-multi-smile="1" class="submission-smile" d="M112 150 Q150 180 188 150"></path>
            <path data-multi-smile="2" class="submission-smile" d="M262 150 Q300 180 338 150"></path>
            <path data-multi-smile="3" class="submission-smile" d="M412 150 Q450 180 488 150"></path>
          </g>
        </svg>
      </div>

      <div class="submission-actions">
        <a
          class="button button-secondary submission-secondary-link"
          href="./banners.html"
        >
          Share UAT banner
        </a>
        <a
          class="button button-primary submission-partner-link"
          href="https://partners.gathergo.events"
          target="_blank"
          rel="noreferrer"
        >
          Visit GatherGo Partner's page
        </a>
      </div>
    </section>
  `;
}

function renderTestEnvironmentNotice(title) {
  return `
    <section class="service-disclaimer" aria-label="Test environment notice">
      <strong>${escapeHtml(title || "Test environment notice")}</strong>
      <p>${escapeHtml(TEST_ENVIRONMENT_NOTICE)}</p>
    </section>
  `;
}

function bindScheduledPhaseEvents() {
  document.querySelectorAll("[data-go-next-open]").forEach((button) => {
    button.addEventListener("click", jumpToNextPhase);
  });
}

function bindBlockedPhaseEvents() {
  document.querySelectorAll("[data-go-prev]").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-go-prev");
      selectPhase(targetId, true);
    });
  });
}

function bindStageEvents(phaseStatus) {
  const phaseId = phaseStatus.phase.id;

  if (phaseStatus.completed) {
    startSubmissionCelebration(phaseId);
  }

  document.querySelectorAll("[data-page-next]").forEach((button) => {
    button.addEventListener("click", () => {
      advancePhasePage(button.getAttribute("data-page-next"));
    });
  });

  document.querySelectorAll("[data-page-prev]").forEach((button) => {
    button.addEventListener("click", () => {
      rewindPhasePage(button.getAttribute("data-page-prev"));
    });
  });

  document.querySelectorAll(`[data-step-comment="${phaseId}"]`).forEach((field) => {
    field.addEventListener("input", () => {
      const targetPhaseId = field.getAttribute("data-step-comment");
      const stepId = field.getAttribute("data-step-id");
      updateStepComment(targetPhaseId, stepId, field.value);
    });
  });

  document.querySelectorAll(`[data-step-photo-input="${phaseId}"]`).forEach((field) => {
    field.addEventListener("change", async () => {
      const targetPhaseId = field.getAttribute("data-step-photo-input");
      const stepId = field.getAttribute("data-step-id");
      const statusNode = field.closest(".page-panel-photo")?.querySelector("[data-step-photo-status]");
      const file = field.files?.[0];

      if (!file) {
        return;
      }

      setInlineStatus(statusNode, "Saving photo locally...", "");

      try {
        const photo = await prepareStepPhoto(file);
        updateStepPhoto(targetPhaseId, stepId, photo);
        showToast("Photo saved for this instruction.", "success");
        render();
      } catch (error) {
        const message = error instanceof Error ? error.message : "Photo could not be saved.";
        setInlineStatus(statusNode, message, "error");
        showToast(message, "error");
      } finally {
        field.value = "";
      }
    });
  });

  document.querySelectorAll(`[data-step-photo-remove="${phaseId}"]`).forEach((button) => {
    button.addEventListener("click", () => {
      const targetPhaseId = button.getAttribute("data-step-photo-remove");
      const stepId = button.getAttribute("data-step-id");

      try {
        removeStepPhoto(targetPhaseId, stepId);
        showToast("Photo removed from this instruction.", "success");
        render();
      } catch (error) {
        const message = error instanceof Error ? error.message : "Photo could not be removed.";
        showToast(message, "error");
      }
    });
  });

  document.querySelectorAll("[data-stage-rating]").forEach((button) => {
    button.addEventListener("click", () => {
      const targetPhaseId = button.getAttribute("data-stage-rating");
      const ratingValue = Number(button.getAttribute("data-stage-rating-value"));
      const review = ensureStageReview(targetPhaseId);
      review.rating = ratingValue;
      stageReviews[targetPhaseId] = review;
      persistStageReviews();
      render();
    });
  });

  const reviewForm = document.querySelector(`[data-review-form="${phaseId}"]`);
  if (reviewForm) {
    const summaryField = reviewForm.querySelector('textarea[name="summary"]');
    const suggestionField = reviewForm.querySelector('textarea[name="suggestion"]');
    const issuesField = reviewForm.querySelector('textarea[name="issues"]');

    summaryField?.addEventListener("input", () => {
      const review = ensureStageReview(phaseId);
      review.summary = summaryField.value;
      stageReviews[phaseId] = review;
      persistStageReviews();
    });

    suggestionField?.addEventListener("input", () => {
      const review = ensureStageReview(phaseId);
      review.suggestion = suggestionField.value;
      stageReviews[phaseId] = review;
      persistStageReviews();
    });

    issuesField?.addEventListener("input", () => {
      const review = ensureStageReview(phaseId);
      review.issues = issuesField.value;
      stageReviews[phaseId] = review;
      persistStageReviews();
    });

    reviewForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      await submitStageReview(phaseId);
    });
  }

  document.querySelectorAll("[data-copy-invite]").forEach((button) => {
    button.addEventListener("click", async () => {
      const targetPhaseId = button.getAttribute("data-copy-invite");
      const inviteText = document.querySelector(`#invite-${targetPhaseId}`)?.textContent || "";

      try {
        await navigator.clipboard.writeText(`${inviteText}\n\n${window.location.href}`);
        showToast("Invite message copied.", "success");
      } catch (error) {
        showToast("Could not copy the invite message on this device.", "warning");
      }
    });
  });
}

async function submitStageReview(phaseId) {
  if (!ensureProfileReady()) {
    return;
  }

  const phase = PHASES.find((item) => item.id === phaseId);
  const completedSteps = getCompletedSteps(phaseId);
  const statusNode = document.querySelector(`[data-review-status="${phaseId}"]`);
  const review = ensureStageReview(phaseId);

  if (completedSteps.length !== phase.steps.length) {
    setInlineStatus(statusNode, "Finish every instruction page before submitting.", "warning");
    showToast("Finish the full stage before submitting the review.", "warning");
    return;
  }

  if (!review.rating) {
    setInlineStatus(statusNode, "Add an overall rating before submitting.", "warning");
    showToast("Each stage needs one overall rating.", "warning");
    return;
  }

  const payload = buildStagePayload(phase, review, completedSteps);
  setInlineStatus(statusNode, "Submitting...", "");

  try {
    const result = await submitFeedback(payload);
    review.completed = true;
    review.completedAt = new Date().toISOString();
    stageReviews[phaseId] = review;
    persistStageReviews();
    setInlineStatus(
      statusNode,
      getSubmissionSuccessMessage(result, phase.label),
      "success"
    );
    showToast(`${phase.label} review saved.`, "success");
    render();
  } catch (error) {
    review.completed = true;
    review.completedAt = new Date().toISOString();
    stageReviews[phaseId] = review;
    persistStageReviews();
    setInlineStatus(
      statusNode,
      `${phase.label} review was saved locally, but live submission failed.`,
      "warning"
    );
    showToast("Live submission failed, but your review was saved locally.", "warning");
    render();
  }
}

function buildStagePayload(phase, review, completedSteps) {
  return {
    testerName: profile.name,
    testerEmail: profile.email,
    testerRole: profile.role,
    submissionType: "stage-review",
    phaseId: phase.id,
    phaseTitle: `${phase.label}: ${phase.title}`,
    rating: review.rating,
    summary: review.summary || "",
    suggestion: review.suggestion || "",
    issues: review.issues || "",
    completedSteps: completedSteps.join(", "),
    instructionComments: serializeInstructionComments(phase.id),
    instructionPhotos: serializeInstructionPhotos(phase.id),
    stageStatus: "completed",
    completedAt: new Date().toISOString(),
    pageUrl: window.location.href,
  };
}

function startSubmissionCelebration(phaseId) {
  stopSubmissionCelebration();

  const root = document.querySelector(`[data-submission-celebration="${phaseId}"]`);
  if (!root) {
    return;
  }

  const sequence = [
    { stage: 0, eyeOpen: true, duration: 900 },
    { stage: 0, eyeOpen: false, duration: 180 },
    { stage: 0, eyeOpen: true, duration: 320 },
    { stage: 1, eyeOpen: true, duration: 900 },
    { stage: 1, eyeOpen: false, duration: 180 },
    { stage: 1, eyeOpen: true, duration: 360 },
    { stage: 2, eyeOpen: true, duration: 1650 },
  ];

  let frameIndex = 0;

  const playFrame = () => {
    if (!document.body.contains(root)) {
      stopSubmissionCelebration();
      return;
    }

    const frame = sequence[frameIndex];
    applySubmissionCelebrationFrame(root, frame.stage, frame.eyeOpen);
    submissionCelebrationTimer = window.setTimeout(() => {
      frameIndex = (frameIndex + 1) % sequence.length;
      playFrame();
    }, frame.duration);
  };

  playFrame();
}

function stopSubmissionCelebration() {
  if (submissionCelebrationTimer) {
    window.clearTimeout(submissionCelebrationTimer);
    submissionCelebrationTimer = null;
  }
}

function applySubmissionCelebrationFrame(root, stage, eyeOpen) {
  const singleGroup = root.querySelector("[data-submission-single]");
  const multiGroup = root.querySelector("[data-submission-multi]");
  const leftRing = root.querySelector('[data-eye-ring="left"]');
  const rightRing = root.querySelector('[data-eye-ring="right"]');
  const leftPath = root.querySelector('[data-eye-path="left"]');
  const rightPath = root.querySelector('[data-eye-path="right"]');
  const flatSmile = root.querySelector('[data-single-smile="flat"]');
  const curveSmile = root.querySelector('[data-single-smile="curve"]');

  if (!singleGroup || !multiGroup) {
    return;
  }

  if (stage < 2) {
    singleGroup.style.opacity = "1";
    singleGroup.style.transform = "translateY(0) scale(1)";
    multiGroup.style.opacity = "0";
    multiGroup.style.transform = "translateY(18px) scale(0.92)";

    [leftRing, rightRing].forEach((node) => {
      if (!node) return;
      node.setAttribute("r", eyeOpen ? "16" : "0");
      node.style.opacity = eyeOpen ? "1" : "0";
    });

    [leftPath, rightPath].forEach((node) => {
      if (!node) return;
      node.style.opacity = eyeOpen ? "0" : "1";
    });

    if (flatSmile) {
      flatSmile.style.opacity = stage === 0 ? "1" : "0";
    }

    if (curveSmile) {
      curveSmile.style.opacity = stage === 1 ? "1" : "0";
    }

    return;
  }

  singleGroup.style.opacity = "0";
  singleGroup.style.transform = "translateY(-12px) scale(0.88)";
  multiGroup.style.opacity = "1";
  multiGroup.style.transform = "translateY(0) scale(1)";
}

async function submitFeedback(payload) {
  persistFeedbackBackup(payload);

  const delivered = [];
  const errors = [];

  if (isCollectorConfigured()) {
    try {
      await submitCollectorPayload(buildCollectorPayload(payload));
      delivered.push("collector");
    } catch (error) {
      errors.push(error);
    }
  }

  if (isGoogleFormConfigured()) {
    try {
      if (await submitGoogleFormPayload(payload)) {
        delivered.push("google-form");
      }
    } catch (error) {
      errors.push(error);
    }
  }

  if (delivered.length) {
    return delivered.join("+");
  }

  if (errors.length) {
    throw errors[0];
  }

  if (!isGoogleFormConfigured() && !isCollectorConfigured()) {
    return "local";
  }
}

async function submitCollectorPayload(payload) {
  return submitHiddenForm(config.feedback.collectorUrl, {
    payload: JSON.stringify(payload),
  });
}

async function submitGoogleFormPayload(payload) {
  const fields = {};
  Object.entries(config.feedback.entryMap || {}).forEach(([fieldName, entryKey]) => {
    if (!entryKey) return;
    if (
      payload[fieldName] === undefined ||
      payload[fieldName] === null ||
      payload[fieldName] === ""
    ) {
      return;
    }
    fields[entryKey] = payload[fieldName];
  });

  if (!Object.keys(fields).length) {
    return false;
  }

  const submitUrl = toFormResponseUrl(config.feedback.googleFormUrl);
  const body = new URLSearchParams();

  Object.entries(fields).forEach(([entryKey, value]) => {
    body.append(entryKey, String(value));
  });

  await fetch(submitUrl, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: body.toString(),
  });

  return true;
}

function submitHiddenForm(action, fields) {
  return new Promise((resolve, reject) => {
    try {
      const frameName = `submission-frame-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      const iframe = document.createElement("iframe");
      iframe.name = frameName;
      iframe.hidden = true;
      iframe.src = "about:blank";

      const form = document.createElement("form");
      form.method = "POST";
      form.action = action;
      form.target = frameName;
      form.acceptCharset = "UTF-8";
      form.style.display = "none";

      Object.entries(fields || {}).forEach(([name, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = String(value ?? "");
        form.appendChild(input);
      });

      let loadCount = 0;
      let settled = false;

      const cleanup = () => {
        window.setTimeout(() => {
          form.remove();
          iframe.remove();
        }, 0);
      };

      const finish = () => {
        if (settled) {
          return;
        }
        settled = true;
        cleanup();
        resolve(true);
      };

      const timer = window.setTimeout(finish, 1800);

      iframe.addEventListener("load", () => {
        loadCount += 1;
        if (loadCount > 1) {
          window.clearTimeout(timer);
          finish();
        }
      });

      document.body.appendChild(iframe);
      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      reject(error);
    }
  });
}

function toFormResponseUrl(rawUrl) {
  let parsed;
  try {
    parsed = new URL(rawUrl);
  } catch (error) {
    throw new Error("Invalid Google Form URL.");
  }

  if (parsed.hostname === "forms.gle") {
    throw new Error("Use the full docs.google.com form URL.");
  }

  const path = parsed.pathname;
  if (path.includes("/formResponse")) {
    return `${parsed.origin}${path}`;
  }
  if (path.includes("/viewform")) {
    return `${parsed.origin}${path.replace("/viewform", "/formResponse")}`;
  }

  const match = path.match(/\/forms\/d\/e\/([^/]+)/);
  if (match?.[1]) {
    return `${parsed.origin}/forms/d/e/${match[1]}/formResponse`;
  }

  throw new Error("Could not derive Google Form response URL.");
}

function advancePhasePage(phaseId) {
  const phase = PHASES.find((item) => item.id === phaseId);
  const pages = getPhasePages(phase);
  const progress = getPhaseProgress(phaseId, pages.length);
  const currentPage = pages[progress.pageIndex];

  if (currentPage.type === "step") {
    const completedSteps = new Set(progress.completedSteps || []);
    completedSteps.add(currentPage.id);
    progress.completedSteps = Array.from(completedSteps);
  }

  progress.pageIndex = Math.min(progress.pageIndex + 1, pages.length - 1);
  progress.lastVisitedAt = new Date().toISOString();
  phaseProgress[phaseId] = progress;
  persistPhaseProgress();
  render();
}

function rewindPhasePage(phaseId) {
  const phase = PHASES.find((item) => item.id === phaseId);
  const pages = getPhasePages(phase);
  const progress = getPhaseProgress(phaseId, pages.length);

  progress.pageIndex = Math.max(progress.pageIndex - 1, 0);
  progress.lastVisitedAt = new Date().toISOString();
  phaseProgress[phaseId] = progress;
  persistPhaseProgress();
  render();
}

function jumpToNextPhase() {
  const phaseStatuses = getAllPhaseStatuses();
  const open = phaseStatuses.find((status) => status.status === "open");

  if (open) {
    selectPhase(open.phase.id, false);
    return;
  }

  const scheduled = phaseStatuses.find((status) => status.status === "scheduled");
  if (scheduled) {
    selectPhase(scheduled.phase.id, false);
    showToast(`${scheduled.phase.label} opens on ${formatDate(scheduled.releaseDate)}.`, "warning");
    return;
  }

  showToast("All stages are complete.", "success");
}

function selectPhase(phaseId, showRedirectToast) {
  const phaseStatuses = getAllPhaseStatuses();
  let targetStatus =
    phaseStatuses.find((status) => status.phase.id === phaseId) || phaseStatuses[0];

  if (targetStatus.status === "blocked" && targetStatus.previousPhase) {
    uiState.selectedPhaseId = targetStatus.previousPhase.id;
    persistUiState();
    if (showRedirectToast) {
      showToast(
        `Finish ${targetStatus.previousPhase.label} before starting ${targetStatus.phase.label}.`,
        "warning"
      );
    }
    render();
    return;
  }

  uiState.selectedPhaseId = targetStatus.phase.id;
  persistUiState();

  if (targetStatus.status === "scheduled" && showRedirectToast) {
    showToast(`${targetStatus.phase.label} opens on ${formatDate(targetStatus.releaseDate)}.`, "warning");
  }

  if (uiState.appView !== "testing") {
    uiState.appView = "testing";
    persistUiState();
  }

  render();
}

function ensureSelectedPhase() {
  const phaseStatuses = getAllPhaseStatuses();
  const fallback =
    phaseStatuses.find((status) => status.status === "open")?.phase.id ||
    phaseStatuses.find((status) => !status.completed)?.phase.id ||
    PHASES[0].id;

  if (!uiState.selectedPhaseId) {
    uiState.selectedPhaseId = fallback;
  }

  const selectedStatus = phaseStatuses.find((status) => status.phase.id === uiState.selectedPhaseId);
  if (selectedStatus?.status === "blocked" && selectedStatus.previousPhase) {
    uiState.selectedPhaseId = selectedStatus.previousPhase.id;
  }

  persistUiState();
}

function resolveSelectedPhaseStatus(phaseStatuses) {
  let selectedStatus =
    phaseStatuses.find((status) => status.phase.id === uiState.selectedPhaseId) ||
    phaseStatuses[0];

  if (selectedStatus.status === "blocked" && selectedStatus.previousPhase) {
    uiState.selectedPhaseId = selectedStatus.previousPhase.id;
    persistUiState();
    selectedStatus =
      phaseStatuses.find((status) => status.phase.id === uiState.selectedPhaseId) ||
      phaseStatuses[0];
  }

  return selectedStatus;
}

function getAllPhaseStatuses() {
  return PHASES.map((phase, index) => getPhaseStatus(phase, index));
}

function getPhaseStatus(phase, index) {
  const releaseValue = config.phaseReleaseDates[phase.id];
  const releaseDate = releaseValue ? new Date(releaseValue) : null;
  const previousPhase = index > 0 ? PHASES[index - 1] : null;
  const previousComplete = previousPhase ? Boolean(stageReviews[previousPhase.id]?.completed) : true;
  const completed = Boolean(stageReviews[phase.id]?.completed);
  const released = releaseDate ? Date.now() >= releaseDate.getTime() : true;

  let status = "open";
  let statusLabel = "Open";

  if (completed) {
    status = "complete";
    statusLabel = "Completed";
  } else if (!released) {
    status = "scheduled";
    statusLabel = "Locked by date";
  } else if (!previousComplete) {
    status = "blocked";
    statusLabel = "Finish previous stage";
  }

  return {
    phase,
    previousPhase,
    releaseDate,
    completed,
    status,
    statusLabel,
    dateLabel: releaseDate
      ? `Scheduled opening: ${formatDate(releaseDate)}`
      : "Set a release date in config.js",
  };
}

function getPhasePages(phase) {
  return [
    {
      type: "intro",
      id: `${phase.id}-intro`,
    },
    ...phase.steps.map((step, index) => ({
      ...step,
      type: "step",
      stepNumber: index + 1,
    })),
    {
      type: "review",
      id: `${phase.id}-review`,
    },
  ];
}

function getPhaseProgress(phaseId, pageCount) {
  const current = phaseProgress[phaseId] || {
    pageIndex: 0,
    completedSteps: [],
    stepComments: {},
    stepPhotos: {},
  };

  return {
    ...current,
    pageIndex: clampNumber(current.pageIndex, 0, Math.max(pageCount - 1, 0)),
    completedSteps: Array.isArray(current.completedSteps) ? current.completedSteps : [],
    stepComments:
      current.stepComments && typeof current.stepComments === "object" ? current.stepComments : {},
    stepPhotos:
      current.stepPhotos && typeof current.stepPhotos === "object" ? current.stepPhotos : {},
  };
}

function getCompletedSteps(phaseId) {
  const phase = PHASES.find((item) => item.id === phaseId);
  return getPhaseProgress(phaseId, getPhasePages(phase).length).completedSteps;
}

function getStepComment(progress, stepId) {
  return progress?.stepComments?.[stepId] || "";
}

function getStepPhoto(progress, stepId) {
  const photo = progress?.stepPhotos?.[stepId];
  return photo && typeof photo === "object" ? photo : null;
}

function updateStepComment(phaseId, stepId, value) {
  if (!phaseId || !stepId) {
    return;
  }

  const phase = PHASES.find((item) => item.id === phaseId);
  if (!phase) {
    return;
  }

  const progress = getPhaseProgress(phaseId, getPhasePages(phase).length);
  progress.stepComments = {
    ...progress.stepComments,
    [stepId]: String(value || ""),
  };
  progress.lastVisitedAt = new Date().toISOString();
  phaseProgress[phaseId] = progress;
  persistPhaseProgress();
}

function updateStepPhoto(phaseId, stepId, photo) {
  if (!phaseId || !stepId || !photo?.dataUrl) {
    return;
  }

  const phase = PHASES.find((item) => item.id === phaseId);
  if (!phase) {
    return;
  }

  const progress = getPhaseProgress(phaseId, getPhasePages(phase).length);
  const previousPhoto = progress.stepPhotos?.[stepId];
  progress.stepPhotos = {
    ...progress.stepPhotos,
    [stepId]: photo,
  };
  progress.lastVisitedAt = new Date().toISOString();
  phaseProgress[phaseId] = progress;

  if (!persistPhaseProgress()) {
    if (previousPhoto) {
      progress.stepPhotos[stepId] = previousPhoto;
    } else {
      delete progress.stepPhotos[stepId];
    }
    phaseProgress[phaseId] = progress;
    throw new Error("Local storage is full. Remove another photo or choose a smaller image.");
  }
}

function removeStepPhoto(phaseId, stepId) {
  if (!phaseId || !stepId) {
    return;
  }

  const phase = PHASES.find((item) => item.id === phaseId);
  if (!phase) {
    return;
  }

  const progress = getPhaseProgress(phaseId, getPhasePages(phase).length);
  const previousPhoto = progress.stepPhotos?.[stepId];
  if (!previousPhoto) {
    return;
  }

  delete progress.stepPhotos[stepId];
  progress.lastVisitedAt = new Date().toISOString();
  phaseProgress[phaseId] = progress;

  if (!persistPhaseProgress()) {
    progress.stepPhotos[stepId] = previousPhoto;
    phaseProgress[phaseId] = progress;
    throw new Error("The photo could not be removed right now.");
  }
}

function serializeInstructionComments(phaseId) {
  const phase = PHASES.find((item) => item.id === phaseId);
  if (!phase) {
    return "";
  }

  const progress = getPhaseProgress(phaseId, getPhasePages(phase).length);

  return phase.steps
    .map((step, index) => {
      const comment = progress.stepComments?.[step.id];
      if (!comment || !comment.trim()) {
        return "";
      }

      return `Instruction ${index + 1} - ${step.title}: ${comment.trim()}`;
    })
    .filter(Boolean)
    .join("\n\n");
}

function serializeInstructionPhotos(phaseId) {
  const phase = PHASES.find((item) => item.id === phaseId);
  if (!phase) {
    return "";
  }

  const progress = getPhaseProgress(phaseId, getPhasePages(phase).length);

  return phase.steps
    .map((step, index) => {
      const photo = progress.stepPhotos?.[step.id];
      if (!photo?.dataUrl) {
        return "";
      }

      const details = [photo.name || "Uploaded photo", photo.width && photo.height ? `${photo.width}x${photo.height}` : ""]
        .filter(Boolean)
        .join(" · ");

      return `Instruction ${index + 1} - ${step.title}: ${details}`;
    })
    .filter(Boolean)
    .join("\n");
}

function buildCollectorPayload(payload) {
  return {
    ...payload,
    submissionSource: "gathergo-uat-hub",
    submittedAt: new Date().toISOString(),
    instructionEvidence: buildInstructionEvidence(payload.phaseId),
  };
}

function buildInstructionEvidence(phaseId) {
  const phase = PHASES.find((item) => item.id === phaseId);
  if (!phase) {
    return [];
  }

  const progress = getPhaseProgress(phaseId, getPhasePages(phase).length);

  return phase.steps.map((step, index) => {
    const comment = progress.stepComments?.[step.id] || "";
    const photo = progress.stepPhotos?.[step.id] || null;

    return {
      stepId: step.id,
      stepNumber: index + 1,
      stepTitle: step.title,
      comment,
      photoName: photo?.name || "",
      photoMimeType: photo?.type || "",
      photoWidth: photo?.width || null,
      photoHeight: photo?.height || null,
      photoStoredSize: photo?.storedSize || 0,
      photoUpdatedAt: photo?.updatedAt || "",
      photoDataUrl: photo?.dataUrl || "",
    };
  });
}

async function registerProfileInterest(currentProfile) {
  if (!currentProfile?.name || !currentProfile?.email) {
    return "skipped";
  }

  const signature = buildProfileInterestSignature(currentProfile);
  if (profileInterestState.signature === signature && isRemoteSubmissionResult(profileInterestState.result)) {
    return "already-synced";
  }

  const result = await submitFeedback(buildProfileInterestPayload(currentProfile));

  if (isRemoteSubmissionResult(result)) {
    profileInterestState = {
      signature,
      submittedAt: new Date().toISOString(),
      result,
    };
    persistProfileInterestState();
  }

  return result;
}

function buildProfileInterestPayload(currentProfile) {
  return {
    testerName: currentProfile.name,
    testerEmail: currentProfile.email,
    testerRole: currentProfile.role,
    submissionType: "tester-interest",
    phaseId: "",
    phaseTitle: "",
    rating: "",
    summary: "Tester signed up before the staged tests opened.",
    suggestion: "",
    issues: "",
    completedSteps: "",
    instructionComments: "",
    instructionPhotos: "",
    stageStatus: "interested",
    completedAt: new Date().toISOString(),
    pageUrl: window.location.href,
  };
}

function buildProfileInterestSignature(currentProfile) {
  return [
    String(currentProfile.name || "").trim().toLowerCase(),
    String(currentProfile.email || "").trim().toLowerCase(),
    String(currentProfile.role || "").trim().toLowerCase(),
  ].join("|");
}

function ensureStageReview(phaseId) {
  return (
    stageReviews[phaseId] || {
      rating: 0,
      summary: "",
      suggestion: "",
      issues: "",
      completed: false,
    }
  );
}

function isGoogleFormConfigured() {
  const feedback = config.feedback || {};
  return Boolean(feedback.googleFormUrl && Object.values(feedback.entryMap || {}).some(Boolean));
}

function isCollectorConfigured() {
  return Boolean(config.feedback?.collectorUrl);
}

function hasRemoteDestination() {
  return isCollectorConfigured() || isGoogleFormConfigured();
}

function isRemoteSubmissionResult(result) {
  return Boolean(result && result !== "local" && result !== "already-synced" && result !== "skipped");
}

function ensureProfileReady() {
  if (profile.name && profile.email) {
    return true;
  }

  showToast("Save your tester profile before submitting a stage review.", "warning");
  uiState.appView = "profile";
  persistUiState();
  render();
  return false;
}

function persistPhaseProgress() {
  try {
    localStorage.setItem(STORAGE_KEYS.phaseProgress, JSON.stringify(phaseProgress));
    return true;
  } catch (error) {
    return false;
  }
}

function persistStageReviews() {
  localStorage.setItem(STORAGE_KEYS.stageReviews, JSON.stringify(stageReviews));
}

function persistUiState() {
  localStorage.setItem(STORAGE_KEYS.ui, JSON.stringify(uiState));
}

function persistFeedbackBackup(payload) {
  feedbackBackup = [...feedbackBackup, payload];
  localStorage.setItem(STORAGE_KEYS.backup, JSON.stringify(feedbackBackup));
}

function persistProfileInterestState() {
  localStorage.setItem(STORAGE_KEYS.profileInterest, JSON.stringify(profileInterestState));
}

function exportFeedbackBackup() {
  const hasExportData =
    feedbackBackup.length ||
    Object.keys(phaseProgress || {}).length ||
    Object.keys(stageReviews || {}).length;

  if (!hasExportData) {
    showToast("There is no saved feedback or photo evidence to export yet.", "warning");
    return;
  }

  const exportPayload = {
    exportedAt: new Date().toISOString(),
    profile,
    stageReviews,
    feedbackBackup,
    phaseProgress,
  };

  const blob = new Blob([JSON.stringify(exportPayload, null, 2)], {
    type: "application/json",
  });
  const downloadUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.download = `gathergo-uat-feedback-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(downloadUrl);
  showToast("Saved reviews and local photo evidence exported.", "success");
}

function getSubmissionSuccessMessage(result, phaseLabel) {
  const delivered = String(result || "")
    .split("+")
    .map((item) => item.trim())
    .filter(Boolean);

  if (!delivered.length || delivered.includes("local")) {
    return `${phaseLabel} review saved locally.`;
  }

  if (delivered.includes("collector") && delivered.includes("google-form")) {
    return `${phaseLabel} review sent to the collector, mirrored to Google Forms, and saved locally.`;
  }

  if (delivered.includes("collector")) {
    return `${phaseLabel} review sent to the collector and saved locally.`;
  }

  if (delivered.includes("google-form")) {
    return `${phaseLabel} review sent to Google Forms and saved locally.`;
  }

  return `${phaseLabel} review saved locally.`;
}

function formatDate(dateValue) {
  if (!(dateValue instanceof Date) || Number.isNaN(dateValue.getTime())) {
    return "Release date pending";
  }

  return new Intl.DateTimeFormat("en-NG", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: config.timezone,
  }).format(dateValue);
}

function formatPhaseCardDate(dateValue) {
  if (!(dateValue instanceof Date) || Number.isNaN(dateValue.getTime())) {
    return "soon";
  }

  return new Intl.DateTimeFormat("en-NG", {
    day: "numeric",
    month: "short",
    timeZone: config.timezone,
  }).format(dateValue);
}

function setInlineStatus(node, message, tone) {
  if (!node) {
    return;
  }
  node.textContent = message;
  node.className = `inline-status ${tone || ""}`.trim();
}

function statusToClass(status) {
  switch (status) {
    case "open":
      return "open";
    case "complete":
      return "complete";
    case "scheduled":
      return "locked";
    case "blocked":
      return "blocked";
    default:
      return "neutral";
  }
}

function showToast(message, tone = "neutral") {
  if (!toastRoot) {
    return;
  }

  const toast = document.createElement("div");
  toast.className = `toast ${tone}`;
  toast.textContent = message;
  toastRoot.appendChild(toast);

  window.setTimeout(() => {
    toast.remove();
  }, 3200);
}

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function clampNumber(value, min, max) {
  return Math.min(Math.max(Number(value) || 0, min), max);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function prepareStepPhoto(file) {
  if (!(file instanceof File) || !file.type.startsWith("image/")) {
    throw new Error("Please choose an image file.");
  }

  const image = await loadImageFromFile(file);
  const { width, height } = fitPhotoWithinBounds(
    image.naturalWidth || image.width,
    image.naturalHeight || image.height,
    STEP_PHOTO_MAX_DIMENSION
  );

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("This browser could not prepare the photo.");
  }

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);
  context.drawImage(image, 0, 0, width, height);

  const dataUrl = canvas.toDataURL("image/jpeg", STEP_PHOTO_OUTPUT_QUALITY);

  return {
    name: file.name || "task-photo.jpg",
    type: "image/jpeg",
    width,
    height,
    storedSize: approximateDataUrlBytes(dataUrl),
    updatedAt: new Date().toISOString(),
    dataUrl,
  };
}

function loadImageFromFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onerror = () => {
      reject(new Error("The photo could not be read."));
    };

    reader.onload = () => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = () => reject(new Error("The photo could not be opened."));
      image.src = String(reader.result || "");
    };

    reader.readAsDataURL(file);
  });
}

function fitPhotoWithinBounds(width, height, maxDimension) {
  const safeWidth = Math.max(Number(width) || 0, 1);
  const safeHeight = Math.max(Number(height) || 0, 1);
  const longestSide = Math.max(safeWidth, safeHeight);
  const scale = longestSide > maxDimension ? maxDimension / longestSide : 1;

  return {
    width: Math.max(1, Math.round(safeWidth * scale)),
    height: Math.max(1, Math.round(safeHeight * scale)),
  };
}

function approximateDataUrlBytes(dataUrl) {
  const base64 = String(dataUrl || "").split(",")[1] || "";
  const padding = base64.endsWith("==") ? 2 : base64.endsWith("=") ? 1 : 0;
  return Math.max(0, Math.floor((base64.length * 3) / 4) - padding);
}

function formatBytes(value) {
  const bytes = Number(value) || 0;
  if (!bytes) {
    return "";
  }

  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function renderLogoMark() {
  return `
    <svg viewBox="0 0 80 80" role="img" width="100%" height="100%">
      <rect width="80" height="80" rx="15" fill="#0FF1CF"></rect>
      <path d="M26.74 43.17C26.74 40.44 24.52 38.19 21.82 38.19C19.06 38.19 16.84 40.44 16.84 43.17C16.84 45.93 19.06 48.12 21.82 48.12C24.52 48.12 26.74 45.93 26.74 43.17ZM13.99 43.17C13.99 38.85 17.47 35.37 21.82 35.37C26.11 35.37 29.59 38.85 29.59 43.17C29.59 47.52 26.11 51.03 21.82 51.03C17.47 51.03 13.99 47.52 13.99 43.17ZM17.59 53.31C18.49 54.69 20.05 55.59 21.82 55.59C23.53 55.59 25.06 54.69 25.96 53.31C26.29 52.86 26.74 52.62 27.22 52.62C27.46 52.62 27.73 52.68 27.94 52.83C28.63 53.31 28.78 54.15 28.39 54.84C27.01 57.03 24.55 58.47 21.82 58.47C19 58.47 16.6 57.03 15.16 54.84C14.77 54.15 14.95 53.31 15.61 52.83C15.85 52.68 16.09 52.62 16.33 52.62C16.84 52.62 17.32 52.86 17.59 53.31ZM44.3774 43.17C44.3774 40.44 42.1574 38.19 39.4574 38.19C36.6974 38.19 34.4774 40.44 34.4774 43.17C34.4774 45.93 36.6974 48.12 39.4574 48.12C42.1574 48.12 44.3774 45.93 44.3774 43.17ZM31.6274 43.17C31.6274 38.85 35.1074 35.37 39.4574 35.37C43.7474 35.37 47.2274 38.85 47.2274 43.17C47.2274 47.52 43.7474 51.03 39.4574 51.03C35.1074 51.03 31.6274 47.52 31.6274 43.17ZM35.2274 53.31C36.1274 54.69 37.6874 55.59 39.4574 55.59C41.1674 55.59 42.6974 54.69 43.5974 53.31C43.9274 52.86 44.3774 52.62 44.8574 52.62C45.0974 52.62 45.3674 52.68 45.5774 52.83C46.2674 53.31 46.4174 54.15 46.0274 54.84C44.6474 57.03 42.1874 58.47 39.4574 58.47C36.6374 58.47 34.2374 57.03 32.7974 54.84C32.4074 54.15 32.5874 53.31 33.2474 52.83C33.4874 52.68 33.7274 52.62 33.9674 52.62C34.4774 52.62 34.9574 52.86 35.2274 53.31ZM49.2648 43.17C49.2648 38.85 52.7448 35.37 57.0648 35.37C61.3848 35.37 64.8648 38.85 64.8648 43.17C64.8648 47.52 61.3848 51.03 57.0648 51.03C52.7448 51.03 49.2648 47.52 49.2648 43.17ZM61.9848 43.17C61.9848 40.44 59.7648 38.22 57.0648 38.22C54.3048 38.22 52.0848 40.44 52.0848 43.17C52.0848 45.93 54.3048 48.15 57.0648 48.15C59.7648 48.15 61.9848 45.93 61.9848 43.17Z" fill="#01082E"></path>
    </svg>
  `;
}
