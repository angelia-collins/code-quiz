var QuestionsArr = [
    {
        question: "1. A very useful tool used during development and debugging for printing content to the debugger is:",
        answers:[
            "JavaScript", 
            "terminal/bash", 
            "for loops",
            "console log", 
        ],
    },
    {
        question: "2. String values must be enclosed within ___ when being assigned to variables.",
        answers: [
            "commas",
            "curly brackets",
            "quotes",
            "parentheses",
        ],
    },
    {
        question: "3. Arrays in JavaScript can be used to store _____.",
        answers: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above",
        ],
    },
    {
        question: "4. The condition in an if / else statement is enclosed within _____.",
        answers: [
            "quotes",
            "curly brackets",
            "parentheses",
            "square brackets",
        ],
    },
    {
        question: "5. Commonly used data types DO NOT include:",
        answers:[
            "strings", 
            "booleans", 
            "alerts", 
            "numbers",
        ],
    },
]
var body = document.querySelector("body");
var timer = document.getElementById("timer");
// var container = document.getElementById("container");
var startBtn = document.getElementById("start");
var h1El = document.querySelector("h1");
var pEl = document.getElementById("flavor-text");
var answerBtn = document.getElementById("answers");

var timeCount = 75;
var i = 0;
var scoreCount = 0;


function setCounterText(){
    timer.textContent = "Time: " + timeCount;
}

function startScreen(){
    h1El.textContent = "It's time to take a quiz."
    pEl.textContent = "Take this Javascript quiz to stay nerdy. Your time will go down by 10 seconds for every wrong answer."
    startBtn.textContent = "Start Quiz"
    answerBtn.style.display = "none";
}

function gameOver() {
    h1El.textContent = "It's over!";
    pEl.textContent = "Your score is " + scoreCount;

}

startScreen();

setCounterText();

function makeTimer() {
    var timerInterval = setInterval(function() {
    timeCount--;
    setCounterText(); 
    i++;

    if(timeCount === 0 || i < QuestionsArr.length) {
        clearInterval(timerInterval);
        gameOver();
    }
}, 1000) 
}

startBtn.addEventListener("click", function(event) {
    event.preventDefault()
    startBtn.style.display = "none";
    pEl.textContent = " ";
    makeTimer();
    h1El.textContent = QuestionsArr[i].question;
    answerBtn.style.display = "block";

    for (i = 0; i < QuestionsArr.length; i++) {
        answerBtn = document.createElement("button");
        answerBtn.textContent = QuestionsArr[i].answers;
        }
    });