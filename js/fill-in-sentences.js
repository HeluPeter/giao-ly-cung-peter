
// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyVDg0JoZ3uXjtzQ2-nrJpZDcmg7h7odevp9PGo1oMWN01aO-DVqJ4B_tzeVhzQqSvy5g/exec';

// Quiz questions
const newQuizQuestions = [
    {
        question: "Phụng vụ Các Giờ Kinh là gì của Đức Ki-tô cùng với Hội Thánh.",
        syllables: "3 âm tiết",
        answer: "lời cầu nguyện",
        hint: "Câu 9.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Năm phụng vụ là gì?",
        syllables: "12 âm tiết",
        answer: "thời gian Hội Thánh cử hành các mầu nhiệm Đức Ki-tô",
        hint: "Câu 8.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Phụng vụ Các Giờ Kinh giúp gì cho các tín hữu?",
        syllables: "6 âm tiết",
        answer: "thánh hóa thời gian trong ngày",
        hint: "Câu 9.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Đây là một trong các Bí tích.",
        syllables: "3 âm tiết",
        answer: "Truyền Chức Thánh",
        hint: "Câu 11.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Ngày của Chúa là gì của cả năm phụng vụ?",
        syllables: "5 âm tiết",
        answer: "nền tảng và trung tâm",
        hint: "Câu 7.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Lời Đức Ki-tô cầu nguyện cùng Hội Thánh được gọi là gì?",
        syllables: "5 âm tiết",
        answer: "Phụng vụ Các Giờ Kinh",
        hint: "Câu 9.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Các Bí tích diễn tả và làm gì nữa?",
        syllables: "14 âm tiết",
        answer: "thông ban cho chúng ta ân sủng bên trong là sự sống thần linh",
        hint: "Câu 10.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Các bí tích cho chúng ta tham dự trước vào đời sống vĩnh cửu, đang khi mong chờ ngày Đức Ki-tô làm gì?",
        syllables: "5 âm tiết",
        answer: "ngự đến trong vinh quang",
        hint: "Câu 9.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Đây là một trường hợp mà người không lãnh nhận Bí tích Rửa Tội có thể được cứu độ.",
        syllables: "4 âm tiết",
        answer: "chết vì đức tin",
        hint: "Câu 24.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Vì điều gì mà Bí tích Thêm Sức chỉ được lãnh một lần?",
        syllables: "6 âm tiết",
        answer: "Ấn tín không thể xóa được",
        hint: "Câu 9.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Bí tích Rửa Tội ban cho chúng ta ơn này.",
        syllables: "10 âm tiết",
        answer: "được tháp nhập vào Đức Ki-tô và Hội Thánh",
        hint: "Câu 11.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Mục đích của các Bí tích phục vụ là để làm gì?",
        syllables: "5 âm tiết",
        answer: "xây dựng Dân Thiên Chúa",
        hint: "Câu 7.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Đây là bổn phận của người lãnh Bí tích Thêm Sức.",
        syllables: "8 âm tiết",
        answer: "tích cực giới thiệu Chúa cho mọi người",
        hint: "Câu 9.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Người muốn lãnh nhận Bí tích Thêm Sức cần học kĩ nhất về điều gì?",
        syllables: "4 âm tiết",
        answer: "Bí tích Thêm Sức",
        hint: "Câu 24.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Bí tích Hôn Phối đem lại ân sủng riêng cho mỗi sứ vụ đặc biệt trong Hội Thánh, việc này là để làm gì?",
        syllables: "5 âm tiết",
        answer: "xây dựng Dân Thiên Chúa",
        hint: "Câu 9.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Ân sủng mà Đức Ki-tô thông ban trong cấc bí tích mang lại lợi ích hay không thì còn tùy thuộc vào điều gì của người lãnh nhận?",
        syllables: "5 âm tiết",
        answer: "sự chuẩn bị nội tâm",
        hint: "Câu 11.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Ngày Chúa Nhật rất quan trọng vì là ngày gì?",
        syllables: "3 âm tiết",
        answer: "Chúa Phục sinh",
        hint: "Câu 17.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Đây là 1 yêu tố của cử hành phụng vụ?",
        syllables: "5 âm tiết",
        answer: "lời nói và hành động",
        hint: "Câu 33.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Bí tích Thêm Sức được Chúa Giê-su lập để làm gì?",
        syllables: "6 âm tiết",
        answer: "ban tràn đầy Chúa Thánh Thần",
        hint: "Câu 36.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Năm Phụng vụ là thời gian như thế nào?",
        syllables: "10 âm tiết",
        answer: "Hội Thánh cử hành các mầu nhiệm Đức Ki-tô",
        hint: "Câu 11.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Qua phụng vụ Đức Ki-tô tiếp tục điều gì?",
        syllables: "6 âm tiết",
        answer: "công trình cứu độ của Ngài",
        hint: "Câu 7.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Bí tích Rửa Tội ban cho chúng ta ơn này.",
        syllables: "11 âm tiết",
        answer: "được tha tội tổ tông và các tội riêng đã phạm",
        hint: "Câu 7.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Nhờ các bí tích, đức tin của ta trở nên như thế nào?",
        syllables: "5 âm tiết",
        answer: "thêm mạnh mẽ vững vàng",
        hint: "Câu 17.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Bí tích Thánh Thể Chứa đựng điều gì của Hội Thánh?",
        syllables: "4 âm tiết",
        answer: "Kho tàng thiêng liêng",
        hint: "Câu 33.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Đây là một trong những điều kiện để được rước lễ.",
        syllables: "7 âm tiết",
        answer: "ý thức mình không có tội trọng",
        hint: "Câu 36.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Việc rước lễ giúp gia tăng điều gì?",
        syllables: "8 âm tiết",
        answer: "ân sủng và lòng yêu mến tha nhân",
        hint: "Câu 11.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Bí tích thêm sức giúp ta sống điều gì các mạnh mẽ hơn.",
        syllables: "5 âm tiết",
        answer: "ơn Bí tích Rửa Tội",
        hint: "Câu 7.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Bí tích Thánh Thể là nguồn mạch và tột đỉnh của điều gì?",
        syllables: "7 âm tiết",
        answer: "toàn bộ đời sống Ki-tô giáo",
        hint: "Câu 17.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Đây là 1 điều kiện để được rước lễ?",
        syllables: "9 âm tiết",
        answer: "phải giữ chay theo quy định của Hội Thánh",
        hint: "Câu 33.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Đây là 1 ơn ích của việc rước lễ?",
        syllables: "10 âm tiết",
        answer: "gia tăng ân sủng và lòng yêu mến tha nhân",
        hint: "Câu 36.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Bí tích Thông hối có hiệu quả là ban bình an và gia tăng điều gì?",
        syllables: "13 âm tiết",
        answer: "sức mạnh cho cuộc chiến đấu thiêng liêng của người Ki-tô hữu",
        hint: "Câu 11.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    },
    {
        question: "Đây là 1 hành động phải làm trước khi rước lễ?",
        syllables: "4 âm tiết",
        answer: "xưng các tội trọng",
        hint: "Câu 7.",
        attempts: 0,
        completed: false,
        failed: false,
        userAnswer: "",
        timeTaken: 0
    }
];

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

const usernameInput = document.getElementById('username');
const usernameError = document.getElementById('username-error');
const startBtn = document.getElementById('start-btn');
const displayUsername = document.getElementById('display-username');

const currentQuestionContainer = document.getElementById('current-question-container');
const currentScoreElement = document.getElementById('current-score');
const quizProgress = document.getElementById('quiz-progress');
const timerCountdown = document.getElementById('timer-countdown');
const timerCircleBg = document.getElementById('timer-circle-bg');
const submitQuizBtn = document.getElementById('submit-quiz-btn');

const perfectScoreMessage = document.getElementById('perfect-score-message');
const finalScore = document.getElementById('final-score');
const totalPossible = document.getElementById('total-possible');
const timeTaken = document.getElementById('time-taken');
const summaryTableBody = document.getElementById('summary-table-body');
const restartBtn = document.getElementById('restart-btn');

const leaderboardContainer = document.getElementById('leaderboard-container');
const topPlayersContainer = document.getElementById('top-players-container');
const leaderboardLoading = document.getElementById('leaderboard-loading');
const leaderboardError = document.getElementById('leaderboard-error');
const leaderboardEmpty = document.getElementById('leaderboard-empty');
const leaderboardContent = document.getElementById('leaderboard-content');
const leaderboardBody = document.getElementById('leaderboard-body');
const pagination = document.getElementById('pagination');

const confirmationModal = document.getElementById('confirmation-modal');
const modalCancel = document.getElementById('modal-cancel');
const modalConfirm = document.getElementById('modal-confirm');

// Quiz state
let currentUser = '';
let score = 0;
let quizStartTime;
let quizEndTime;
let quizTotalTime;
let currentQuestionIndex = 0;
let questionTimer;
let questionStartTime;
let timeRemaining = 45;
let leaderboardData = [];
let currentPage = 1;
const itemsPerPage = 5;
const questionTimeLimit = 45; // seconds per question

// Initialize

function shuffleArray(array) {
    const newArray = [...array]; // Create a copy to avoid modifying the original
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

let quizQuestions = shuffleArray(newQuizQuestions);

totalPossible.textContent = quizQuestions.length * 2; // 2 points per question
document.getElementById('max-score').textContent = quizQuestions.length * 2;

// Load leaderboard on page load
loadLeaderboard();

// Event Listeners
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);
submitQuizBtn.addEventListener('click', showSubmitConfirmation);
modalCancel.addEventListener('click', hideSubmitConfirmation);
modalConfirm.addEventListener('click', submitQuiz);

usernameInput.addEventListener('input', validateUsername);

// Functions
function validateUsername() {
    const username = usernameInput.value.trim();
    const isValid = /^[a-z0-9]+$/.test(username);

    if (username === '') {
        usernameError.textContent = 'Tên người dùng không được để trống.';
        usernameError.classList.remove('hidden');
        startBtn.disabled = true;
        return false;
    } else if (!isValid) {
        usernameError.textContent = 'Tên người dùng phải viết thường, không có ký tự đặc biệt hoặc khoảng trắng.';
        usernameError.classList.remove('hidden');
        startBtn.disabled = true;
        return false;
    } else {
        usernameError.classList.add('hidden');
        startBtn.disabled = false;
        return true;
    }
}

function startQuiz() {
    if (!validateUsername()) return;

    currentUser = usernameInput.value.trim();
    displayUsername.textContent = currentUser;

    welcomeScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');

    // Reset quiz state
    score = 0;
    currentQuestionIndex = 0;
    currentScoreElement.textContent = score;

    // Reset question states
    quizQuestions.forEach(q => {
        q.attempts = 0;
        q.completed = false;
        q.failed = false;
        q.userAnswer = "";
        q.timeTaken = 0;
    });

    // Start quiz timer
    quizStartTime = new Date();

    // Show first question
    showCurrentQuestion();

    // Highlight current user in leaderboard
    highlightCurrentUser();
}

function showCurrentQuestion() {
    // Clear any existing timer
    if (questionTimer) {
        clearInterval(questionTimer);
    }

    // Reset timer
    timeRemaining = questionTimeLimit;
    timerCountdown.textContent = timeRemaining;
    timerCircleBg.style.background = `conic-gradient(var(--accent-color) 0%, transparent 0%)`;
    timerCountdown.parentElement.classList.remove('timer-warning');

    // Update progress
    const progressPercentage = (currentQuestionIndex / quizQuestions.length) * 100;
    quizProgress.style.width = `${progressPercentage}%`;

    // Get current question
    const question = quizQuestions[currentQuestionIndex];

    // Start question timer
    questionStartTime = new Date();
    startQuestionTimer();

    // Create question card
    currentQuestionContainer.innerHTML = `
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold">Câu số ${currentQuestionIndex + 1} trên ${quizQuestions.length}</h3>
            <div class="attempts-badge">Số lượt làm: <span id="current-attempts">0</span>/1</div>
        </div>
        
        <p class="text-lg mb-4" style="display: inline-block;">${question.question}</p>
        <p class="text-lg mb-4" style="display: inline-block; color: red; font-weight: bold">(${question.syllables})</p>
        
        <div class="mb-4">
            <input type="text" id="current-answer" class="answer-input" placeholder="Type your answer here" autofocus>
        </div>
        
        <div id="feedback-container" class="hidden">
            <div id="feedback-message" class="feedback-message"></div>
            <div id="hint-container" class="hint hidden">${question.hint}</div>
        </div>
        
        <div class="button-group">
            <button id="check-answer-btn" class="btn">Kiểm Tra</button>
            <button id="next-question-btn" class="btn next-btn hidden">Câu tiếp theo</button>
        </div>
    `;

    // Add event listener to check button
    document.getElementById('check-answer-btn').addEventListener('click', checkCurrentAnswer);

    // Add event listener to next button (if visible)
    const nextButton = document.getElementById('next-question-btn');
    if (nextButton) {
        nextButton.addEventListener('click', moveToNextQuestion);
    }

    // Add event listener for Enter key
    document.getElementById('current-answer').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkCurrentAnswer();
        }
    });

    // Focus on the input field
    setTimeout(() => {
        document.getElementById('current-answer').focus();
    }, 100);
}

