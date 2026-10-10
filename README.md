# QuizNova &mdash; Interactive Educational Quiz Game

> *"Challenge Your Mind. Track Your Progress."*

A modern, responsive, client-side educational quiz application developed using pure **HTML5**, **CSS3**, and **Vanilla JavaScript**. QuizNova delivers an engaging learning experience featuring multi-format questions, high-precision timing, comprehensive result analytics, in-depth educational rationales, and browser-local leaderboard persistence.

Developed as a showcase submission for the **SkillCraft Technology Web Development Internship — Task 03**.

---

## SkillCraft Technology Internship — Task 03

This project fulfills and exceeds the requirements of **Task 03 (Quiz Web Application)** in the SkillCraft Technology Web Development Internship track. It demonstrates core software engineering disciplines and frontend fundamentals without relying on high-level frontend frameworks:

1. **Interactive Quiz Development**: Full lifecycle flow from custom quiz configuration (category, difficulty, question volume, timer mode) to interactive question traversal and detailed solution debriefing.
2. **Vanilla JavaScript DOM Manipulation**: Clean dynamic generation of interactive choice cards, multi-select checkboxes, and keyboard-accessible text inputs using native DOM APIs.
3. **Event Handling & Keyboard Accessibility**: Full event delegation and keyboard navigation (Tab, Enter, Arrow keys, numeric shortcuts 1–4) ensuring WCAG compliance.
4. **Conditional Rendering**: Single-page application (SPA) state flow transitioning seamlessly across the Welcome Screen, Active Quiz HUD, Results Dashboard, and Review Accordion without page refreshes.
5. **State Management**: Centralized application state (`AppState`) decoupling user responses, active question pools, and configuration from raw UI presentation.
6. **Answer Validation**: Protection against accidental blank submissions, missing answer notifications, and non-destructive "Skip for Now" options.
7. **Deterministic Scoring Algorithms**: Strict evaluation for single-select, set-based exact matches for multiple-select, and normalized case/punctuation-insensitive matching for fill-in-the-blanks.
8. **Timestamp-Accurate Timer**: High-resolution countdown calculated via delta timestamps (`Date.now()`), avoiding drift from browser tab throttling, featuring automatic submission and visual low-time alerts.
9. **Responsive Web Design**: Mobile-first CSS architecture with fluid typography (`clamp()`), CSS Grid, Flexbox, touch-friendly hit areas ($\ge 44\text{px}$), and zero horizontal overflow.
10. **Local Browser Storage**: Safe `localStorage` integration with quota error handling, storing high scores, player nicknames, and sortable leaderboards.

---

## Features

- **Multi-Category Question Bank**:
  - Web Development (HTML5 semantics, CSS Grid/Box Model, GPU compositing, DOM Event flow, Web Security)
  - JavaScript (Closures, Event Loop & Microtasks, ES6+ scoping, Promise APIs, prototype mutation)
  - Computer Science Fundamentals (Stacks vs Queues, Binary Search Big-O, Merge/Heap sort, ACID Isolation, Deadlock conditions, TCP)
  - General Knowledge & Computing History (Ada Lovelace, Tim Berners-Lee, Turing Award laureates, Grace Hopper, Git)
- **3 Question Formats**:
  1. *Single-Select*: Choose exactly one answer from 4 options.
  2. *Multiple-Select*: Select all correct options that apply; scored only on complete set parity.
  3. *Fill-in-the-Blanks*: Type the exact solution with smart text normalization and synonym acceptance.
- **Configurable Quiz Engine**:
  - Filter by category or play mixed topics.
  - Choose difficulty (Easy, Medium, Hard, or All).
  - Select question count (5, 10, 15, or 20 questions).
  - Optional Practice Mode: Instant feedback and rationales after answering each question.
- **Accurate Countdown Timer**:
  - 30 seconds allocated per question.
  - Timestamp-anchored delta calculation.
  - Visual pulsing warning when less than 15 seconds remain.
  - Auto-submits safely once time expires.
- **Comprehensive Results Dashboard**:
  - Animated SVG circular accuracy gauge.
  - Performance tier feedback (*Outstanding!*, *Great Job!*, *Good Effort!*, *Keep Practicing!*).
  - Breakdown: Total Points, Percentage, Correct, Incorrect, Unanswered, Time Taken.
