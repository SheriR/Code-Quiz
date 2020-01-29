const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const timer = document.getElementById('timer')
const highscore = document.getElementById('highscores')


// variables
var timeLeft; 
var highScores; //(array);
let numberCorrect;
var createDiv = document.createElement('div');
let shuffledQuestions, currentQuestionIndex;
let answer; 


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


function displayQuestion(){
      showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question 
    
    resetState() //this removes text Answer 1, Answer 2, etc... in html
   
    question.choices.forEach(choice => {
    const button = document.createElement('button')
    button.innerText = choice
    button.classList.add('btn')
    
    answerButtonsElement.appendChild(button)
    button.addEventListener('click', selectAnswer)
    

    console.log(choice)  //this logs choices that can be selected
    
    })  
}; 


function resetState(){       
        while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
        }
    }
   
    
function selectAnswer(event){
        var selectedButton = event.target;
        console.log(selectedButton.textContent) //this logs what the user selected
        answer = selectedButton.textcontent
        questionIndex = 0;
     

if (answer === questions[currentQuestionIndex.answer]) {
        var createDiv = document.createElement("div");
        createDiv.textContent = "Your answer is Correct!";
     } 
        
    else {
         createDiv.textContent = "Wrong!  The correct asnwer is: " + questions[questionIndex].answer;
        }
    }
  


    
 

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
