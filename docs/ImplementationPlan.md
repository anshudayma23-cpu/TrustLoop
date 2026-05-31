# TrustLoop — Phase-Wise Implementation Plan

Based on the `Architecture.md` specification, here is the structured phase-wise implementation plan for building the TrustLoop interactive prototype.

---

## Phase 1: Foundation & Design System Setup
**Goal:** Establish the project structure and translate the design tokens into functional CSS.

1. **Project Initialization**
   - Initialize a React application using Vite (`npm create vite@latest`).
   - Clean up default Vite boilerplate (App.css, assets).
   - Configure `index.html` with proper meta tags, SEO description, and Google Fonts (`DM Sans`).

2. **Design System Implementation (`index.css`)**
   - Define all CSS custom properties (variables) for Colors (Primary, TrustLoop specific palettes).
   - Define Typography (font sizes, weights), Spacing scale, Border Radii, and Shadows.
   - Implement global reset and base body styles.
   - Set up core CSS animations (fadeSlideUp, slideDown, shakeSettle, pulse).

---

## Phase 2: Data Architecture & State Modeling
**Goal:** Structure the diverse content required for the 5 unique demo queries.

1. **Data Mocking (`data.js`)**
   - Create a structured array of 5 query objects.
   - Populate `assumptions` arrays (editable vs locked states).
   - Populate `answerSections` with India-specific content.
   - Populate `devilsAdvocate` items with specific challenge categories (Reasoning Gap, What I Left Out, etc.).
   - Define the specific `edgeCase` structure for Query 5 (SEBI Compliance).

2. **Global State Strategy (`App.jsx`)**
   - Define state for `activeQuery` (0-4) to track which query is selected.
   - Define state for `screen` (1-8) to track the current UI state in the flow.

---

## Phase 3: Core Layout & Navigation
**Goal:** Build the static outer shell of the application.

1. **Global UI Components**
   - **Top Navigation:** Claude logo, wordmark, and TrustLoop beta badge.
   - **Query Selector:** Horizontal list of 5 selectable queries. Changing a query must reset the `screen` state to 1.
   - **Screen Navigation:** Horizontal list of the 8 screens for manual debugging/navigation.
   - **Chat Window Container:** The main scrollable area with the header (status dot, "TrustLoop: ON") and fixed bottom input bar.
   - **Bottom Navigation:** Previous/Next buttons and screen counter.

---

## Phase 4: Screen Implementation (The 8 States)
**Goal:** Build the specific UI and logic for each of the 8 screens.

1. **Screen 1 (Chat) & Screen 2 (Detecting)**
   - Render previous conversation context.
   - Implement the pulsing amber detecting pill.
   - Logic: Screen 2 auto-advances to Screen 3 after 1.8s (or Screen 8 if it's Query 5).

2. **Screen 3 (Assumptions) & Screen 4 (Editing)**
   - Build the Assumption Contract card (purple border).
   - Map over assumptions, showing 'Confirmed' pills or 'Edit' buttons.
   - Implement the inline editing state for Screen 4 with a pre-filled input.

3. **Screen 5 (Answer)**
   - Render the Claude message bubble with the green TrustLoop badge.
   - Implement staggered reveal logic (400ms delay between sections) using React `useEffect` and local state.
   - Auto-advance to Screen 6 once all sections are visible.

4. **Screen 6 (Devil's Advocate) & Screen 7 (Expanded)**
   - Render the truncated answer and the orange DA card below it.
   - Map over DA items with staggered fade-in (300ms delay).
   - Implement the "Explore this" expansion logic for the first item (Screen 7).

5. **Screen 8 (Edge Case - Query 5 Only)**
   - Build the red warning card with shake animation.
   - Render the specific compliance warning text, missing items list, and guidance box.

---

## Phase 5: Polish & Interactions
**Goal:** Connect everything and ensure smooth user experience.

1. **Navigation Logic Hookup**
   - Wire up the Next/Previous buttons in the bottom nav (disabling Next on auto-advancing screens).
   - Connect in-context buttons (e.g., "Confirm all", "Save and generate", "Start fresh").

2. **Animation Refinement**
   - Ensure screen transitions feel smooth (React `key` changes on the container to trigger CSS animations).
   - Auto-scroll the chat container to the bottom when the screen state changes.

3. **Final Testing**
   - Verify all 5 queries load their unique content.
   - Verify Query 5 correctly skips Screens 3-7.
