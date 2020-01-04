const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
console.log(choices);

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)


function startQuiz() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    score = 0
    timer = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
 }

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.choices.forEach(choice => {
        const number = choice.dataset['number'];
        choices.innerText = question['choice' + number];
    });

    



