var QuestionsArr = [
    {
        question: "1. words words words",
        answers: {
            a: "1.",
            b: "2.",
            c: "3.",
            d: "4.",
        },
        // correctAnswer: "b",
    },
    {
        question: "2. words words words",
        answers: {
            a: "1.",
            b: "2.",
            c: "3.",
            d: "4.",
        },
        // correctAnswer: "b",
    },
    {
        question: "3. words words words",
        answers: {
            a: "1.",
            b: "2.",
            c: "3.",
            d: "4.",
        },
        // correctAnswer: "b",
    },
    {
        question: "4. words words words",
        answers: {
            a: "1.",
            b: "2.",
            c: "3.",
            d: "4.",
        },
        // correctAnswer: "b",
    },
    {
        question: "5. words words words",
        answers: {
            a: "1.",
            b: "2.",
            c: "3.",
            d: "4.",
        },
        // correctAnswer: "b",
    },
]
var body = document.querySelector("body");
var timer = document.getElementById("timer");
// var container = document.getElementById("container");
var startBtn = document.querySelector("button");
var h1El = document.querySelector("h1");
var pEl = document.getElementById("flavor-text");

var timeCount = 75;

function setCounterText(){
    timer.textContent = "Time: " + timeCount;
}

function startScreen(){
    h1El.textContent = "It's time to take a quiz."
    pEl.textContent = "Take this Javascript quiz to stay nerdy."
    startBtn.textContent = "Start Quiz"
}

startScreen();

setCounterText();

startBtn.addEventListener("click", function(event) {
    event.preventDefault()
    var timerInterval = setInterval(function() {
        timeCount--;
        setCounterText(); 
        if(timeCount === 0) {
            clearInterval(timerInterval);
        }
    }, 1000) 
        
    });