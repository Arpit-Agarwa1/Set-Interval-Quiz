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
    options: ["Tel Aviv", "Jeruslam", "Queensland", "Perth"],
  },

  {
    question: "What is the capital of Japan?",
    answer: "Tokyo",
    options: ["Okaido", "Kyoto", "Tokyo", "Nagasaki"],
  },
];

let button = document.querySelector("button");
let quiz = document.querySelector("#quiz");
let question = document.querySelector(".question");
let divOptions = document.querySelectorAll(".option");
let para = document.querySelector("#para");
let score = document.querySelector(".score");
let correct = document.querySelector(".correct");
let wrong = document.querySelector(".wrong");
let list = document.querySelector(".list");
let scoreHeading = document.querySelector(".score-heading");
let answerQuestion = document.querySelectorAll(".answer-key-question");
let answerKeyanswers = document.querySelectorAll(".answer-key-answer");

let clickEvent = button.addEventListener("click", Ignition);

let i = 0;
let count = 5;
let countdown;

function Ignition() {
  startQuiz();
  countdown = setInterval(startQuiz, 1000);
}

function startQuiz() {
  button.style.display = "none";

  quiz.style.display = "block";

  if (i < data.length) {
    question.innerText = data[i].question;

    for (let j = 0; j < divOptions.length; j++) {
      divOptions[j].innerText = data[i].options[j];
    }

    para.innerText = count--;
    // answerQuestion.innerText = data[i].question;
    // answerKeyanswers.innerText = data[i].answer;
  } else {
    clearInterval(countdown);

    for (let a = 0; a < answerQuestion.length; a++) {
      answerQuestion[a].innerText = data[a].question;

      answerQuestion[a].style.display = "block";
    }

    for (let b = 0; b < answerKeyanswers.length; b++) {
      answerKeyanswers[b].innerText = data[b].answer;
      answerKeyanswers[b].style.display = "block";
    }

    button.style.display = "none";
    para.style.display = "none";
    quiz.style.display = "none";
    score.style.display = "block";
    scoreHeading.style.display = "block";
  }

  if (count <= 0) {
    count = 5;
    i++;
  }
}

let answerKEy = 0;
let correctAnswer = [];
let wrongAnswer = [];

for (let k = 0; k < divOptions.length; k++) {
  divOptions[k].addEventListener("click", answer);
  function answer() {
    if (divOptions[k].innerText == data[i].answer) {
      correctAnswer.push(divOptions[k].innerText);
      ++answerKEy;

      score.innerHTML = answerKEy;
    } else {
      wrongAnswer.push(divOptions[k].innerText);
    }
  }
}
