// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");
const startBtn = document.getElementById("start-btn");
const retryBtn = document.getElementById("retry-btn");
const questionText = document.getElementById("question-text");
const optionButtons = document.querySelectorAll(".option-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score");

// Quiz Data
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

const questions = [
  {
    question: "What is the national language of Bangladesh?",
    options: ["Hindi", "Urdu", "Bengali", "English"],
    answer: 2,
  },
  {
    question: "In which year did Bangladesh gain independence?",
    options: ["1947", "1952", "1971", "1985"],
    answer: 2,
  },
  {
    question: "What is the capital city of Bangladesh?",
    options: ["Chittagong", "Dhaka", "Sylhet", "Khulna"],
    answer: 1,
  },
  {
    question: "Who is considered the Father of the Nation in Bangladesh?",
    options: [
      "Sheikh Hasina",
      "Ziaur Rahman",
      "Sheikh Mujibur Rahman",
      "A. K. Fazlul Huq",
    ],
    answer: 2,
  },
  {
    question: "What is the currency of Bangladesh?",
    options: ["Taka", "Rupee", "Dollar", "Yen"],
    answer: 0,
  },
  {
    question: "Which river is known as the longest river in Bangladesh?",
    options: ["Meghna", "Padma", "Jamuna", "Brahmaputra"],
    answer: 1,
  },
  {
    question: "Which is the national flower of Bangladesh?",
    options: ["Lotus", "Rose", "Water Lily", "Jasmine"],
    answer: 2,
  },
  {
    question: "Which city is known as the 'Port City' of Bangladesh?",
    options: ["Dhaka", "Rajshahi", "Sylhet", "Chittagong"],
    answer: 3,
  },
  {
    question: "Which is the largest sea beach in Bangladesh?",
    options: [
      "Patenga Beach",
      "Kuakata Beach",
      "Cox's Bazar Beach",
      "Inani Beach",
    ],
    answer: 2,
  },
  {
    question: "What is the name of the highest peak in Bangladesh?",
    options: ["Keokradong", "Tazingdong", "Mowdok Mual", "Saka Haphong"],
    answer: 0,
  },
  {
    question:
      "Which UNESCO World Heritage Site in Bangladesh is the largest mangrove forest in the world?",
    options: [
      "Sundarbans",
      "Lawachara Forest",
      "Ratargul Swamp Forest",
      "Madhupur Forest",
    ],
    answer: 0,
  },
  {
    question: "Who was the first President of Bangladesh?",
    options: [
      "Sheikh Mujibur Rahman",
      "Tajuddin Ahmad",
      "Khandaker Mushtaque Ahmed",
      "Ziaur Rahman",
    ],
    answer: 0,
  },
  {
    question: "What is the national instrument of Bangladesh?",
    options: ["Tabla", "Ektara", "Flute", "Dotara"],
    answer: 1,
  },
  {
    question: "In which year was the first constitution of Bangladesh adopted?",
    options: ["1971", "1972", "1973", "1975"],
    answer: 1,
  },
  {
    question: "What is the highest civilian award in Bangladesh?",
    options: [
      "Independence Award (Swadhinata Padak)",
      "Ekushey Padak",
      "Shadhinata Bir Sreshtho",
      "Bangladesh National Award",
    ],
    answer: 0,
  },
  {
    question: "Which of these rivers does not originate in Bangladesh?",
    options: ["Brahmaputra", "Meghna", "Teesta", "Ganges (Padma)"],
    answer: 3,
  },
  {
    question: "Who was the first female Prime Minister of Bangladesh?",
    options: ["Sheikh Hasina", "Khaleda Zia", "Begum Rokeya", "Jahanara Imam"],
    answer: 1,
  },
  {
    question: "What is the deepest river in Bangladesh?",
    options: ["Meghna", "Karnaphuli", "Jamuna", "Padma"],
    answer: 1,
  },
  {
    question:
      "Which Bangladeshi organization won the Nobel Peace Prize in 2006?",
    options: ["Bangladesh Army", "Grameen Bank", "BRAC", "Prothom Alo"],
    answer: 1,
  },
  {
    question: "What is the largest freshwater lake in Bangladesh?",
    options: ["Kaptai Lake", "Foy's Lake", "Boga Lake", "Tanguar Haor"],
    answer: 0,
  },
];

// Start the quiz
startBtn.addEventListener("click", startQuiz);
retryBtn.addEventListener("click", resetQuiz);

function startQuiz() {
  // Hide the start screen and show the quiz screen
  startScreen.classList.add("hidden");
  startScreen.style.display = "none";
  quizScreen.classList.remove("hidden");
  quizScreen.style.display = "block";
  resultsScreen.classList.remove("hidden");
  resultsScreen.style.display = "none";
  score = 0;
  currentQuestionIndex = 0;
  scoreDisplay.innerText = `You scored ${score} out of ${currentQuestionIndex}`;
  displayQuestion();
}

// Display current question and options
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.innerText = currentQuestion.question;

  // Display each option button with text from the current question's options
  optionButtons.forEach((btn, index) => {
    btn.innerText = currentQuestion.options[index];
    btn.classList.remove("selected"); // Reset button styles for a new question
    btn.onclick = () => selectAnswer(index);
  });

  // Handle navigation buttons
  prevBtn.disabled = currentQuestionIndex === 0; // Disable previous button on first question
  nextBtn.disabled = true; // Disable next button until an option is selected
}

// Handle answer selection
function selectAnswer(index) {
  selectedAnswer = index;

  // Highlight selected option
  optionButtons.forEach((btn) => btn.classList.remove("selected")); // Remove previous selections
  optionButtons[index].classList.add("selected"); // Add selected class to clicked option

  // Enable the next button after an answer is selected
  nextBtn.disabled = false;
}

// Handle next question logic
nextBtn.addEventListener("click", () => {
  // Check if the selected answer is correct
  if (selectedAnswer === questions[currentQuestionIndex].answer) {
    score++;
  }

  // Move to the next question or end the quiz
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    selectedAnswer = null;
    displayQuestion();
  } else {
    showResults();
  }
});

// Handle previous button logic
prevBtn.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    selectedAnswer = null;
    displayQuestion();
  }
});

// Show the results at the end of the quiz
function showResults() {
  quizScreen.classList.add("hidden");
  quizScreen.style.display = "none";
  resultsScreen.classList.remove("hidden");
  resultsScreen.style.display = "block";
  scoreDisplay.innerText = `You scored ${score} out of ${questions.length}`;
}

// Reset quiz for retry
function resetQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  scoreDisplay.innerText = `You scored ${score} out of ${currentQuestionIndex}`;
  startQuiz();
  displayQuestion();
}
