# TrustLoop — Evaluations & Edge Cases (Phase-Wise)

This document outlines the testing strategies, acceptance criteria (evaluations), and potential edge cases to look out for during each phase of the TrustLoop implementation plan.

---

## Phase 1: Foundation & Design System Setup

### Evaluations
- **Font Loading:** Verify that `DM Sans` is correctly applied globally and that fallback fonts (`-apple-system`, `sans-serif`) take effect if network issues block Google Fonts.
- **Color Accuracy:** Inspect elements to ensure CSS variables precisely match the specific hex codes provided in `Architecture.md` (e.g., Purple `#7C3AED`, Orange `#F97316`).
- **Responsive Shell:** Ensure the `.main-content` max-width bounds the app correctly (860px) and centers it on wide screens.

### Edge Cases to Handle
- **Network Failure:** Font fails to load (ensure fallbacks look acceptable).
- **Extreme Viewports:** Browser zoom at 150%+ or narrow mobile screens (ensure the top nav doesn't overflow or clip the logo).

---

## Phase 2: Data Architecture & State Modeling

### Evaluations
- **Data Integrity:** Verify that all 5 queries exist and contain structurally identical objects (except Query 5, which replaces standard arrays with an `edgeCase` object).
- **State Reset Logic:** Verify that triggering the `handleQuerySwitch` function successfully resets the `screen` state back to `1` (Chat) and resets any in-progress animations.

### Edge Cases to Handle
- **Rapid Query Switching:** User clicks between Query 1 and Query 2 rapidly. State must not bleed over (e.g., showing Query 1's answer on Query 2's screen).
- **Missing Data Fields:** If a query accidentally has an empty `assumptions` array, the UI should handle it gracefully without crashing.

---

## Phase 3: Core Layout & Navigation

### Evaluations
- **Active States:** Verify that the Query Selector and Screen Navigation buttons clearly indicate their active state with a black background and white text.
- **Manual Navigation:** Verify that clicking through the Screen Navigation buttons (1 through 8) correctly forces the UI into that state, bypassing any timers.

### Edge Cases to Handle
- **Mobile Wrapping:** Query selector buttons overflowing on small screens. (Must use `flex-wrap` and gap spacing).
- **Out of Bounds:** `goNext()` or `goPrev()` logic attempting to navigate past screen 8 or before screen 1.

---

## Phase 4: Screen Implementation (The 8 States)

### Evaluations
- **Screen 2 (Detecting):** Verify the amber dot pulses (`pulse` animation) and auto-advances precisely after 1.8 seconds.
- **Screen 4 (Editing):** Verify the inline input autofocuses, allows text entry, and updates the local state.
- **Screen 5 (Answer):** Verify that answer sections stream in sequentially with a strict 400ms delay between each section.
- **Screen 6 (Devil's Advocate):** Verify items fade in with a 300ms delay.
- **Screen 8 (Edge Case):** Verify the shake animation triggers on load (`shakeSettle`).

### Edge Cases to Handle
- **Unmounted Timer Leaks:** *Critical edge case.* If the user is on Screen 2 (Detecting) and manually clicks to Screen 1 before the 1.8s timer fires, the component must clear the timeout. Otherwise, the app will unexpectedly jump to Screen 3 while the user is looking at Screen 1.
- **Empty Edit:** User deletes all text in the assumption edit box on Screen 4. (UI should still function, though text will be blank).
- **Query 5 Routing:** Ensure Query 5 logic rigorously forces `Screen 2 -> Screen 8` and absolutely prevents Screens 3-7 from rendering for Query 5.

---

## Phase 5: Polish & Interactions

### Evaluations
- **End-to-End Flow:** Walk through Query 1 from Screen 1 to 6 using only the primary on-screen buttons (not the debug navigation).
- **Auto-Scrolling:** Verify that moving to a new screen automatically scrolls the `.chat-body` to the bottom so new content is visible.

### Edge Cases to Handle
- **Interrupting Animations:** User clicks "Previous" while Screen 5 answer sections are halfway through streaming in. (The state must reset cleanly, and if they return to Screen 5, the streaming should restart from the beginning).
- **Scroll Bumping:** Auto-scroll firing too early before the DOM has rendered the new screen elements (use `setTimeout` or layout effects to ensure scroll happens after render).