function startQuestionTimer() {
    questionTimer = setInterval(() => {
        timeRemaining--;
        timerCountdown.textContent = timeRemaining;

        // Update timer circle
        const percentage = ((questionTimeLimit - timeRemaining) / questionTimeLimit) * 100;
        timerCircleBg.style.background = `conic-gradient(var(--accent-color) ${percentage}%, transparent ${percentage}%)`;

        // Warning when time is running low
        if (timeRemaining <= 10) {
            timerCountdown.parentElement.classList.add('timer-warning');
        }

        if (timeRemaining <= 0) {
            clearInterval(questionTimer);
            handleTimeUp();
        }
    }, 1000);
}

function handleTimeUp() {
    const question = quizQuestions[currentQuestionIndex];
    const answerInput = document.getElementById('current-answer');
    const feedbackContainer = document.getElementById('feedback-container');
    const feedbackMessage = document.getElementById('feedback-message');
    const checkButton = document.getElementById('check-answer-btn');
    const nextButton = document.getElementById('next-question-btn');

    // Record the user's answer (even if empty)
    question.userAnswer = answerInput.value.trim().toLowerCase();

    // Record time taken
    const questionEndTime = new Date();
    question.timeTaken = Math.floor((questionEndTime - questionStartTime) / 1000);

    // Mark question as failed
    question.failed = true;

    // Show feedback
    feedbackContainer.classList.remove('hidden');
    feedbackMessage.textContent = `Hết giờ rồi! Đáp án là: ${question.answer} - Giải thích: ${question.hint}`;
    feedbackMessage.className = 'feedback-message feedback-incorrect';

    // Disable input and check button
    answerInput.disabled = true;
    checkButton.classList.add('hidden');

    // Show next button
    nextButton.classList.remove('hidden');
}

