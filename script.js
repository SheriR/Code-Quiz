const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const choiceButtonsElement = document.getElementById('choice-buttons');
const answerElement = document.getElementById('answer')
const timeLeft = document.getElementById('timeleft');
const timer = document.getElementById('timer')


let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startQuiz)


function startQuiz() {
    console.log('start game')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
};

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
};

function showQuestion(question) {
    questionElement.innerText = question.question;
    
    question.choices.forEach(choices => {
        const button = document.createElement('button')
        button.innerText = i
            for (var i=0; i < question.choices.length; i++) 
        button.classList.add('btn')    
        
        if (choices.correct) {
            button.dataset.correct = choices.correct
          }                     
        button.addEventListener('click', selectChoice)
        choiceButtonsElement.appendChild(button)
    })
                
}

function resetState() {
    clearStatusClass(document.body)    
    while (choiceButtonsElement.firstChild) {
      choiceButtonsElement.removeChild(choiceButtonsElement.firstChild)
    }
  }

function selectChoice(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  };
   
  function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(choiceButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }
  


