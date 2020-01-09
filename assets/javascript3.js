// select the elements
const start = document.getElementById('start');
const quiz = document.getElementById('quiz-container');
const question = document.getElementById('question');
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const choiceD = document.getElementById('D');
const highscores = document.getElementById('highscores');
const correct = document.getElementById('notifycorrect');
const wrong = document.getElementById('notifywrong');
const timer = document.getElementById('timer');
 
let questions = [
    {    
      question: "Commonly used data types DO NOT include?",
      choiceA: "strings",
      choiceB: "booleans",
      choiceC: "alerts",
      choiceD: "numbers",
      correct: "C", //"alerts"
    },
    
    {
      question: "The condition in an if / else statement is enclosed within ____?",
      choiceA: "quotes",
      choiceB: "curly brackets",
      choiceC: "parentheses",
      choiceD: "square brackets",
      correct: "C", //"parentheses"
    },
  
    {
      question: "Arrays in JavaScript can be used to store ______?",
      choiceA: "numbers and strings",
      choiceB: "other Arrays",
      choiceC: "booleans",
      choiceD: "all of the above",
      correct: "D", //"all of the above"
    },
  
    {
      question: "String values must be enclosed within ______ when being assinged to variables?",
      choiceA: "commas",
      choiceB: "curly brackets",
      choiceC: "quotes",
      choiceD: "parentheses",
      correct: "C", //"quotes"
    },
  
    {
      question: "What does JS stand for?",
      choiceA: "Just Saying",
      choiceB: "JavaStyle",
      choiceC: "JavaScript",
      choiceD: "JScript",
      correct: "C", //JavaScript
   
    }
    
  ];


//create variables
let lastQuestion = questions.length -1;
let runningQuestion = 0;
let score = 0;


//render question
function renderQuestion() {
    let q = questions[runningQuestion];
    
    question.innerHTML = "<h4>"+ q.question + "</h4>";

    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

//start quiz

function startQuiz() {
    timeleft = 75;
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    startTimer();
    
    
}

function startTimer(){
    time = time - 1;
    if (time < 75) {
    time = timer;
}
    if (time < 1) {
        window.clearInterval(update);               
    } 
}

update = setInterval('startTimer()', 1000);

// TO DO
// timer needs count down by 1 second
// need to give 10 second bonus if answer is correct
// need to decrease by 10 seconds if answer is incorrect
       


//checkAnswwer
function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        score++;
        answerIsCorrect();
    }
    else{
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }
    else{
        clearInterval(timer);
        scoreRender();
    }
}

function answerIsCorrect(){
    document.getElementById('notifycorrect');
}
  
function answerIsWrong(){
}

  

function endGame(){
}

