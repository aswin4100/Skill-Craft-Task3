/**
 * QuizNova - Interactive Educational Quiz Game
 * Pure Vanilla JavaScript (ES6+)
 * Crafted for SkillCraft Technology Internship - Task 03
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. Question Bank (32 Original, High-Quality Educational Questions)
     Distributed across Web Dev, JavaScript, CS Fundamentals, and General Knowledge
     Supporting Single-Select, Multiple-Select, and Fill-in-the-Blanks
     ========================================================================== */
  const QUESTION_BANK = [
    // --- 1. WEB DEVELOPMENT ---
    {
      id: 'wd-01',
      category: 'Web Development',
      difficulty: 'Easy',
      type: 'single',
      text: 'Which HTML5 semantic element is most appropriate for enclosing independent, self-contained syndicated content such as a blog post or news story?',
      options: ['<section>', '<article>', '<aside>', '<main>'],
      correctAnswer: '<article>',
      explanation:
        'The <article> element represents a self-contained composition in a document, page, application, or site, intended to be independently distributable or reusable (e.g., in syndication, forum posts, or news articles). <section> is for generic thematic groupings.'
    },
    {
      id: 'wd-02',
      category: 'Web Development',
      difficulty: 'Medium',
      type: 'multiple',
      text: 'Which of the following CSS properties trigger GPU-accelerated compositing and do NOT cause expensive layout reflows when animated? (Select all that apply)',
      options: ['transform', 'opacity', 'width', 'top'],
      correctAnswer: ['transform', 'opacity'],
      explanation:
        'Animating "transform" and "opacity" can be handled strictly on the GPU compositor thread without triggering layout reflow or repainting. Conversely, changing "width", "height", "top", or "left" forces browser geometry recalculation (layout reflow).'
    },
    {
      id: 'wd-03',
      category: 'Web Development',
      difficulty: 'Easy',
      type: 'blank',
      text: 'In standard CSS Box Model calculations, what CSS property is set to "border-box" to make element width and height include padding and border?',
      correctAnswer: ['box-sizing', 'box sizing'],
      explanation:
        'Setting "box-sizing: border-box" tells the browser to include the specified element padding and border within the declared width and height, preventing unexpected horizontal overflows.'
    },
    {
      id: 'wd-04',
      category: 'Web Development',
      difficulty: 'Medium',
      type: 'single',
      text: 'What HTTP status code specifically signifies that a client must authenticate itself to get the requested response, distinct from forbidden authorization?',
      options: ['401 Unauthorized', '403 Forbidden', '404 Not Found', '400 Bad Request'],
      correctAnswer: '401 Unauthorized',
      explanation:
        'HTTP 401 Unauthorized indicates that the request requires user authentication credentials. HTTP 403 Forbidden indicates that the server understands the request but refuses to authorize it even if authenticated.'
    },
    {
      id: 'wd-05',
      category: 'Web Development',
      difficulty: 'Hard',
      type: 'multiple',
      text: 'Which of the following HTTP response headers are critical for enhancing client-side web application security against clickjacking, cross-site scripting (XSS), and MIME-sniffing? (Select all that apply)',
      options: [
        'Content-Security-Policy',
        'X-Frame-Options',
        'X-Content-Type-Options',
        'Cache-Control'
      ],
      correctAnswer: [
        'Content-Security-Policy',
        'X-Frame-Options',
        'X-Content-Type-Options'
      ],
      explanation:
        'Content-Security-Policy mitigates XSS and data injection; X-Frame-Options prevents clickjacking by governing iframe embedding; X-Content-Type-Options prevents MIME-sniffing attacks. Cache-Control manages browser caching, not direct malicious injection mitigation.'
    },
    {
      id: 'wd-06',
      category: 'Web Development',
      difficulty: 'Medium',
      type: 'blank',
      text: 'Which modern CSS layout module is two-dimensional, allowing items to be arranged simultaneously across columns and rows?',
      correctAnswer: ['grid', 'css grid'],
      explanation:
        'CSS Grid Layout is a 2-dimensional system, meaning it can handle both columns and rows at the same time, unlike Flexbox which is largely a 1-dimensional system (rows OR columns).'
    },
    {
      id: 'wd-07',
      category: 'Web Development',
      difficulty: 'Hard',
      type: 'single',
      text: 'In the DOM Event flow model, which phase occurs immediately BEFORE the event target handles the event?',
      options: ['Capturing Phase', 'Bubbling Phase', 'Target Phase', 'Default Action Phase'],
      correctAnswer: 'Capturing Phase',
      explanation:
        'DOM Event dispatch travels through 3 standard phases: (1) Capturing Phase (event travels down from the Document to the target parent), (2) Target Phase (event reaches the target), and (3) Bubbling Phase (event bubbles up through ancestors).'
    },
    {
      id: 'wd-08',
      category: 'Web Development',
      difficulty: 'Easy',
      type: 'single',
      text: 'Which HTML attribute is essential for assistive screen readers to describe an image when it cannot be visually perceived or loaded?',
      options: ['alt', 'title', 'src', 'aria-hidden'],
      correctAnswer: 'alt',
      explanation:
        'The "alt" (alternative text) attribute is required on <img> elements to supply a textual alternative for assistive technologies and fallback rendering when images fail to load.'
    },

    // --- 2. JAVASCRIPT ---
    {
      id: 'js-01',
      category: 'JavaScript',
      difficulty: 'Easy',
      type: 'single',
      text: 'Which JavaScript declaration keyword prevents re-assignment and enforces block scoping?',
      options: ['const', 'var', 'let', 'static'],
      correctAnswer: 'const',
      explanation:
        'Variables declared with "const" are block-scoped and cannot be reassigned through standard assignment operator ("="). However, if the const holds an object or array, its internal properties remain mutable.'
    },
    {
      id: 'js-02',
      category: 'JavaScript',
      difficulty: 'Medium',
      type: 'multiple',
      text: 'Which of the following values evaluate to falsy in boolean type coercion in standard JavaScript? (Select all that apply)',
      options: ['0', '"" (empty string)', 'NaN', '[] (empty array)'],
      correctAnswer: ['0', '"" (empty string)', 'NaN'],
      explanation:
        'In JavaScript, standard falsy values include false, 0, -0, 0n, "", null, undefined, and NaN. Objects, including empty arrays ([]) and empty objects ({}), are truthy in boolean coercion.'
    },
    {
      id: 'js-03',
      category: 'JavaScript',
      difficulty: 'Easy',
      type: 'blank',
      text: 'What is the return value of evaluating: typeof null in JavaScript?',
      correctAnswer: ['object'],
      explanation:
        'Due to a legacy implementation quirk dating back to JavaScript\'s creation in 1995, null is tagged with binary type 000 which correlates with object pointers, causing typeof null to evaluate to "object".'
    },
    {
      id: 'js-04',
      category: 'JavaScript',
      difficulty: 'Medium',
      type: 'single',
      text: 'What will be logged to the console? \nPromise.resolve().then(() => console.log("A")); \nsetTimeout(() => console.log("B"), 0);',
      options: ['A then B', 'B then A', 'Simultaneous', 'Depends on CPU speed'],
      correctAnswer: 'A then B',
      explanation:
        'Promise callbacks (.then) are queued into the Microtask Queue, which executes with higher priority at the end of the current task cycle before the Macrotask (Task) queue where setTimeout callbacks reside.'
    },
    {
      id: 'js-05',
      category: 'JavaScript',
      difficulty: 'Hard',
      type: 'multiple',
      text: 'Which array methods in modern ECMAScript mutate the original array in place? (Select all that apply)',
      options: ['splice()', 'sort()', 'map()', 'filter()'],
      correctAnswer: ['splice()', 'sort()'],
      explanation:
        'Array.prototype.splice() and Array.prototype.sort() mutate the array in place. Array.prototype.map() and Array.prototype.filter() create and return new arrays without modifying the original.'
    },
    {
      id: 'js-06',
      category: 'JavaScript',
      difficulty: 'Hard',
      type: 'blank',
      text: 'What keyword introduced in ES6 is used inside a class constructor to call the constructor of its parent superclass?',
      correctAnswer: ['super', 'super()'],
      explanation:
        'The "super" keyword is used to access and invoke functions on an object\'s parent prototype or constructor. Inside a derived class constructor, "super()" must be called before accessing "this".'
    },
    {
      id: 'js-07',
      category: 'JavaScript',
      difficulty: 'Medium',
      type: 'single',
      text: 'What feature allows an inner function to retain access to variables from its outer enclosing scope even after that outer function has returned?',
      options: ['Closure', 'Currying', 'Recursion', 'Hoisting'],
      correctAnswer: 'Closure',
      explanation:
        'A closure is the combination of a function bundled together with references to its surrounding lexical environment. Closures allow inner functions to access an outer function\'s scope variables even after outer execution completes.'
    },
    {
      id: 'js-08',
      category: 'JavaScript',
      difficulty: 'Hard',
      type: 'single',
      text: 'Which Promise static method returns a promise that fulfills only when all input promises have settled (either fulfilled or rejected)?',
      options: ['Promise.allSettled()', 'Promise.all()', 'Promise.race()', 'Promise.any()'],
      correctAnswer: 'Promise.allSettled()',
      explanation:
        'Promise.allSettled() resolves when all input promises either resolve or reject, returning an array of objects describing each outcome. Promise.all() rejects immediately upon the first rejected promise.'
    },

    // --- 3. COMPUTER SCIENCE FUNDAMENTALS ---
    {
      id: 'cs-01',
      category: 'Computer Science Fundamentals',
      difficulty: 'Easy',
      type: 'single',
      text: 'What data structure operates strictly under the LIFO (Last-In, First-Out) principle?',
      options: ['Stack', 'Queue', 'Linked List', 'Binary Tree'],
      correctAnswer: 'Stack',
      explanation:
        'A Stack is a linear data structure that follows the LIFO (Last-In, First-Out) principle, where the last element inserted is the first one removed. Queues follow FIFO (First-In, First-Out).'
    },
    {
      id: 'cs-02',
      category: 'Computer Science Fundamentals',
      difficulty: 'Medium',
      type: 'blank',
      text: 'What is the average-case time complexity of binary search on a sorted array of N elements? (e.g. O(log n))',
      correctAnswer: ['o(log n)', 'o(logn)', 'log n', 'logn', 'o(log(n))'],
      explanation:
        'Binary search halves the remaining search interval in each step, yielding logarithmic time complexity O(log n).'
    },
    {
      id: 'cs-03',
      category: 'Computer Science Fundamentals',
      difficulty: 'Medium',
      type: 'multiple',
      text: 'Which of the following sorting algorithms boast an optimal average-case time complexity of O(N log N)? (Select all that apply)',
      options: ['Merge Sort', 'Heap Sort', 'Bubble Sort', 'Insertion Sort'],
      correctAnswer: ['Merge Sort', 'Heap Sort'],
      explanation:
        'Merge Sort and Heap Sort run in O(N log N) time in the average and worst cases. Traditional Bubble Sort and Insertion Sort have an average time complexity of O(N^2).'
    },
    {
      id: 'cs-04',
      category: 'Computer Science Fundamentals',
      difficulty: 'Hard',
      type: 'single',
      text: 'In relational database theory and transaction management, what does the "I" in the ACID principles stand for?',
      options: ['Isolation', 'Idempotence', 'Integrity', 'Immutability'],
      correctAnswer: 'Isolation',
      explanation:
        'ACID stands for Atomicity, Consistency, Isolation, and Durability. Isolation guarantees that concurrent execution of transactions leaves the database in the same state that would have been obtained if transactions were executed serially.'
    },
    {
      id: 'cs-05',
      category: 'Computer Science Fundamentals',
      difficulty: 'Hard',
      type: 'multiple',
      text: 'Which of the following conditions must occur simultaneously for a Coffman deadlock to occur in an operating system? (Select all that apply)',
      options: [
        'Mutual Exclusion',
        'Hold and Wait',
        'No Preemption',
        'Circular Wait'
      ],
      correctAnswer: [
        'Mutual Exclusion',
        'Hold and Wait',
        'No Preemption',
        'Circular Wait'
      ],
      explanation:
        'All four Coffman conditions (Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait) must hold simultaneously for a resource deadlock to arise in an operating system.'
    },
    {
      id: 'cs-06',
      category: 'Computer Science Fundamentals',
      difficulty: 'Medium',
      type: 'blank',
      text: 'In computer networking, what protocol in the Internet Protocol suite ensures reliable, ordered, and error-checked delivery of a stream of bytes between hosts?',
      correctAnswer: ['tcp', 'transmission control protocol'],
      explanation:
        'Transmission Control Protocol (TCP) provides connection-oriented, reliable, and ordered delivery of data packets across IP networks, using acknowledgements and sequence numbering, contrasting with UDP\'s connectionless model.'
    },
    {
      id: 'cs-07',
      category: 'Computer Science Fundamentals',
      difficulty: 'Easy',
      type: 'single',
      text: 'How many bits are contained within a single standard byte?',
      options: ['8', '4', '16', '32'],
      correctAnswer: '8',
      explanation:
        'A byte is a unit of digital information that most commonly consists of eight bits. Historically, byte sizes varied, but 8 bits is the international standard.'
    },
    {
      id: 'cs-08',
      category: 'Computer Science Fundamentals',
      difficulty: 'Hard',
      type: 'single',
      text: 'What tree data structure maintains self-balancing by enforcing that no node has two consecutive red links and all paths have the same black-height?',
      options: ['Red-Black Tree', 'B-Tree', 'Trie', 'Binary Heap'],
      correctAnswer: 'Red-Black Tree',
      explanation:
        'A Red-Black Tree is a self-balancing binary search tree where each node stores an extra bit representing color (red or black), ensuring worst-case operations complete in O(log n) time.'
    },

    // --- 4. GENERAL KNOWLEDGE & COMPUTING HISTORY ---
    {
      id: 'gk-01',
      category: 'General Knowledge',
      difficulty: 'Easy',
      type: 'single',
      text: 'Who is widely credited with writing the first computer algorithm for Charles Babbage\'s proposed mechanical computer, the Analytical Engine?',
      options: ['Ada Lovelace', 'Grace Hopper', 'Alan Turing', 'Katherine Johnson'],
      correctAnswer: 'Ada Lovelace',
      explanation:
        'Ada Lovelace published the first algorithm designed to be carried out by Charles Babbage\'s Analytical Engine (to compute Bernoulli numbers), making her widely recognized as the world\'s first computer programmer.'
    },
    {
      id: 'gk-02',
      category: 'General Knowledge',
      difficulty: 'Medium',
      type: 'blank',
      text: 'In 1989, who invented the World Wide Web while working at CERN?',
      correctAnswer: ['tim berners-lee', 'tim berners lee', 'sir tim berners-lee'],
      explanation:
        'Sir Tim Berners-Lee invented the World Wide Web in 1989 at CERN, developing HTML, HTTP, and the first web client and server software.'
    },
    {
      id: 'gk-03',
      category: 'General Knowledge',
      difficulty: 'Easy',
      type: 'single',
      text: 'What does the common technology acronym "URL" stand for?',
      options: [
        'Uniform Resource Locator',
        'Universal Resource Link',
        'Unified Routing Location',
        'Uniform Reference List'
      ],
      correctAnswer: 'Uniform Resource Locator',
      explanation:
        'URL stands for Uniform Resource Locator. It specifies the address of a given unique resource on the Web and the protocol used to access it.'
    },
    {
      id: 'gk-04',
      category: 'General Knowledge',
      difficulty: 'Medium',
      type: 'multiple',
      text: 'Which of the following computer scientists are Turing Award recipients known for foundational contributions to programming languages or systems? (Select all that apply)',
      options: ['Edsger W. Dijkstra', 'Donald Knuth', 'Dennis Ritchie', 'Nikola Tesla'],
      correctAnswer: ['Edsger W. Dijkstra', 'Donald Knuth', 'Dennis Ritchie'],
      explanation:
        'Edsger Dijkstra (1972), Donald Knuth (1974), and Dennis Ritchie (1983) were all recipients of the ACM A.M. Turing Award. Nikola Tesla was a visionary electrical engineer and inventor, not a Turing Award laureate.'
    },
    {
      id: 'gk-05',
      category: 'General Knowledge',
      difficulty: 'Hard',
      type: 'single',
      text: 'Which programming pioneer is credited with popularizing the term "compiler" and created FLOW-MATIC, a key precursor to COBOL?',
      options: ['Grace Hopper', 'Margaret Hamilton', 'John Backus', 'Barbara Liskov'],
      correctAnswer: 'Grace Hopper',
      explanation:
        'Rear Admiral Grace Hopper was a pioneer in computer programming who developed the first compiler (A-0) and formulated FLOW-MATIC, which served as the foundation for COBOL.'
    },
    {
      id: 'gk-06',
      category: 'General Knowledge',
      difficulty: 'Medium',
      type: 'blank',
      text: 'What term, originally derived from telephone and radio networks, describes the maximum rate of data transfer across a given path in a network?',
      correctAnswer: ['bandwidth'],
      explanation:
        'Bandwidth is the maximum capacity of a wired or wireless communications link to transmit data over a network connection in a given amount of time.'
    },
    {
      id: 'gk-07',
      category: 'General Knowledge',
      difficulty: 'Hard',
      type: 'multiple',
      text: 'Which of the following standards organizations oversee key specifications for Internet protocols and web standards? (Select all that apply)',
      options: ['W3C', 'IETF', 'ECMA International', 'UNESCO'],
      correctAnswer: ['W3C', 'IETF', 'ECMA International'],
      explanation:
        'The World Wide Web Consortium (W3C) governs web standards like HTML and CSS; the Internet Engineering Task Force (IETF) defines Internet protocols (TCP/IP, HTTP); ECMA International standardizes ECMAScript (JavaScript).'
    },
    {
      id: 'gk-08',
      category: 'General Knowledge',
      difficulty: 'Easy',
      type: 'single',
      text: 'What open-source distributed version control system was created by Linus Torvalds in 2005 to track changes in source code?',
      options: ['Git', 'Subversion', 'Mercurial', 'Perforce'],
      correctAnswer: 'Git',
      explanation:
        'Linus Torvalds created Git in 2005 to manage development of the Linux kernel. It is now the worldwide standard version control system.'
    }
  ];

  /* ==========================================================================
     2. Application Categories Definition
     ========================================================================== */
  const CATEGORIES = [
    {
      id: 'all',
      name: 'All Categories',
      description: 'Comprehensive cross-disciplinary challenge',
      iconSvg:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/></svg>'
    },
    {
      id: 'Web Development',
      name: 'Web Development',
      description: 'HTML5, CSS3, DOM, Security & Standards',
      iconSvg:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>'
    },
    {
      id: 'JavaScript',
      name: 'JavaScript',
      description: 'Closures, Event Loop, ES6+ & Scopes',
      iconSvg:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'
    },
    {
      id: 'Computer Science Fundamentals',
      name: 'CS Fundamentals',
      description: 'Algorithms, Big-O, Data Structures, OS',
      iconSvg:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></svg>'
    },
    {
      id: 'General Knowledge',
      name: 'General Knowledge',
      description: 'Computing Pioneers, History, Protocols',
      iconSvg:
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>'
    }
  ];

  /* ==========================================================================
     3. State Management
     ========================================================================== */
  const AppState = {
    // Current Configuration
    config: {
      category: 'all',
      difficulty: 'all',
      questionCount: 10,
      timerEnabled: true,
      timePerQuestion: 30, // seconds
      practiceMode: false,
      nickname: ''
    },

    // Active Quiz Session
    activeQuestions: [],
    currentIndex: 0,
    userAnswers: {}, // Map: questionId -> string or Array of strings
    quizStartTime: 0,
    quizEndTime: 0,
    isSubmitted: false,

    // Timer Runtime
    timer: {
      intervalId: null,
      endTimeMs: 0,
      totalDurationSeconds: 0,
      remainingSeconds: 0,
      hasExpired: false
    },

    // Computed Results
    results: null,

    // Review Filter ('all' | 'correct' | 'incorrect')
    reviewFilter: 'all'
  };

  /* ==========================================================================
     4. DOM Elements Cache
     ========================================================================== */
  const DOM = {};

  function cacheDOMElements() {
    // Screens
    DOM.welcomeScreen = document.getElementById('welcome-screen');
    DOM.quizScreen = document.getElementById('quiz-screen');
    DOM.resultsScreen = document.getElementById('results-screen');

    // Welcome Controls
    DOM.categorySelectorContainer = document.getElementById('category-selector-container');
    DOM.playerNicknameInput = document.getElementById('player-nickname');
    DOM.startQuizBtn = document.getElementById('start-quiz-btn');
    DOM.timerToggle = document.getElementById('timer-toggle');
    DOM.practiceToggle = document.getElementById('practice-toggle');
    DOM.diffButtons = document.querySelectorAll('[data-diff]');
    DOM.countButtons = document.querySelectorAll('[data-count]');

    // Quiz HUD
    DOM.hudCategoryTag = document.getElementById('hud-category-tag');
    DOM.hudDifficultyTag = document.getElementById('hud-difficulty-tag');
    DOM.hudTypeTag = document.getElementById('hud-type-tag');
    DOM.quizTimerContainer = document.getElementById('quiz-timer-container');
    DOM.timerDisplayText = document.getElementById('timer-display-text');
    DOM.exitQuizBtn = document.getElementById('exit-quiz-btn');
    DOM.currentQIndex = document.getElementById('current-q-index');
    DOM.totalQCount = document.getElementById('total-q-count');
    DOM.progressPercentText = document.getElementById('progress-percent-text');
    DOM.quizProgressBar = document.getElementById('quiz-progress-bar');
    DOM.progressFillElement = document.getElementById('progress-fill-element');

    // Question Area
    DOM.questionTypeInstruction = document.getElementById('question-type-instruction');
    DOM.currentQuestionText = document.getElementById('current-question-text');
    DOM.questionOptionsContainer = document.getElementById('question-options-container');
    DOM.practiceFeedbackBox = document.getElementById('practice-feedback-box');
    DOM.validationAlert = document.getElementById('validation-alert');
    DOM.validationAlertText = document.getElementById('validation-alert-text');

    // Navigation Controls
    DOM.prevQuestionBtn = document.getElementById('prev-question-btn');
    DOM.skipQuestionBtn = document.getElementById('skip-question-btn');
    DOM.nextQuestionBtn = document.getElementById('next-question-btn');
    DOM.nextBtnText = document.getElementById('next-btn-text');

    // Results Dashboard
    DOM.performanceBadge = document.getElementById('performance-badge');
    DOM.performanceMessage = document.getElementById('performance-message');
    DOM.resultPercentVal = document.getElementById('result-percent-val');
    DOM.resultScorePts = document.getElementById('result-score-pts');
    DOM.resultMaxPts = document.getElementById('result-max-pts');
    DOM.scoreCircleStroke = document.getElementById('score-circle-stroke');
    DOM.statTotalQ = document.getElementById('stat-total-q');
    DOM.statCorrectQ = document.getElementById('stat-correct-q');
    DOM.statIncorrectQ = document.getElementById('stat-incorrect-q');
    DOM.statSkippedQ = document.getElementById('stat-skipped-q');
    DOM.statTimeSpent = document.getElementById('stat-time-spent');
    DOM.statCategoryName = document.getElementById('stat-category-name');
    DOM.toggleReviewBtn = document.getElementById('toggle-review-btn');
    DOM.reviewBtnLabel = document.getElementById('review-btn-label');
    DOM.retryQuizBtn = document.getElementById('retry-quiz-btn');
    DOM.returnHomeBtn = document.getElementById('return-home-btn');

    // Review Area
    DOM.reviewSection = document.getElementById('review-section');
    DOM.reviewCardsList = document.getElementById('review-cards-list');
    DOM.filterTabs = document.querySelectorAll('.filter-tab');
    DOM.filterCountAll = document.getElementById('filter-count-all');
    DOM.filterCountCorrect = document.getElementById('filter-count-correct');
    DOM.filterCountIncorrect = document.getElementById('filter-count-incorrect');

    // Modals
    DOM.leaderboardModal = document.getElementById('leaderboard-modal');
    DOM.leaderboardTableBody = document.getElementById('leaderboard-table-body');
    DOM.headerLeaderboardBtn = document.getElementById('header-leaderboard-btn');
    DOM.footerLeaderboardBtn = document.getElementById('footer-leaderboard-btn');
    DOM.closeLeaderboardBtn = document.getElementById('close-leaderboard-btn');
    DOM.closeLeaderboardFooterBtn = document.getElementById('close-leaderboard-footer-btn');
    DOM.clearLeaderboardBtn = document.getElementById('clear-leaderboard-btn');

    DOM.confirmModal = document.getElementById('confirm-modal');
    DOM.confirmModalTitle = document.getElementById('confirm-modal-title');
    DOM.confirmModalMessage = document.getElementById('confirm-modal-message');
    DOM.confirmModalCancelBtn = document.getElementById('confirm-modal-cancel-btn');
    DOM.confirmModalActionBtn = document.getElementById('confirm-modal-action-btn');
    DOM.confirmModalCloseBtn = document.getElementById('confirm-modal-close-btn');

    DOM.toastContainer = document.getElementById('toast-container');
    DOM.brandHomeLink = document.getElementById('brand-home-link');
  }

  /* ==========================================================================
     5. LocalStorage Helper (Safe Storage Wrapper)
     ========================================================================== */
  const StorageManager = {
    KEYS: {
      LEADERBOARD: 'quiznova_leaderboard_records_v1',
      PLAYER_NICKNAME: 'quiznova_nickname_v1'
    },

    isAvailable() {
      try {
        const testKey = '__quiznova_test__';
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        return true;
      } catch (e) {
        return false;
      }
    },

    get(key, defaultValue = null) {
      if (!this.isAvailable()) return defaultValue;
      try {
        const val = localStorage.getItem(key);
        return val ? JSON.parse(val) : defaultValue;
      } catch (e) {
        return defaultValue;
      }
    },

    set(key, value) {
      if (!this.isAvailable()) return false;
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (e) {
        return false;
      }
    },

    saveLeaderboardEntry(entry) {
      const records = this.get(this.KEYS.LEADERBOARD, []);
      records.push(entry);

      // Sort by percentage descending, then points descending, then date
      records.sort((a, b) => {
        if (b.percentage !== a.percentage) return b.percentage - a.percentage;
        if (b.score !== a.score) return b.score - a.score;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

      // Keep top 10
      const trimmed = records.slice(0, 10);
      this.set(this.KEYS.LEADERBOARD, trimmed);
      return trimmed;
    },

    getLeaderboard() {
      return this.get(this.KEYS.LEADERBOARD, []);
    },

    clearLeaderboard() {
      if (this.isAvailable()) {
        try {
          localStorage.removeItem(this.KEYS.LEADERBOARD);
        } catch (e) {}
      }
    }
  };

  /* ==========================================================================
     6. UI Notification & Toast Helpers
     ========================================================================== */
  function showToast(message, type = 'info', duration = 3500) {
    if (!DOM.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'toast-success' : type === 'error' ? 'toast-error' : ''}`;
    toast.textContent = message;

    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 200ms ease';
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 200);
    }, duration);
  }

  function showConfirmModal(title, message, onConfirm) {
    DOM.confirmModalTitle.textContent = title;
    DOM.confirmModalMessage.textContent = message;
    DOM.confirmModal.classList.remove('hidden');

    function cleanup() {
      DOM.confirmModal.classList.add('hidden');
      DOM.confirmModalActionBtn.removeEventListener('click', handleConfirm);
      DOM.confirmModalCancelBtn.removeEventListener('click', handleCancel);
      DOM.confirmModalCloseBtn.removeEventListener('click', handleCancel);
    }

    function handleConfirm() {
      cleanup();
      if (typeof onConfirm === 'function') onConfirm();
    }

    function handleCancel() {
      cleanup();
    }

    DOM.confirmModalActionBtn.addEventListener('click', handleConfirm);
    DOM.confirmModalCancelBtn.addEventListener('click', handleCancel);
    DOM.confirmModalCloseBtn.addEventListener('click', handleCancel);
  }

  /* ==========================================================================
     7. Initialization & Setup Rendering
     ========================================================================== */
  function initializeApp() {
    cacheDOMElements();

    // Load saved nickname if exists
    const savedNickname = StorageManager.get(StorageManager.KEYS.PLAYER_NICKNAME, '');
    if (savedNickname && DOM.playerNicknameInput) {
      DOM.playerNicknameInput.value = savedNickname;
      AppState.config.nickname = savedNickname;
    }

    renderCategoryOptions();
    bindEventHandlers();
  }

  function renderCategoryOptions() {
    if (!DOM.categorySelectorContainer) return;
    DOM.categorySelectorContainer.innerHTML = '';

    CATEGORIES.forEach((cat) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `cat-btn ${cat.id === AppState.config.category ? 'active' : ''}`;
      btn.dataset.category = cat.id;
      btn.setAttribute('role', 'radio');
      btn.setAttribute('aria-checked', cat.id === AppState.config.category ? 'true' : 'false');

      // Calculate question count for this category
      let count = 0;
      if (cat.id === 'all') {
        count = QUESTION_BANK.length;
      } else {
        count = QUESTION_BANK.filter((q) => q.category === cat.id).length;
      }

      btn.innerHTML = `
        <div class="cat-top">
          <div class="cat-icon-box" aria-hidden="true">${cat.iconSvg}</div>
          <span class="cat-meta">${count} Questions</span>
        </div>
        <strong class="cat-name">${cat.name}</strong>
        <span class="cat-meta">${cat.description}</span>
      `;

      btn.addEventListener('click', () => {
        selectCategory(cat.id);
      });

      DOM.categorySelectorContainer.appendChild(btn);
    });
  }

  function selectCategory(categoryId) {
    AppState.config.category = categoryId;
    const catButtons = DOM.categorySelectorContainer.querySelectorAll('.cat-btn');
    catButtons.forEach((btn) => {
      const isSelected = btn.dataset.category === categoryId;
      btn.classList.toggle('active', isSelected);
      btn.setAttribute('aria-checked', isSelected ? 'true' : 'false');
    });
  }

  function bindEventHandlers() {
    // Difficulty Buttons
    DOM.diffButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        DOM.diffButtons.forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-checked', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-checked', 'true');
        AppState.config.difficulty = btn.dataset.diff;
      });
    });

    // Question Count Buttons
    DOM.countButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        DOM.countButtons.forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-checked', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-checked', 'true');
        AppState.config.questionCount = parseInt(btn.dataset.count, 10);
      });
    });

    // Timer and Practice Toggles
    if (DOM.timerToggle) {
      DOM.timerToggle.addEventListener('change', (e) => {
        AppState.config.timerEnabled = e.target.checked;
      });
    }

    if (DOM.practiceToggle) {
      DOM.practiceToggle.addEventListener('change', (e) => {
        AppState.config.practiceMode = e.target.checked;
      });
    }

    // Nickname persistence on blur
    if (DOM.playerNicknameInput) {
      DOM.playerNicknameInput.addEventListener('change', (e) => {
        const val = e.target.value.trim();
        AppState.config.nickname = val;
        StorageManager.set(StorageManager.KEYS.PLAYER_NICKNAME, val);
      });
    }

    // Start Quiz Button
    if (DOM.startQuizBtn) {
      DOM.startQuizBtn.addEventListener('click', () => {
        startQuiz();
      });
    }

    // Quiz Navigation
    if (DOM.prevQuestionBtn) {
      DOM.prevQuestionBtn.addEventListener('click', () => {
        handlePrevQuestion();
      });
    }

    if (DOM.nextQuestionBtn) {
      DOM.nextQuestionBtn.addEventListener('click', () => {
        handleNextQuestion();
      });
    }

    if (DOM.skipQuestionBtn) {
      DOM.skipQuestionBtn.addEventListener('click', () => {
        handleSkipQuestion();
      });
    }

    if (DOM.exitQuizBtn) {
      DOM.exitQuizBtn.addEventListener('click', () => {
        confirmExitQuiz();
      });
    }

    // Brand link
    if (DOM.brandHomeLink) {
      DOM.brandHomeLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (DOM.quizScreen.classList.contains('active-panel')) {
          confirmExitQuiz();
        } else {
          returnToHome();
        }
      });
    }

    // Results Actions
    if (DOM.toggleReviewBtn) {
      DOM.toggleReviewBtn.addEventListener('click', () => {
        toggleReviewSection();
      });
    }

    if (DOM.retryQuizBtn) {
      DOM.retryQuizBtn.addEventListener('click', () => {
        startQuiz();
      });
    }

    if (DOM.returnHomeBtn) {
      DOM.returnHomeBtn.addEventListener('click', () => {
        returnToHome();
      });
    }

    // Review Filters
    DOM.filterTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        DOM.filterTabs.forEach((t) => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        AppState.reviewFilter = tab.dataset.filter;
        renderReviewCards();
      });
    });

    // Leaderboard Modal Open/Close
    if (DOM.headerLeaderboardBtn) {
      DOM.headerLeaderboardBtn.addEventListener('click', () => openLeaderboard());
    }
    if (DOM.footerLeaderboardBtn) {
      DOM.footerLeaderboardBtn.addEventListener('click', () => openLeaderboard());
    }
    if (DOM.closeLeaderboardBtn) {
      DOM.closeLeaderboardBtn.addEventListener('click', () => closeLeaderboard());
    }
    if (DOM.closeLeaderboardFooterBtn) {
      DOM.closeLeaderboardFooterBtn.addEventListener('click', () => closeLeaderboard());
    }
    if (DOM.clearLeaderboardBtn) {
      DOM.clearLeaderboardBtn.addEventListener('click', () => {
        showConfirmModal(
          'Clear Leaderboard',
          'Are you sure you want to permanently erase all local high scores?',
          () => {
            StorageManager.clearLeaderboard();
            renderLeaderboardTable();
            showToast('Leaderboard records cleared', 'info');
          }
        );
      });
    }

    // Global keyboard accessibility shortcuts
    document.addEventListener('keydown', handleGlobalKeydown);
  }

  function handleGlobalKeydown(e) {
    // If a modal is open, let Escape close it
    if (e.key === 'Escape') {
      if (!DOM.leaderboardModal.classList.contains('hidden')) {
        closeLeaderboard();
        return;
      }
      if (!DOM.confirmModal.classList.contains('hidden')) {
        DOM.confirmModal.classList.add('hidden');
        return;
      }
    }

    // Shortcuts only active while on quiz screen and not typing in text input
    if (DOM.quizScreen.classList.contains('active-panel')) {
      const activeEl = document.activeElement;
      const isInputActive = activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA');

      if (!isInputActive) {
        // ArrowRight: Next Question
        if (e.key === 'ArrowRight' && !DOM.nextQuestionBtn.disabled) {
          e.preventDefault();
          handleNextQuestion();
        }
        // ArrowLeft: Previous Question
        else if (e.key === 'ArrowLeft' && !DOM.prevQuestionBtn.disabled) {
          e.preventDefault();
          handlePrevQuestion();
        }
        // Number keys (1, 2, 3, 4) for Single Select
        else if (['1', '2', '3', '4'].includes(e.key)) {
          const currentQ = AppState.activeQuestions[AppState.currentIndex];
          if (currentQ && currentQ.type === 'single') {
            const index = parseInt(e.key, 10) - 1;
            const buttons = DOM.questionOptionsContainer.querySelectorAll('.option-btn');
            if (buttons[index]) {
              e.preventDefault();
              buttons[index].click();
            }
          }
        }
      }
    }
  }

  /* ==========================================================================
     8. Start Quiz & Question Selection
     ========================================================================== */
  function startQuiz() {
    // Save nickname from input
    if (DOM.playerNicknameInput) {
      const val = DOM.playerNicknameInput.value.trim();
      AppState.config.nickname = val || 'Player';
      StorageManager.set(StorageManager.KEYS.PLAYER_NICKNAME, val);
    }

    // Filter question bank based on configuration
    let pool = [...QUESTION_BANK];

    if (AppState.config.category !== 'all') {
      pool = pool.filter((q) => q.category === AppState.config.category);
    }

    if (AppState.config.difficulty !== 'all') {
      pool = pool.filter((q) => q.difficulty === AppState.config.difficulty);
    }

    // If filter resulted in no questions, fallback to category only or all
    if (pool.length === 0) {
      pool = QUESTION_BANK.filter(
        (q) => AppState.config.category === 'all' || q.category === AppState.config.category
      );
      if (pool.length === 0) {
        pool = [...QUESTION_BANK];
      }
    }

    // Shuffle pool to provide fresh quiz experience
    const shuffled = shuffleArray(pool);

    // Limit to configured question count
    const targetCount = Math.min(AppState.config.questionCount, shuffled.length);
    AppState.activeQuestions = shuffled.slice(0, targetCount);

    // Reset quiz session state
    AppState.currentIndex = 0;
    AppState.userAnswers = {};
    AppState.isSubmitted = false;
    AppState.results = null;
    AppState.quizStartTime = Date.now();

    // Configure Timer
    if (AppState.config.timerEnabled) {
      AppState.timer.totalDurationSeconds = AppState.activeQuestions.length * AppState.config.timePerQuestion;
      AppState.timer.remainingSeconds = AppState.timer.totalDurationSeconds;
      AppState.timer.hasExpired = false;
      DOM.quizTimerContainer.classList.remove('hidden');
      startQuizTimer();
    } else {
      stopQuizTimer();
      DOM.quizTimerContainer.classList.add('hidden');
    }

    // Switch view to Quiz Screen
    switchScreen('quiz');

    // Render First Question
    renderCurrentQuestion();
  }

  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  /* ==========================================================================
     9. Timer Subsystem (Timestamp-Accurate Drift-Free Countdown)
     ========================================================================== */
  function startQuizTimer() {
    stopQuizTimer();

    const now = Date.now();
    AppState.timer.endTimeMs = now + AppState.timer.totalDurationSeconds * 1000;
    AppState.timer.hasExpired = false;

    updateTimerDisplay(AppState.timer.totalDurationSeconds);

    // Run high-frequency loop (every 250ms) checking true timestamp delta
    AppState.timer.intervalId = setInterval(() => {
      const remainingMs = AppState.timer.endTimeMs - Date.now();
      const remainingSecs = Math.max(0, Math.ceil(remainingMs / 1000));

      AppState.timer.remainingSeconds = remainingSecs;
      updateTimerDisplay(remainingSecs);

      // Pulse warning if under 15 seconds
      if (remainingSecs <= 15) {
        DOM.quizTimerContainer.classList.add('timer-warning');
      } else {
        DOM.quizTimerContainer.classList.remove('timer-warning');
      }

      // Time expired
      if (remainingMs <= 0 && !AppState.timer.hasExpired) {
        AppState.timer.hasExpired = true;
        stopQuizTimer();
        saveCurrentInputAnswer();
        showToast('Time has expired! Submitting your quiz now.', 'error', 4000);
        submitQuiz(true);
      }
    }, 250);
  }

  function stopQuizTimer() {
    if (AppState.timer.intervalId) {
      clearInterval(AppState.timer.intervalId);
      AppState.timer.intervalId = null;
    }
  }

  function updateTimerDisplay(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    if (DOM.timerDisplayText) {
      DOM.timerDisplayText.textContent = formatted;
    }
  }

  /* ==========================================================================
     10. Render Question Interface
     ========================================================================== */
  function renderCurrentQuestion() {
    const question = AppState.activeQuestions[AppState.currentIndex];
    if (!question) return;

    // Hide any previous validation alert
    hideValidationAlert();

    // 1. Update HUD Elements
    DOM.hudCategoryTag.textContent = question.category;

    // Difficulty badge
    DOM.hudDifficultyTag.textContent = question.difficulty;
    DOM.hudDifficultyTag.className = `hud-tag ${
      question.difficulty === 'Easy'
        ? 'hud-diff-easy'
        : question.difficulty === 'Hard'
        ? 'hud-diff-hard'
        : 'hud-diff-med'
    }`;

    // Type badge
    let typeName = 'Single Select';
    let typeClass = 'hud-type-single';
    let typeNotice = 'Select exactly one option.';

    if (question.type === 'multiple') {
      typeName = 'Multiple Select';
      typeClass = 'hud-type-multiple';
      typeNotice = 'Multiple answers are correct. Select all that apply.';
    } else if (question.type === 'blank') {
      typeName = 'Fill in the Blank';
      typeClass = 'hud-type-blank';
      typeNotice = 'Type your answer into the input field below.';
    }

    DOM.hudTypeTag.textContent = typeName;
    DOM.hudTypeTag.className = `hud-tag ${typeClass}`;
    DOM.questionTypeInstruction.textContent = typeNotice;

    // Question numbering & progress
    const currentNum = AppState.currentIndex + 1;
    const totalCount = AppState.activeQuestions.length;
    DOM.currentQIndex.textContent = currentNum;
    DOM.totalQCount.textContent = totalCount;

    const percent = Math.round((currentNum / totalCount) * 100);
    DOM.progressPercentText.textContent = `${percent}%`;
    DOM.progressFillElement.style.width = `${percent}%`;
    DOM.quizProgressBar.setAttribute('aria-valuenow', percent);

    // 2. Question Text
    DOM.currentQuestionText.textContent = question.text;

    // 3. Render Answer Input Mechanism
    DOM.questionOptionsContainer.innerHTML = '';

    const existingAnswer = AppState.userAnswers[question.id];

    if (question.type === 'single') {
      renderSingleSelectOptions(question, existingAnswer);
    } else if (question.type === 'multiple') {
      renderMultipleSelectOptions(question, existingAnswer);
    } else if (question.type === 'blank') {
      renderFillBlankInput(question, existingAnswer);
    }

    // 4. Practice Mode Feedback (if enabled and answered)
    renderPracticeModeFeedback(question, existingAnswer);

    // 5. Update Navigation Buttons
    DOM.prevQuestionBtn.disabled = AppState.currentIndex === 0;

    const isLast = AppState.currentIndex === totalCount - 1;
    DOM.nextBtnText.textContent = isLast ? 'Submit Quiz' : 'Next';
    DOM.nextQuestionBtn.className = isLast ? 'btn btn-primary' : 'btn btn-primary';
  }

  function renderSingleSelectOptions(question, existingAnswer) {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

    question.options.forEach((optText, idx) => {
      const isSelected = existingAnswer === optText;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `option-btn ${isSelected ? 'selected' : ''}`;
      btn.setAttribute('role', 'radio');
      btn.setAttribute('aria-checked', isSelected ? 'true' : 'false');

      btn.innerHTML = `
        <span class="option-indicator" aria-hidden="true">${letters[idx] || idx + 1}</span>
        <span class="option-label">${escapeHtml(optText)}</span>
      `;

      btn.addEventListener('click', () => {
        AppState.userAnswers[question.id] = optText;
        hideValidationAlert();

        // Update UI selection immediately
        const allBtns = DOM.questionOptionsContainer.querySelectorAll('.option-btn');
        allBtns.forEach((b) => {
          b.classList.remove('selected');
          b.setAttribute('aria-checked', 'false');
        });
        btn.classList.add('selected');
        btn.setAttribute('aria-checked', 'true');

        if (AppState.config.practiceMode) {
          renderPracticeModeFeedback(question, optText);
        }
      });

      DOM.questionOptionsContainer.appendChild(btn);
    });
  }

  function renderMultipleSelectOptions(question, existingAnswer) {
    const selectedList = Array.isArray(existingAnswer) ? existingAnswer : [];

    question.options.forEach((optText) => {
      const isSelected = selectedList.includes(optText);
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `option-btn ${isSelected ? 'selected' : ''}`;
      btn.setAttribute('role', 'checkbox');
      btn.setAttribute('aria-checked', isSelected ? 'true' : 'false');

      btn.innerHTML = `
        <div class="option-indicator" aria-hidden="true">
          <svg class="option-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <span class="option-label">${escapeHtml(optText)}</span>
      `;

      btn.addEventListener('click', () => {
        let currentSelections = Array.isArray(AppState.userAnswers[question.id])
          ? [...AppState.userAnswers[question.id]]
          : [];

        if (currentSelections.includes(optText)) {
          currentSelections = currentSelections.filter((item) => item !== optText);
          btn.classList.remove('selected');
          btn.setAttribute('aria-checked', 'false');
        } else {
          currentSelections.push(optText);
          btn.classList.add('selected');
          btn.setAttribute('aria-checked', 'true');
        }

        AppState.userAnswers[question.id] = currentSelections;
        hideValidationAlert();

        if (AppState.config.practiceMode) {
          renderPracticeModeFeedback(question, currentSelections);
        }
      });

      DOM.questionOptionsContainer.appendChild(btn);
    });
  }

  function renderFillBlankInput(question, existingAnswer) {
    const wrap = document.createElement('div');
    wrap.className = 'blank-input-wrap';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'blank-text-input';
    input.placeholder = 'Type your solution here...';
    input.value = typeof existingAnswer === 'string' ? existingAnswer : '';
    input.setAttribute('aria-label', question.text);
    input.autocomplete = 'off';
    input.autocapitalize = 'off';
    input.spellcheck = false;

    const hint = document.createElement('span');
    hint.className = 'blank-hint';
    hint.textContent = 'Tip: Answers are case-insensitive. Standard variations are accepted.';

    wrap.appendChild(input);
    wrap.appendChild(hint);
    DOM.questionOptionsContainer.appendChild(wrap);

    // Save input on change/blur/typing
    input.addEventListener('input', (e) => {
      AppState.userAnswers[question.id] = e.target.value.trim();
      hideValidationAlert();
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleNextQuestion();
      }
    });

    // Auto-focus input for fast frictionless entry
    setTimeout(() => input.focus(), 100);
  }

  function renderPracticeModeFeedback(question, answer) {
    if (!AppState.config.practiceMode || !DOM.practiceFeedbackBox) {
      if (DOM.practiceFeedbackBox) DOM.practiceFeedbackBox.classList.add('hidden');
      return;
    }

    if (!answer || (Array.isArray(answer) && answer.length === 0)) {
      DOM.practiceFeedbackBox.classList.add('hidden');
      return;
    }

    const isCorrect = evaluateSingleQuestionAnswer(question, answer);
    DOM.practiceFeedbackBox.className = `practice-feedback-box ${isCorrect ? 'is-correct' : 'is-wrong'}`;
    DOM.practiceFeedbackBox.classList.remove('hidden');

    DOM.practiceFeedbackBox.innerHTML = `
      <strong>${isCorrect ? 'Correct!' : 'Not Quite Correct:'}</strong>
      ${escapeHtml(question.explanation)}
    `;
  }

  function showValidationAlert(message = 'Please provide an answer to proceed, or click "Skip for Now".') {
    if (DOM.validationAlert && DOM.validationAlertText) {
      DOM.validationAlertText.textContent = message;
      DOM.validationAlert.classList.remove('hidden');
    }
  }

  function hideValidationAlert() {
    if (DOM.validationAlert) {
      DOM.validationAlert.classList.add('hidden');
    }
  }

  /* ==========================================================================
     11. Answer Storage & Navigation Logic
     ========================================================================== */
  function saveCurrentInputAnswer() {
    const question = AppState.activeQuestions[AppState.currentIndex];
    if (!question) return;

    if (question.type === 'blank') {
      const input = DOM.questionOptionsContainer.querySelector('.blank-text-input');
      if (input) {
        AppState.userAnswers[question.id] = input.value.trim();
      }
    }
  }

  function hasUserAnsweredCurrent() {
    saveCurrentInputAnswer();
    const question = AppState.activeQuestions[AppState.currentIndex];
    if (!question) return false;

    const ans = AppState.userAnswers[question.id];
    if (ans === undefined || ans === null) return false;

    if (question.type === 'single') {
      return typeof ans === 'string' && ans.length > 0;
    } else if (question.type === 'multiple') {
      return Array.isArray(ans) && ans.length > 0;
    } else if (question.type === 'blank') {
      return typeof ans === 'string' && ans.trim().length > 0;
    }
    return false;
  }

  function handleNextQuestion() {
    saveCurrentInputAnswer();

    // Prevent accidental advancement when missing answer
    if (!hasUserAnsweredCurrent()) {
      showValidationAlert('Please provide an answer before advancing, or click "Skip for Now".');
      return;
    }

    // Advance or Submit
    if (AppState.currentIndex < AppState.activeQuestions.length - 1) {
      AppState.currentIndex++;
      renderCurrentQuestion();
    } else {
      submitQuiz();
    }
  }

  function handleSkipQuestion() {
    saveCurrentInputAnswer();

    // If on last question, confirm submission
    if (AppState.currentIndex === AppState.activeQuestions.length - 1) {
      submitQuiz();
    } else {
      AppState.currentIndex++;
      renderCurrentQuestion();
    }
  }

  function handlePrevQuestion() {
    saveCurrentInputAnswer();
    if (AppState.currentIndex > 0) {
      AppState.currentIndex--;
      renderCurrentQuestion();
    }
  }

  function confirmExitQuiz() {
    showConfirmModal(
      'Exit Quiz',
      'Are you sure you want to exit? Your ongoing quiz score and answers will be lost.',
      () => {
        stopQuizTimer();
        returnToHome();
      }
    );
  }

  function returnToHome() {
    stopQuizTimer();
    switchScreen('welcome');
  }

  /* ==========================================================================
     12. Evaluation & Scoring Logic
     Deterministic and strictly testable
     ========================================================================== */
  function evaluateSingleQuestionAnswer(question, userAnswer) {
    if (userAnswer === undefined || userAnswer === null || userAnswer === '') {
      return false;
    }

    if (question.type === 'single') {
      return userAnswer === question.correctAnswer;
    }

    if (question.type === 'multiple') {
      if (!Array.isArray(userAnswer)) return false;
      const sortedUser = [...userAnswer].sort();
      const sortedCorrect = [...question.correctAnswer].sort();
      if (sortedUser.length !== sortedCorrect.length) return false;
      return sortedUser.every((val, i) => val === sortedCorrect[i]);
    }

    if (question.type === 'blank') {
      if (typeof userAnswer !== 'string') return false;
      const normalizedUser = normalizeBlankString(userAnswer);
      const acceptable = question.correctAnswer.map((ans) => normalizeBlankString(ans));
      return acceptable.includes(normalizedUser);
    }

    return false;
  }

  function normalizeBlankString(str) {
    return str
      .toLowerCase()
      .trim()
      .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '') // remove punctuation
      .replace(/\s+/g, ' '); // collapse whitespace
  }

  function calculateResults() {
    let correctCount = 0;
    let incorrectCount = 0;
    let unansweredCount = 0;
    const details = [];

    const POINTS_PER_QUESTION = 10;
    const totalQuestions = AppState.activeQuestions.length;
    const maxScore = totalQuestions * POINTS_PER_QUESTION;

    AppState.activeQuestions.forEach((q) => {
      const userAns = AppState.userAnswers[q.id];
      const hasAnswer =
        userAns !== undefined &&
        userAns !== null &&
        (Array.isArray(userAns) ? userAns.length > 0 : String(userAns).trim().length > 0);

      const isCorrect = hasAnswer && evaluateSingleQuestionAnswer(q, userAns);

      if (isCorrect) {
        correctCount++;
      } else if (!hasAnswer) {
        unansweredCount++;
      } else {
        incorrectCount++;
      }

      details.push({
        question: q,
        userAnswer: userAns,
        isCorrect: isCorrect,
        isUnanswered: !hasAnswer,
        points: isCorrect ? POINTS_PER_QUESTION : 0
      });
    });

    const score = correctCount * POINTS_PER_QUESTION;
    const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    const timeSpentSeconds = Math.max(1, Math.round((AppState.quizEndTime - AppState.quizStartTime) / 1000));

    return {
      score,
      maxScore,
      percentage,
      totalQuestions,
      correctCount,
      incorrectCount,
      unansweredCount,
      timeSpentSeconds,
      details
    };
  }

  /* ==========================================================================
     13. Quiz Submission & Results Dashboard
     ========================================================================== */
  function submitQuiz(isTimeout = false) {
    if (AppState.isSubmitted) return;
    AppState.isSubmitted = true;

    stopQuizTimer();
    AppState.quizEndTime = Date.now();

    // Evaluate answers
    const results = calculateResults();
    AppState.results = results;

    // Save to Local Leaderboard
    const nickname = AppState.config.nickname || 'Player';
    const categoryName =
      AppState.config.category === 'all'
        ? 'All Categories'
        : AppState.config.category;

    StorageManager.saveLeaderboardEntry({
      nickname,
      category: categoryName,
      difficulty: AppState.config.difficulty,
      percentage: results.percentage,
      score: results.score,
      maxScore: results.maxScore,
      timeSeconds: results.timeSpentSeconds,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    });

    // Populate Results Screen
    renderResultsDashboard(results);

    // Switch view to Results
    switchScreen('results');
  }

  function renderResultsDashboard(results) {
    // 1. Performance Message & Tier
    let tierText = 'Keep Practicing!';
    let tierClass = 'tier-practice';
    let msgText = 'Review the detailed answers below to reinforce foundational concepts.';

    if (results.percentage >= 90) {
      tierText = 'Outstanding!';
      tierClass = 'tier-outstanding';
      msgText = 'Exceptional mastery across concepts! Your knowledge is razor-sharp.';
    } else if (results.percentage >= 70) {
      tierText = 'Great Job!';
      tierClass = 'tier-great';
      msgText = 'Strong performance! You have a solid grasp of key principles.';
    } else if (results.percentage >= 50) {
      tierText = 'Good Effort!';
      tierClass = 'tier-good';
      msgText = 'Solid attempt! Review the missed questions below to level up.';
    }

    DOM.performanceBadge.textContent = tierText;
    DOM.performanceBadge.className = `tier-pill ${tierClass}`;
    DOM.performanceMessage.textContent = msgText;

    // 2. Score & Circle Stroke Animation
    DOM.resultPercentVal.textContent = `${results.percentage}%`;
    DOM.resultScorePts.textContent = results.score;
    DOM.resultMaxPts.textContent = results.maxScore;

    // SVG Circumference: 2 * PI * 70 ≈ 440
    const circumference = 440;
    const offset = circumference - (results.percentage / 100) * circumference;

    // Reset offset first then animate
    DOM.scoreCircleStroke.style.strokeDashoffset = circumference;
    setTimeout(() => {
      DOM.scoreCircleStroke.style.strokeDashoffset = offset;
    }, 150);

    // 3. Stats Grid
    DOM.statTotalQ.textContent = results.totalQuestions;
    DOM.statCorrectQ.textContent = results.correctCount;
    DOM.statIncorrectQ.textContent = results.incorrectCount;
    DOM.statSkippedQ.textContent = results.unansweredCount;

    const mins = Math.floor(results.timeSpentSeconds / 60);
    const secs = results.timeSpentSeconds % 60;
    DOM.statTimeSpent.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    DOM.statCategoryName.textContent =
      AppState.config.category === 'all' ? 'All Topics' : AppState.config.category;

    // 4. Update Filter Tab Counts
    DOM.filterCountAll.textContent = results.totalQuestions;
    DOM.filterCountCorrect.textContent = results.correctCount;
    DOM.filterCountIncorrect.textContent = results.incorrectCount + results.unansweredCount;

    // 5. Pre-render Review Cards
    AppState.reviewFilter = 'all';
    DOM.filterTabs.forEach((tab) => {
      const isAll = tab.dataset.filter === 'all';
      tab.classList.toggle('active', isAll);
      tab.setAttribute('aria-selected', isAll ? 'true' : 'false');
    });
    renderReviewCards();

    // Reset review container visibility
    DOM.reviewSection.classList.add('hidden');
    DOM.reviewBtnLabel.textContent = 'Review Answers';
  }

  function toggleReviewSection() {
    const isHidden = DOM.reviewSection.classList.contains('hidden');
    if (isHidden) {
      DOM.reviewSection.classList.remove('hidden');
      DOM.reviewBtnLabel.textContent = 'Hide Review';
      DOM.reviewSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      DOM.reviewSection.classList.add('hidden');
      DOM.reviewBtnLabel.textContent = 'Review Answers';
    }
  }

  function renderReviewCards() {
    if (!AppState.results || !DOM.reviewCardsList) return;
    DOM.reviewCardsList.innerHTML = '';

    const filter = AppState.reviewFilter;
    const items = AppState.results.details.filter((item) => {
      if (filter === 'correct') return item.isCorrect;
      if (filter === 'incorrect') return !item.isCorrect;
      return true;
    });

    if (items.length === 0) {
      DOM.reviewCardsList.innerHTML = `
        <div class="leaderboard-empty">
          No questions match this filter criteria.
        </div>
      `;
      return;
    }

    items.forEach((item, index) => {
      const q = item.question;
      const card = document.createElement('div');

      const statusClass = item.isCorrect
        ? 'status-correct'
        : item.isUnanswered
        ? 'status-skipped'
        : 'status-incorrect';

      card.className = `review-card glass-card ${statusClass}`;

      // Status Badge
      let badgeHtml = '';
      if (item.isCorrect) {
        badgeHtml = `<span class="review-status-badge badge-correct">&#10003; Correct (+10 pts)</span>`;
      } else if (item.isUnanswered) {
        badgeHtml = `<span class="review-status-badge badge-skipped">&#8212; Skipped / Unanswered (0 pts)</span>`;
      } else {
        badgeHtml = `<span class="review-status-badge badge-incorrect">&#10007; Incorrect (0 pts)</span>`;
      }

      // Format User Answer
      let userDisplay = 'None (Skipped)';
      if (item.userAnswer) {
        if (Array.isArray(item.userAnswer)) {
          userDisplay = item.userAnswer.length > 0 ? item.userAnswer.join(', ') : 'None';
        } else {
          userDisplay = String(item.userAnswer);
        }
      }

      // Format Correct Answer
      let correctDisplay = '';
      if (Array.isArray(q.correctAnswer)) {
        if (q.type === 'blank') {
          correctDisplay = q.correctAnswer[0]; // primary representation
        } else {
          correctDisplay = q.correctAnswer.join(', ');
        }
      } else {
        correctDisplay = q.correctAnswer;
      }

      card.innerHTML = `
        <div class="review-card-top">
          <span class="review-q-num">Question ${index + 1} &middot; ${q.category}</span>
          ${badgeHtml}
        </div>
        <h3 class="review-q-title">${escapeHtml(q.text)}</h3>
        <div class="review-answers-grid">
          <div class="answer-row">
            <span class="answer-label">Your Answer</span>
            <span class="answer-value ${item.isCorrect ? 'val-user-correct' : 'val-user-wrong'}">
              ${escapeHtml(userDisplay)}
            </span>
          </div>
          <div class="answer-row">
            <span class="answer-label">Correct Solution</span>
            <span class="answer-value val-correct">
              ${escapeHtml(correctDisplay)}
            </span>
          </div>
        </div>
        <div class="explanation-box">
          <div class="explanation-header">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
            <span>Educational Rationale</span>
          </div>
          <p class="explanation-text">${escapeHtml(q.explanation)}</p>
        </div>
      `;

      DOM.reviewCardsList.appendChild(card);
    });
  }

  /* ==========================================================================
     14. Leaderboard Modal
     ========================================================================== */
  function openLeaderboard() {
    renderLeaderboardTable();
    DOM.leaderboardModal.classList.remove('hidden');
  }

  function closeLeaderboard() {
    DOM.leaderboardModal.classList.add('hidden');
  }

  function renderLeaderboardTable() {
    if (!DOM.leaderboardTableBody) return;
    DOM.leaderboardTableBody.innerHTML = '';

    const records = StorageManager.getLeaderboard();

    if (records.length === 0) {
      DOM.leaderboardTableBody.innerHTML = `
        <tr>
          <td colspan="6" class="leaderboard-empty">
            No quiz records saved yet. Play your first quiz to enter the Hall of Fame!
          </td>
        </tr>
      `;
      return;
    }

    records.forEach((rec, idx) => {
      const tr = document.createElement('tr');
      const rankNum = idx + 1;
      const rankBadgeClass = rankNum === 1 ? 'rank-1' : rankNum === 2 ? 'rank-2' : rankNum === 3 ? 'rank-3' : '';

      tr.innerHTML = `
        <td><span class="rank-badge ${rankBadgeClass}">${rankNum}</span></td>
        <td><strong>${escapeHtml(rec.nickname || 'Player')}</strong></td>
        <td>${escapeHtml(rec.category || 'All')}</td>
        <td><strong class="text-emerald">${rec.percentage}%</strong></td>
        <td>${rec.score} / ${rec.maxScore}</td>
        <td class="cat-meta">${escapeHtml(rec.date || '')}</td>
      `;
      DOM.leaderboardTableBody.appendChild(tr);
    });
  }

  /* ==========================================================================
     15. View Switching Utility
     ========================================================================== */
  function switchScreen(screenName) {
    // Hide all
    DOM.welcomeScreen.classList.remove('active-panel');
    DOM.quizScreen.classList.remove('active-panel');
    DOM.resultsScreen.classList.remove('active-panel');

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (screenName === 'welcome') {
      DOM.welcomeScreen.classList.add('active-panel');
    } else if (screenName === 'quiz') {
      DOM.quizScreen.classList.add('active-panel');
    } else if (screenName === 'results') {
      DOM.resultsScreen.classList.add('active-panel');
    }
  }

  /* ==========================================================================
     16. String Escaping Utility (XSS Prevention)
     ========================================================================== */
  function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /* ==========================================================================
     17. Bootstrap Application on DOM Ready
     ========================================================================== */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
  } else {
    initializeApp();
  }
})();
