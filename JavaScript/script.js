// The user arrives at the landing page and is presented with a call-to-action to "Start Quiz."
//Also note the navigation option to "View Highscores" and the "Time" value set at 0.

// Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.

// Score is calculated by time remaining. Answering quickly and correctly results in a higher score.
//Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining.

// When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials.
//Their final score and initials are then stored in localStorage.

// If a question is answered incorrectly, additional time is subtracted from the timer.

// The timer stops when all questions have been answered or the timer reaches 0.

// After the game ends, the user can save their initials and score to a highscores view using local storage

const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const highscore = document.getElementById("highscores");
let timeLeft = 75;
var score = 0;
let penalty = 15;

function timer() {
  var timer = setInterval(function() {
    document.getElementById("timer").innerHTML = "00:" + timeLeft;
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(timer);
    }
  }, 1000);
}

var highScores; //(array);
let numberCorrect;
var createDiv = document.createElement("div");
let shuffledQuestions, currentQuestionIndex;
let answer;

// Start Quiz:
// 1 Hide everything unnecessary - done
// 2 Display the first question - done
// 3 start timer - done

function startQuiz() {
  console.log("start game", questions);
  startButton.classList.add("hide"); //hides start button after clicked
  // shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0;
  timer.innerHTML = timeLeft;
  timer();
  questionContainerElement.classList.remove("hide"); //removes hide on question-container
  console.log(questions[currentQuestionIndex]);
  showQuestion(questions[currentQuestionIndex]);
}

startButton.addEventListener("click", startQuiz);

function showQuestion(question) {
  console.log(question);
  questionElement.innerText = question.question;

  resetState(); //this removes text Answer 1, Answer 2, etc... in html

  question.choices.forEach(choice => {
    const button = document.createElement("button");
    button.innerText = choice;
    button.classList.add("btn");

    answerButtonsElement.appendChild(button);
    button.addEventListener("click", function(event) {
      selectAnswer(event);
    });

    console.log(choice, "..logging the choices to select from.."); //this logs choices that can be selected
  });
}

function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(event) {
  let answer = event.srcElement.innerHTML;

  console.log(answer, "...this is the answer selected");

  if (answer === questions[currentQuestionIndex].answer) {
    //createDiv.setAttribute("id", "createDiv");
    //createDiv.textContent = "You are Correct!"
    alert("You are correct");

    score++;
    console.log(score, "new score");
    currentQuestionIndex++;
    console.log(questions[currentQuestionIndex].answer);

    showQuestion(questions[currentQuestionIndex]);
  } else {
    //createDiv.setAttribute("id", "createDiv");
    //createDiv.textContent = "You are not Correct!"
    alert("Incorrect");
    timeLeft = timeLeft - penalty;
    currentQuestionIndex++;
    showQuestion(questions[currentQuestionIndex]);
  }
}

if (currentQuestionIndex > 4) {
  alert("Game Over");
  endGame();
}
//console.log(currentQuestionIndex);

// function endGame(){
//     clearInterval(timer)
//     setScore();
// }

// function setScore() {
//     localStorage.setItem("highscore", score);
//     localStorage.setItem("highscoreName",  document.getElementById('name').value);
//     getScore();
// }
