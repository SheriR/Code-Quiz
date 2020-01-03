const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementsByClassName('choice-text');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)


function startQuiz() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
 }

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.choices.array.forEach( answer => {
        const button = document.createElement('button')
        button.innerText = choices.choices
        button.classList.add('btn')

        
    });

}



function selectAnswer() {

}

