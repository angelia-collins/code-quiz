var QuestionsArr = [
    {
        question: "1. words words words",
        answers: {
            a: "1.",
            b: "2.",
            c: "3.",
            d: "4.",
        },
    },
    {
        question: "2. words words words",
        answers: {
            a: "1.",
            b: "2.",
            c: "3.",
            d: "4.",
        },
    },
    {
        question: "3. words words words",
        answers: {
            a: "1.",
            b: "2.",
            c: "3.",
            d: "4.",
        },
    },
    {
        question: "4. words words words",
        answers: {
            a: "1.",
            b: "2.",
            c: "3.",
            d: "4.",
        },
    },
    {
        question: "5. words words words",
        answers: {
            a: "1.",
            b: "2.",
            c: "3.",
            d: "4.",
        },
    },
]
var body = document.querySelector("body");
var timer = document.getElementById("timer");
// var container = document.getElementById("container");
var startBtn = document.querySelector("button");
var h1El = document.querySelector("h1");
var pEl = document.getElementById("flavor-text");

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
}

function gameOver() {
    h1El.textContent = "It's over!";
    pEl.textContent = "Your score is " + scoreCount;

}

startScreen();

setCounterText();

startBtn.addEventListener("click", function(event) {
    event.preventDefault()
    startBtn.style.display = "none";
    pEl.textContent = " ";
    var timerInterval = setInterval(function() {
        timeCount--;
        setCounterText(); 
        if(timeCount === 0 || i < QuestionsArr.length) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000) 
    // var i = 0;
    // h1El.textContent = JSON.stringify(QuestionsArr[i]);
    // i++;
    for (var i = 0; i < QuestionsArr.length; i++) {
        h1El.innerText = JSON.stringify(QuestionsArr[i]);
    }
    // QuestionsArr.forEach(element => console.log(element)); 
    // var i =0
    // QuestionsArr.forEach(callback (element[i]) {
        // h1El.textContent = QuestionsArr; 
        //     return console.log(element);
        // }); 

    });