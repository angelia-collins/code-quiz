var QuestionsArr = [
    {
        question: "1. A very useful tool used during development and debugging for printing content to the debugger is:",
        answers:[
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
        answers:[
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
// var container = document.getElementById("container");
var startBtn = document.getElementById("start");
var h1El = document.querySelector("h1");
var pEl = document.getElementById("flavor-text");
var answerDiv = document.getElementById("answers");

var timeCount = 75;
var idx_question = 0;
var scoreCount = 0;


function setCounterText(){
    timer.textContent = "Time: " + timeCount;
}

function startScreen(){
    h1El.textContent = "It's time to take a quiz."
    pEl.textContent = "Take this Javascript quiz to stay nerdy. Your time will go down by 10 seconds for every wrong answer."
    startBtn.textContent = "Start Quiz"
    answerDiv.style.display = "none";
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
    idx_question++;

    if(timeCount === 0) {
        clearInterval(timerInterval);
        gameOver();
    }
}, 1000) 
}

startBtn.addEventListener("click", function(event) {
    event.preventDefault()
    startBtn.style.display = "none";
    answerDiv.style.display = "block";
    pEl.textContent = " ";
    // makeTimer();
    h1El.textContent = QuestionsArr[idx_question].question;
    

    var answerQty = QuestionsArr[idx_question].answers.length;


    for (var idx_answer = 0; idx_answer < answerQty; idx_answer++) {
        var newAnswerBtn = document.createElement("button");
        
        // Storing index of answer in the buttons
        newAnswerBtn.id = "answer-" + idx_answer;
        answerDiv.append(newAnswerBtn);
        newAnswerBtn.textContent = QuestionsArr[idx_question].answers[idx_answer];
        
        //Make Answer buttons clickable and recognize the right answer
        newAnswerBtn.addEventListener("click", function(answersEvent) {
            var chosenAnswer = Number(this.id.substr(7));
            var correctAnswer = QuestionsArr[idx_question].correctAnswer;
        

            alert(chosenAnswer === correctAnswer);
        });
        }
    });