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
var div = document.querySelector("div");
var startBtn = document.querySelector("button");

var timeCount = 75;

function setCounterText(){
    timer.textContent = "Time: " + timeCount;
}

setCounterText();

startBtn.addEventListener("click", function() {
    var timerInterval = setInterval(function() {
        timeCount--;
        setCounterText(); 
        if(timeCount === 0) {
            clearInterval(timerInterval);
        }
    }, 1000) 
        
    });