const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
let score = 0

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
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
        //score = 0 
    }

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        //updateScore()
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

/*function updateScore() {
    score += 1
    document.getElementById('scoreLabel').innerHTML = "score: " + score
}*/

const questions = [
    {
        question: 'When is the birthday of the United States Marine Corps?',
        answers: [
            { text: 'April 1, 1899', correct: false },
            { text: 'August 31, 1991', correct: false },
            { text: 'November 10, 1776', correct: true },
            { text: 'January 1, 1642', correct: false },
        ]
    },
    {
        question: 'Where was the birthplace of the United States Marine Corps?',
        answers: [
            { text: 'TwentyNine Palms, California', correct: false },
            { text: 'Tun Tavern, Philadelphia', correct: true },
            { text: 'Headquarters, Washington, D.C.', correct: false },
            { text: 'Parris Island, South Carolina', correct: false },
        ]
    },
    {
        question: 'What are the three elements of the Marine Corps emblem?',
        answers: [
            { text: 'Eagle, Globe, and US Flag', correct: false },
            { text: 'Eagle, Map of USA, and Anchor', correct: false },
            { text: 'Eagle, Globe, and Aircraft Carrier', correct: false },
            { text: 'Eagle, Globe, and Fouled Anchor', correct: true },
        ]
    },
    {
        question: 'During what battle did the Marines earn the nickname DevilDogs?',
        answers: [
            { text: 'Bella Wood', correct: true },
            { text: 'Guadalcanal', correct: false },
            { text: 'Montezuma', correct: false },
            { text: 'Tripoli', correct: false },
        ]
    },
    {
        question: 'Where did are two Marine Corps Recruit Depots located?',
        answers: [
            { text: 'Hawaii and Alaska', correct: false },
            { text: 'South Carolina and California', correct: true },
            { text: 'Virginia and Arkansas', correct: false },
            { text: 'Nevada and Missouri', correct: false },
        ]
    },
    {
        question: 'Which battle is not from World War II?',
        answers: [
            { text: 'Iwo Jima', correct: false },
            { text: 'Tarawa', correct: false },
            { text: 'Chosin Reservoir', correct: true },
            { text: 'Guadalcanal', correct: false },
        ]
    },
    {
        question: 'What does the Marine Corps motto Semper Fidelis mean?',
        answers: [
            { text: 'working together', correct: false },
            { text: 'always faithful', correct: true },
            { text: 'there\'s a sucker born every minute', correct: false },
            { text: 'beware the ides of march', correct: false },
        ]
    },
    {
        question: 'From what group did the Marines obtain the term Gung Ho from during World War II?',
        answers: [
            { text: 'the VietCong', correct: false },
            { text: 'Japanese', correct: false },
            { text: 'Chinese Communists', correct: true },
            { text: 'South Koreans', correct: false },
        ]
    },
    {
        question: 'What is the proper term to use when referencing a Marine?',
        answers: [
            { text: 'Sir', correct: false },
            { text: 'soldier', correct: false },
            { text: 'grunt', correct: false },
            { text: 'Marine', correct: true },
        ]
    },
    {
        question: 'Where did the term leatherneck come from?',
        answers: [
            { text: 'Working in the sun', correct: false },
            { text: 'a term given to Marines during WWI', correct: false },
            { text: 'a term given because US Marines washed only their face and hands', correct: false },
            { text: 'a leather collar issued to Marines beginning in 1798', correct: true },
        ]
    }
] 