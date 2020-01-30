const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
//const timer = document.getElementById('timer')
const highscore = document.getElementById('highscores')
let timeLeft = 75

function timer(){
    var sec = 20;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

// function timerFunction(){
//     setInterval(function(){
//         timeleft = timeLeft - 1
//         timeLeft -= 1
// if (timeLeft <= 0) {
//             clearInterval(timer);
//             endGame()

//     }, 1000)
// }
// }

// function startTimer() {
//     time = 75;
//     time = setInterval(function(){
//         timeLeft--;
//         if (timeLeft <= 0) {
//             clearInterval(timer);
//             endGame()
//         }, 1000)
//     }
// }


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
    console.log('start game', questions)
    startButton.classList.add('hide') //hides start button after clicked
    // shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    timer.innerHTML = timeLeft
    timer()
    questionContainerElement.classList.remove('hide') //removes hide on question-container
    showQuestion(questions[currentQuestionIndex])
};

startButton.addEventListener('click', startQuiz)



function showQuestion(question) {
    questionElement.innerText = question.question 
    
    resetState() //this removes text Answer 1, Answer 2, etc... in html
   
    question.choices.forEach(choice => {
    const button = document.createElement('button')
    button.innerText = choice
    button.classList.add('btn')
    
    answerButtonsElement.appendChild(button)
    button.addEventListener('click', function(event){
        selectAnswer(event)
    })
    

    console.log(choice)  //this logs choices that can be selected
    
    })  
}; 


function resetState(){       
        while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
        }
    }


   
    
function selectAnswer(event){
        // var selectedButton = event.target;
        // console.log(selectedButton.textContent) //this logs what the user selected
        // answer = selectedButton.textcontent
        // questionIndex = 0;
        let answer = event.srcElement.innerHTML
        if(answer === questions[currentQuestionIndex].answer){
            alert("You are correct")
            currentQuestionIndex++
            showQuestion(questions[currentQuestionIndex])
        } else {
            alert("Incorrect")
            currentQuestionIndex++
            showQuestion(questions[currentQuestionIndex])
        }
     

// if (answer === questions[currentQuestionIndex.answer]) {
//         var createDiv = document.createElement("div");
//         createDiv.textContent = "Your answer is Correct!";
//      } 
        
//     else {
//          createDiv.textContent = "Wrong!  The correct asnwer is: " + questions[currentQuestionIndex].answer;
//         }
//     }
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
