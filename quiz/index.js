//DATA
const data = [
  {
    question: "What is the capital of Australia?",
    answer: "Canberra",
    options: ["Sydney", "Canberra", "Queensland", "Perth"],
  },

  {
    question: "What is the capital of India?",
    answer: "New Delhi",
    options: ["New Delhi", "Canberra", "Queensland", "Perth"],
  },

  {
    question: "What is the capital of Israel?",
    answer: "Jeruslam",
    options: ["Tel Aviv", "Jerusalem", "Queensland", "Perth"],
  },

  {
    question: "What is the capital of Japan?",
    answer: "Tokyo",
    options: ["Okaido", "Kyoto", "Tokyo", "Nagasaki"],
  },
];

let button = document.querySelector("button");
let quiz = document.querySelector(".quiz");
let timer = document.querySelector(".timer");
let option = document.querySelectorAll(".option");
let bunch = document.querySelector(".bunch");
let questions = document.querySelector(".question");

let count = 5;
let questionNumber = 0;

quiz.style.display = "none";

button.addEventListener("click", initialize);
let countdown;

function initialize() {
  button.style.display = "none";
  quiz.style.display = "block";
  countdown = setInterval(quizStart, 1000);
  quizStart();
}

function quizStart() {
  if (questionNumber < data.length) {
    questions.innerText = data[questionNumber].question;
    Options();

    tikTik();
  } else {
    clearInterval(countdown);
  }
}

function Options() {
  for (let i = 0; i < data.length; i++) {
    option[i].innerText = data[questionNumber].options[i];
    selectOption();
  }
}

function tikTik() {
  timer.innerText = count--;
  if (count <= 0) {
    count = 5;
    questionNumber++;
  }
}

function selectOption() {
  for (let i = 0; i < data.length; i++) {
    option[i].addEventListener("click", lockOption);
  }
  function lockOption(e) {
    // e.target.classList.add("enable");
    e.target.classList.add("enable");
    // e.target.style.color = "blue";
  }
}
