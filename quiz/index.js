//DATA

const data = [
  {
    question: "What is the capital of Australia?",
    answer: "Canberra",
    options: ["Sydney", "Canberra", "Queensland", "Perth"],
  },

  {
    question: "WHat is the capital of India?",
    answer: "New Delhi",
    options: ["New Delhi", "Canberra", "Queensland", "Perth"],
  },

  {
    question: "What is the capital of Israel?",
    answer: "Tel Aviv",
    options: ["Tel Aviv", "Jeruslam", "Queensland", "Perth"],
  },

  {
    question: "What is the capital of Japan?",
    answer: "Tokyo",
    options: ["Okaido", "Kyoto", "Tokyo", "Nagasaki"],
  },
];

// const quiz = document.querySelector("#quiz");
// const question = document.querySelector(".question");
// const ansOptions = document.querySelectorAll(".option");
// const button = document.querySelector("button");
// const divOption = document.querySelector(".options");
// const para = document.querySelector("p");

// const myInterval = setInterval(startQuiz, 1000);
// let i = 0;
// let count = 5;
// button.addEventListener("click", startQuiz);
// function startQuiz() {
//   button.style.display = "none";
//   quiz.style.display = "block";
//   question.innerText = data[i].question;
//   for (let j = 0; j < ansOptions.length; j++) {
//     ansOptions[j].innerText = data[i].options[j];
//   }
//   para.innerText = count--;
//   if (count < 0) {
//     count = 5;
// }
// }

let button = document.querySelector("button");
let quiz = document.querySelector("#quiz");
let question = document.querySelector(".question");
let divOptions = document.querySelectorAll(".option");
let para = document.querySelector("#para");

let clickEvent = button.addEventListener("click", Ignition);

let i = 0;
let count = 5;

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
  } else {
    clearInterval(countdown);
  }

  if (count <= 0) {
    count = 5;
    i++;
  }
}
