var QuestionsArr = [
    {
        question: "1. A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            "JavaScript",
            "terminal/bash",
            "for loops",
            "console log",
        ],
        correctAnswer: 3
    },
    {
        question: "2. String values must be enclosed within ___ when being assigned to variables.",
        answers: [
            "commas",
            "curly brackets",
            "quotes",
            "parentheses",
        ],
        correctAnswer: 2
    },
    {
        question: "3. Arrays in JavaScript can be used to store _____.",
        answers: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above",
        ],
        correctAnswer: 3
    },
    {
        question: "4. The condition in an if / else statement is enclosed within _____.",
        answers: [
            "quotes",
            "curly brackets",
            "parentheses",
            "square brackets",
        ],
        correctAnswer: 2
    },
    {
        question: "5. Commonly used data types DO NOT include:",
        answers: [
            "strings",
            "booleans",
            "alerts",
            "numbers",
        ],
        correctAnswer: 2
    },
]
var body = document.querySelector("body");
var timer = document.getElementById("timer");
var timerInterval;
var startBtn = document.getElementById("start");
var h1El = document.querySelector("h1");
var pEl = document.getElementById("flavor-text");
var answerDiv = document.getElementById("answers");
var inputDiv = document.getElementById("initals");
var notify = document.getElementById("wrong-right");
var submitBtn = document.getElementById("submit");
var inputField = document.querySelector("input");
var nameList = document.getElementById("Name-and-Scores");
var HighScoreDiv = document.getElementById("high-score");
var backBtn = document.getElementById("backBtn");
var clearBtn = document.getElementById("clearBtn");
var seeHighScoreBtn = document.getElementById("score");

var timeCount = 75;
var idx_question = 0;
var scoreCount = 0;

var aName = [];


function setCounterText() {
    timer.textContent = "Time: " + timeCount;
}

function startScreen() {
    h1El.textContent = "It's time to take a quiz."
    pEl.textContent = "Take this Javascript quiz to stay nerdy. Your time will go down by 10 seconds for every wrong answer. One point will be added for every correct answer."
    startBtn.textContent = "Start Quiz"
    answerDiv.style.display = "none";
    inputDiv.style.display = "none";
    HighScoreDiv.style.display = "none";
}

function gameOver() {
    h1El.textContent = "It's over!";
    pEl.textContent = "Your score is " + scoreCount;
    answerDiv.style.display = "none";
    inputDiv.style.display = "block";
    HighScoreDiv.style.display = "none";
}

function highScorePage() {
    HighScoreDiv.style.display = "block";
    h1El.textContent = "Highscores";
    pEl.style.display = "none";
    answerDiv.style.display = "none";
    inputDiv.style.display = "none";
    notify.style.display = "none";
}

startScreen();

setCounterText();

function makeTimer() {
    timerInterval = setInterval(function () {
        timeCount--;
        setCounterText();

        if (timeCount === 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000)
}

startBtn.addEventListener("click", function (event) {
    event.preventDefault()
    scoreCount = 0;
    startBtn.style.display = "none";
    answerDiv.style.display = "block";
    pEl.textContent = " ";
    makeTimer();
    for (var idx_answer = 0; idx_answer < 4; idx_answer++) {
        //Make Answer buttons clickable and recognize the right answer
        var newAnswerBtn = document.getElementById("answer-" + idx_answer);
        newAnswerBtn.addEventListener("click", function (answersEvent) {
            var chosenAnswer = Number(this.id.substr(7));
            var correctAnswer = QuestionsArr[idx_question].correctAnswer;


            var result = chosenAnswer === correctAnswer;
            //add result to player score
            if (result) {
                scoreCount++;
                notify.textContent = "Correct";
            }
            //remove 10 seconds on timer for wrong answers
            else {
                timeCount = timeCount - 10;
                notify.textContent = "Wrong";
            }
            //if there's a next question go to the next one else go to end screen
            var questionsRemaining = idx_question < QuestionsArr.length - 1;
            if (questionsRemaining) {
                activateQuestion(idx_question + 1);
            }
            else {
                gameOver();
                clearInterval(timerInterval);
            }
        });
    }
    activateQuestion(0);
});

function activateQuestion(idx_new) {
    h1El.textContent = QuestionsArr[idx_new].question;


    var answerQty = QuestionsArr[idx_new].answers.length;


    for (var idx_answer = 0; idx_answer < answerQty; idx_answer++) {
        var newAnswerBtn = document.getElementById("answer-" + idx_answer);
        newAnswerBtn.textContent = QuestionsArr[idx_new].answers[idx_answer];
    }
    idx_question = idx_new;
}

submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    highScorePage();
    storeHighScoreNames();
    renderHighScores();
})

function renderHighScores() {

    for (var i = 0; i < aName.length; i++) {
        console.log(aName);
        var li = document.createElement("li");
        li.textContent = aName[i];
        li.setAttribute("data-index", i);

        nameList.appendChild(li);
    }
}

function storeHighScoreNames() {
    var storedNames = JSON.parse(localStorage.getItem("names"));
    console.log(storedNames);
    if (storedNames !== null) {
        aName = storedNames;
    }
    var nameText = inputField.value.trim();
    if (nameText.length !== 0) {
        console.log(nameText);
        aName.push(nameText + "-" + scoreCount);
        aName.sort(function (a, b) {
            var aScore = a.split("-")[1];
            var bScore = b.split("-")[1];
            if (aScore > bScore) {
                return -1;
            }
            if (aScore < bScore) {
                return 1;
            }
            return 0;
        });
    }
        console.log(aName);
        inputField.value = "";
        localStorage.setItem("names", JSON.stringify(aName));
    }

    clearBtn.addEventListener("click", function (event) {
        nameList.style.display = "none";
        localStorage.clear();
    })

    backBtn.addEventListener("click", function (event) {
        location.reload();
    })

    seeHighScoreBtn.addEventListener("click", function (event) {
        event.preventDefault();
        startBtn.style.display = "none";
        highScorePage();
        storeHighScoreNames();
        renderHighScores();
    })
