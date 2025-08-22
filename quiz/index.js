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
    answer: "Jerusalem",
    options: ["Tel Aviv", "Jerusalem", "Queensland", "Perth"],
  },

  {
    question: "What is the capital of Japan?",
    answer: "Tokyo",
    options: ["Okaido", "Kyoto", "Tokyo", "Nagasaki"],
  },
  {
    question: {
      image:
        "https://nycwatercruises.com/cdn/shop/articles/1.png?v=1692377230&width=1100",
      text: "In which city this thing is located ??",
    },
    answer: "New York",
    options: ["california ", "New York", "Texas", "Korea"],
  },
];

let button = document.querySelector("button");
let quiz = document.querySelector(".quiz");
let timer = document.querySelector(".timer");
let option = document.querySelectorAll(".option");
let fun = document.querySelectorAll(".fun");
let bunch = document.querySelector(".bunch");
let questions = document.querySelector(".question");
let score = document.querySelector(".score");
let points = document.querySelector(".score-points");

let count = 5;
let questionNumber = 0;

quiz.style.display = "none";
score.style.display = "none";

button.addEventListener("click", initialize);
let countdown;

function initialize() {
  button.style.display = "none";
  quiz.style.display = "block";
  displayQuestion();
  Options();
  tikTik();

  countdown = setInterval(quizStart, 1000);
}

function quizStart() {
  // if (questionNumber < data.length) {
  //   Options();
  //   tikTik();
  // } else {
  //   clearInterval(countdown);
  // }

  if (count <= 0) {
    if (questionNumber >= data.length - 1) {
      clearInterval(countdown);

      quiz.style.display = "none";
      score.style.display = "block";
      points.innerText = marks;
      answerKey();
    } else {
      count = 5;
      questionNumber++;
      resetColor();
      displayQuestion();
      Options();
      tikTik();
    }
  } else {
    timer.innerText = count--;
  }
}

function displayQuestion() {
  questions.innerText = "";
  if (typeof data[questionNumber].question == "object") {
    let images = document.createElement("img");
    questions.append(images);
    images.src = data[questionNumber].question.image;

    let text = document.createElement("span");

    text.innerText = data[questionNumber].question.text;

    questions.append(text);

    // questions.innerText = data[questionNumber].question.text;
  } else {
    questions.innerText = data[questionNumber].question;
  }
}

function Options() {
  for (let i = 0; i < option.length; i++) {
    option[i].innerText = data[questionNumber].options[i];

    // console.log(option[i]);
  }
  selectOption();
}

function tikTik() {
  timer.innerText = count--;

  // console.log(count);
  // if (count <= 0) {
  //   count = 5;
  //   questionNumber++;
  //   resetColor();
  //   console.log(5, count);
  // } else {
  //   timer.innerText = count--;
  //   console.log(count);
  // }
}

function resetColor() {
  for (let i = 0; i < option.length; i++) {
    option[i].style.color = "white";
    bunch.style.pointerEvents = "all";
  }
}

function selectOption() {
  for (let i = 0; i < option.length; i++) {
    option[i].addEventListener("click", lockOption);
  }
}

let correctAnswers = [];

let marks = 0;

function lockOption(e) {
  e.target.style.color = "red";

  if (e.target.style.color == "red") {
    bunch.style.pointerEvents = "none";
    // console.log(e.target);
  }

  if (e.target.innerText == data[questionNumber].answer) {
    ++marks;

    correctAnswers.push(e.target.innerText);
    console.log(correctAnswers, marks);
  } else {
    correctAnswers.push(e.target.innerText);
    console.log(correctAnswers, marks);
  }
}

function answerKey() {
  for (let i = 0; i < data.length; i++) {
    let questionKey = document.createElement("div");
    let correct = document.createElement("div");
    let yourAns = document.createElement("div");

    if (typeof data[i].question == "object") {
      questionKey.innerText =
        "Question" + " " + ":" + " " + data[i].question.text;
    } else {
      questionKey.innerText = "Question" + " " + ":" + " " + data[i].question;
    }

    correct.innerText = "Correct Answer" + " " + ":" + " " + data[i].answer;
    yourAns.innerText = "Your Answer" + " " + ":" + " " + correctAnswers[i];

    score.append(questionKey);
    score.append(correct);
    score.append(yourAns);
  }
}
