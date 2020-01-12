const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const timer = document.getElementById('timer')
const highscore = document.getElementById('highscores')


// variables
var timeLeft; 
var highScores; //(array);
var Score;
let shuffledQuestions, currentQuestionIndex


// Start Quiz:
// 1 Hide everything unnecessary - done
// 2 Display the first question - done
// 3 start timer

function startQuiz() {
    console.log('start game')
    startButton.classList.add('hide') //hides start button after clicked
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide') //removes hide on question-container
    displayQuestion()
};

startButton.addEventListener('click', startQuiz)

// Display Next Question:
// 1 clear question.innerText
// 2 display question
// 2a use question index to get question text
// 2b update question.innerText
// 3 display buttons for answers using a for loop

function displayQuestion(){
      showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question 

    resetState()
    question.choices.forEach(choice => {
    const button = document.createElement('button')
    button.innerText = choice
    button.classList.add('btn')
    console.log(choice)
    
    answerButtonsElement.appendChild(button)
    button.addEventListener('click', selectAnswer)
    })  
}; 

function resetState(){       
        while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
        }
    }


    function selectAnswer(){

    }
    // if (choice.correct) {
    // button.dataset.correct = answer.correct
    // }
    // 
    // answerButtonsElement.appendChild(button)
 

   
    //   if (answer.correct) {
    //     button.dataset.correct = answer.correct
    //   }
    //   button.addEventListener('click', selectAnswer)
    //   answerButtonsElement.appendChild(button)
    // }
  




    

// function startTimer() {
//     time = 75;
//     time = setInterval(function(){
//         timeLeft--;
//         if (timeLeft <= 0) {
//             clearInterval(timer);
//             endGame()
//         }
//     }
// };

function endGame(){
    clearInterval(timer);
}

function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName",  document.getElementById('name').value);
    getScore();
}




   