function isEquivalentAnswer(a, b) {
    const normalize = str => str.toLowerCase().trim();

    const strA = normalize(a);
    const strB = normalize(b);

    if (strA === strB) return true;

    // Các cặp từ đặc biệt coi là tương đương
    const specialCases = [
        ["hoá", "hóa"],
        ["xoá", "xóa"]
    ];

    for (const [x, y] of specialCases) {
        if (
            (strA.includes(x) && strB.includes(y)) ||
            (strA.includes(y) && strB.includes(x))
            ) {
            return true;
        }
    }

    return false;
}

  
function checkCurrentAnswer() {
    const question = quizQuestions[currentQuestionIndex];
    const answerInput = document.getElementById('current-answer');
    const userAnswer = answerInput.value.trim().toLowerCase();
    const feedbackContainer = document.getElementById('feedback-container');
    const feedbackMessage = document.getElementById('feedback-message');
    const hintContainer = document.getElementById('hint-container');
    const attemptsElement = document.getElementById('current-attempts');
    const checkButton = document.getElementById('check-answer-btn');
    const nextButton = document.getElementById('next-question-btn');

    // Record the user's answer
    question.userAnswer = userAnswer;

    // Increment attempts
    question.attempts++;
    attemptsElement.textContent = question.attempts;

    // Check if answer is correct
    const isCorrect = isEquivalentAnswer(userAnswer, question.answer);

    if (isCorrect) {
        // Stop the timer
        clearInterval(questionTimer);

        // Record time taken
        const questionEndTime = new Date();
        question.timeTaken = Math.floor((questionEndTime - questionStartTime) / 1000);

        // Correct answer
        feedbackContainer.classList.remove('hidden');
        feedbackMessage.textContent = `Chính xác! Làm tốt lắm! - Giải thích: ${question.hint}`;
        feedbackMessage.className = 'feedback-message feedback-correct';

        // Update score
        score += 2;
        currentScoreElement.textContent = score;

        // Mark question as completed
        question.completed = true;

        // Disable input and hide check button
        answerInput.disabled = true;
        checkButton.classList.add('hidden');

        // Show next button
        nextButton.classList.remove('hidden');
    } else {
        // Incorrect answer
        feedbackContainer.classList.remove('hidden');

        if (question.attempts === 1) {
        //     // First attempt - show hint
        //     feedbackMessage.textContent = 'Incorrect. Try again!';
        //     feedbackMessage.className = 'feedback-message feedback-incorrect';
        //     hintContainer.classList.remove('hidden');
        // } else {
            // Stop the timer
            clearInterval(questionTimer);

            // Record time taken
            const questionEndTime = new Date();
            question.timeTaken = Math.floor((questionEndTime - questionStartTime) / 1000);

            // Second attempt - lock question
            feedbackMessage.textContent = `Sai. Đáp án đúng là: ${question.answer} - Giải thích: ${question.hint}`;
            feedbackMessage.className = 'feedback-message feedback-incorrect';

            // Mark question as failed
            question.failed = true;

            // Disable input and hide check button
            answerInput.disabled = true;
            checkButton.classList.add('hidden');

            // Show next button
            nextButton.classList.remove('hidden');
        }
    }
}

function moveToNextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        // Show next question
        showCurrentQuestion();
    } else {
        // All questions completed
        finishQuiz();
    }
}

function showSubmitConfirmation() {
    // Only show confirmation if not on the last question
    if (currentQuestionIndex < quizQuestions.length - 1) {
        confirmationModal.classList.remove('hidden');
    } else {
        // If on last question, just submit directly
        submitQuiz();
    }
}

function hideSubmitConfirmation() {
    confirmationModal.classList.add('hidden');
}

function submitQuiz() {
    // Hide confirmation modal if it's open
    hideSubmitConfirmation();

    // Stop the timer
    if (questionTimer) {
        clearInterval(questionTimer);
    }

    // Record the current question's answer if not already completed or failed
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (!currentQuestion.completed && !currentQuestion.failed) {
        const answerInput = document.getElementById('current-answer');
        if (answerInput) {
            currentQuestion.userAnswer = answerInput.value.trim().toLowerCase();

            // Record time taken
            const questionEndTime = new Date();
            currentQuestion.timeTaken = Math.floor((questionEndTime - questionStartTime) / 1000);
        }
    }

    // Finish the quiz
    finishQuiz();
}

function finishQuiz() {
    quizEndTime = new Date();
    const timeDiff = Math.floor((quizEndTime - quizStartTime) / 1000); // in seconds
    const minutes = Math.floor(timeDiff / 60);
    const seconds = timeDiff % 60;
    quizTotalTime = `${minutes}'${seconds.toString().padStart(2, '0')}s`;

    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');

    finalScore.textContent = score;
    timeTaken.textContent = quizTotalTime;

    // Generate summary table
    generateSummaryTable();

    // Check for perfect score
    const maxPossibleScore = quizQuestions.length * 2;
    if (score === maxPossibleScore) {
        perfectScoreMessage.classList.remove('hidden');
        createConfetti();
    } else {
        perfectScoreMessage.classList.add('hidden');
    }

    // Save result to Google Sheets
    saveResult();
}