- **Detailed Answer Review**:
  - Filterable by *All*, *Correct*, or *Incorrect & Skipped*.
  - Side-by-side comparison of user answer versus correct solution.
  - Educational explanation for every question.
- **Browser-Local Leaderboard**:
  - Saves top 10 player records locally.
  - Sorted by Accuracy %, Score, and Date.
  - Option to clear records with confirmation dialog.
- **Accessibility & UX**:
  - Dark navy / indigo aesthetic with high-contrast text.
  - Visible focus indicators for keyboard navigation.
  - `prefers-reduced-motion` compliance.

---

## File and Folder Structure

```text
QuizNova/
├── index.html        # Semantic HTML5 single-page structure and modals
├── style.css         # Modern CSS3 stylesheet, design tokens, and responsive layout
├── script.js         # Vanilla JavaScript application engine, question bank, and state
└── README.md         # Comprehensive project documentation and internship overview
```

---

## How to Run Locally

Because this application is built with **zero external frameworks or runtime dependencies**, you can run it immediately on any modern web browser:

### Option 1: Direct File Opening
1. Download or clone this repository.
2. Double-click `index.html` or right-click and select **Open With -> Chrome / Firefox / Safari / Edge**.

### Option 2: Local Static Server (Optional)
If using VS Code or Node.js:
- **VS Code**: Right-click `index.html` and click **Open with Live Server**.
- **Python**: Run `python3 -m http.server 3000` in the project directory, then open `http://localhost:3000`.
- **Node.js**: Run `npx serve .` or `npm run dev` in the project root.

---

## Question Types & Interaction

| Type | Interaction | Validation & Scoring |
| :--- | :--- | :--- |
| **Single Select** | Click choice card or press number keys `1`-`4`. Radio indicator highlights the selected choice. | Earns 10 points if the chosen option matches `correctAnswer`. 0 points otherwise. |
| **Multiple Select** | Click choice cards to toggle selection checkmarks. Multiple items can be active simultaneously. | Earns 10 points **only** when the user's selected set matches the question's complete answer set. Partial selections earn 0 points. |
| **Fill in the Blank** | Text input field with instant keystroke saving. Press `Enter` to advance. | Compares normalized string (lowercased, trimmed of punctuation and redundant spaces) against an array of acceptable synonym solutions. |

---

## Scoring Logic

- **Points per Question**: 10 points for each fully correct answer.
- **Maximum Possible Score**: `Total Questions * 10`.
- **Accuracy Percentage**: `Math.round((Correct Count / Total Questions) * 100)`.
- **Unanswered / Skipped Questions**: Award 0 points and tracked separately in final analytics.
- **Deterministic Submission**: Answers are evaluated in a single batch upon quiz submission, preventing duplicate score accumulation during question traversal.

---

## Timer Implementation

Many web timers rely solely on `setInterval` counter decrements (`count--`), which drift significantly when browser tabs are backgrounded or throttled. QuizNova implements a **timestamp-anchored delta algorithm**:

```javascript
// Target expiration timestamp computed at start
const endTimeMs = Date.now() + totalDurationSeconds * 1000;

// High-resolution interval recalculating true remaining time
setInterval(() => {
  const remainingMs = endTimeMs - Date.now();
  const remainingSeconds = Math.max(0, Math.ceil(remainingMs / 1000));
  updateDisplay(remainingSeconds);
  if (remainingMs <= 0) {
    submitQuiz(true); // Auto-submit once
  }
}, 250);
```

---

## Browser-Local Storage & Leaderboard

- Quiz records and user nicknames are stored in browser `localStorage`.
- **Privacy Notice**: All score records remain strictly local to the user's browser; no external server or tracker is contacted.
- **Fail-Safe Storage Wrapper**: Includes exception handling (`try / catch`) to ensure the application runs smoothly even if cookies or local storage are blocked in private/incognito browsing windows.

---

## Future Enhancements

- Sound effects using Web Audio API (custom synthesizers without audio files).
- Export result certificate as printable PDF or downloadable PNG image.
- Custom question authoring tool allowing users to build and export custom JSON question sets.
- Timed speed run bonus multipliers (extra points for answering within the first 5 seconds).

---

## License & Credits

Developed with pride by **Aswin** for **SkillCraft Technology Web Development Internship**.
All code is open-source under the [Apache-2.0 License](LICENSE).
#   S k i l l - C r a f t - T a s k 3  
 