function generateSummaryTable() {
    summaryTableBody.innerHTML = '';

    quizQuestions.forEach((question, index) => {
        const row = document.createElement('tr');

        const isCorrect = question.completed;
        const resultClass = isCorrect ? 'summary-correct' : 'summary-incorrect';
        const resultText = isCorrect ? 'Đúng' : 'Sai';

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${question.question}</td>
            <td>${question.userAnswer || '-'}</td>
            <td>${question.answer}</td>
            <td class="${resultClass}">${resultText}</td>
        `;

        summaryTableBody.appendChild(row);
    });
}

function saveResult() {
    const data = {
        action: 'addOrUpdate',
        username: currentUser,
        score: score,
        time: quizTotalTime,
    };

    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data)
    }).then(() => {
        // Reload leaderboard after saving
        setTimeout(loadLeaderboard, 1000);
    }).catch(error => {
        console.error('Error saving result:', error);
    });
}

function loadLeaderboard() {
    // Show loading state
    leaderboardLoading.classList.remove('hidden');
    leaderboardError.classList.add('hidden');
    leaderboardEmpty.classList.add('hidden');
    leaderboardContent.classList.add('hidden');
    topPlayersContainer.classList.add('hidden');

    // Fetch leaderboard data
    fetch(`${GOOGLE_SCRIPT_URL}?action=getLeaderboard`)
        .then(response => response.json())
        .then(data => {
            leaderboardLoading.classList.add('hidden');

            if (data.status === 'success') {
                leaderboardData = data.data;

                if (leaderboardData.length === 0) {
                    leaderboardEmpty.classList.remove('hidden');
                } else {
                    // Sort by score (descending) and time (descending)
                    leaderboardData.sort((a, b) => {
                        if (b.score !== a.score) {
                            return b.score - a.score;
                        }

                        // Convert time strings to seconds for comparison
                        const aTime = timeToSeconds(a.time);
                        const bTime = timeToSeconds(b.time);
                        return aTime - bTime;
                    });
                    
                    leaderboardContent.classList.remove('hidden');
                    displayTopPlayers();
                    displayLeaderboard();
                    highlightCurrentUser();
                }
            } else {
                leaderboardError.classList.remove('hidden');
            }
        })
        .catch(error => {
            console.error('Error fetching leaderboard:', error);
            leaderboardLoading.classList.add('hidden');
            leaderboardError.classList.remove('hidden');

            // For demo purposes, use sample data if fetch fails
            leaderboardData = [
                { username: 'player1', score: 18, time: "2'45s", date: '2023-06-15T10:30:00Z' },
                { username: 'player2', score: 16, time: "3'12s", date: '2023-06-15T11:20:00Z' },
                { username: 'player3', score: 20, time: "2'30s", date: '2023-06-15T09:45:00Z' },
                { username: 'player4', score: 14, time: "4'10s", date: '2023-06-14T14:20:00Z' },
                { username: 'player5', score: 12, time: "3'50s", date: '2023-06-14T16:15:00Z' },
                { username: 'player6', score: 10, time: "5'05s", date: '2023-06-13T09:10:00Z' },
                { username: 'player7', score: 16, time: "3'25s", date: '2023-06-13T11:45:00Z' },
                { username: 'player8', score: 18, time: "2'55s", date: '2023-06-12T15:30:00Z' },
                { username: 'player9', score: 14, time: "3'40s", date: '2023-06-12T16:20:00Z' },
                { username: 'player10', score: 20, time: "2'20s", date: '2023-06-11T10:15:00Z' },
                { username: 'player11', score: 12, time: "4'30s", date: '2023-06-11T14:50:00Z' },
                { username: 'player12', score: 16, time: "3'15s", date: '2023-06-10T09:25:00Z' },
            ];

            // Sort by score (descending) and time (descending)
            leaderboardData.sort((a, b) => {
                
                if (b.score !== a.score) {
                    return b.score - a.score;
                }

                // Convert time strings to seconds for comparison
                const aTime = timeToSeconds(a.time);
                const bTime = timeToSeconds(b.time);
                return bTime - aTime;
            });

            leaderboardContent.classList.remove('hidden');
            displayTopPlayers();
            displayLeaderboard();
        });
}

function displayTopPlayers() {
    if (leaderboardData.length < 1) return;

    topPlayersContainer.innerHTML = '';
    topPlayersContainer.classList.remove('hidden');

    // Display top 3 players
    const topPlayers = leaderboardData.slice(0, 3);

    const trophyEmojis = ['🥇', '🥈', '🥉'];
    const playerClasses = ['gold', 'silver', 'bronze'];

    topPlayers.forEach((player, index) => {
        const playerElement = document.createElement('div');
        playerElement.className = `top-player ${playerClasses[index]} fade-in`;

        // Format date
        const date = new Date(player.date);
        const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;

        playerElement.innerHTML = `
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <span class="trophy">${trophyEmojis[index]}</span>
                    <div>
                        <div class="font-bold">${player.username}</div>
                        <div class="text-sm text-gray-600">Điểm: ${player.score} | Thời gian: ${player.time}</div>
                    </div>
                </div>
                <div class="top-rank rank-${index + 1}">${index + 1}</div>
            </div>
        `;

        topPlayersContainer.appendChild(playerElement);
    });
}

function displayLeaderboard() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = leaderboardData.slice(startIndex, endIndex);

    leaderboardBody.innerHTML = '';

    if (currentPageData.length === 0) {
        leaderboardEmpty.classList.remove('hidden');
        leaderboardContent.classList.add('hidden');
        return;
    }

    currentPageData.forEach((entry, index) => {
        const rank = startIndex + index + 1;
        const row = document.createElement('tr');

        // Format date for display
        const date = new Date(entry.date);
        const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;

        let rankDisplay = rank;

        // Special styling for top 3
        if (rank <= 3) {
            const rankClasses = ['rank-1', 'rank-2', 'rank-3'];
            rankDisplay = `<div class="top-rank ${rankClasses[rank - 1]}">${rank}</div>`;
        } else {
            rankDisplay = `<div class="top-rank rank-4">${rank}</div>`;
        }

        row.innerHTML = `
            <td>${rankDisplay}</td>
            <td>${entry.username}</td>
            <td>${entry.score}</td>
            <td>${entry.time}</td>
            <td>${formattedDate}</td>
        `;

        row.dataset.username = entry.username;
        leaderboardBody.appendChild(row);
    });

    // Create pagination
    createPagination();
}

function highlightCurrentUser() {
    if (!currentUser) return;

    // Remove highlight from all rows
    const rows = leaderboardBody.querySelectorAll('tr');
    rows.forEach(row => {
        row.classList.remove('current-user');
    });

    // Add highlight to current user
    rows.forEach(row => {
        if (row.dataset.username === currentUser) {
            row.classList.add('current-user');
        }
    });
}

function createPagination() {
    pagination.innerHTML = '';

    const totalPages = Math.ceil(leaderboardData.length / itemsPerPage);

    if (totalPages <= 1) {
        return;
    }

    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'pagination-btn';
    prevBtn.textContent = '←';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayLeaderboard();
            highlightCurrentUser();
        }
    });
    pagination.appendChild(prevBtn);

    // Page buttons
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);

    if (endPage - startPage < 4) {
        startPage = Math.max(1, endPage - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            displayLeaderboard();
            highlightCurrentUser();
        });
        pagination.appendChild(pageBtn);
    }

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'pagination-btn';
    nextBtn.textContent = '→';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayLeaderboard();
            highlightCurrentUser();
        }
    });
    pagination.appendChild(nextBtn);
}

function restartQuiz() {
    resultsScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
    usernameInput.value = currentUser;
    validateUsername();
}

function timeToSeconds(timeStr) {
    // Handle the format like "2'45s"
    if (timeStr.includes("'")) {
        const parts = timeStr.split("'");
        const minutes = parseInt(parts[0]);
        const seconds = parseInt(parts[1]);
        return minutes * 60 + seconds;
    }

    // Handle the format like "02:45"
    const parts = timeStr.split(':');
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
}

function createConfetti() {
    const colors = ['#a8e6cf', '#dcedc1', '#7fd8be', '#57cc99', '#80ed99', '#c7f9cc', '#22577a'];
    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';

            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = Math.random() * 10 + 5;
            const left = Math.random() * window.innerWidth;

            confetti.style.backgroundColor = color;
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            confetti.style.left = `${left}px`;
            confetti.style.top = '-10px';

            document.body.appendChild(confetti);

            const animationDuration = Math.random() * 3 + 2;
            const xMovement = (Math.random() - 0.5) * 20;

            confetti.animate([
                { transform: `translateY(0) translateX(0) rotate(0deg)`, opacity: 1 },
                { transform: `translateY(${window.innerHeight}px) translateX(${xMovement}vw) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: animationDuration * 1000,
                easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
            });

            setTimeout(() => {
                document.body.removeChild(confetti);
            }, animationDuration * 1000);
        }, Math.random() * 1500);
    }
}
