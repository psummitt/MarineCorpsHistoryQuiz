const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {

}

function selectAnswer() {

}

const questions = [
    {
        question: 'When is the birthday of the United States Marine Corps?',
        answers: [
            { text: 'April 1, 1899', correct: false },
            { text: 'August 31, 1991', correct: false },
            { text: 'November 11, 1776', correct: true },
            { text: 'January 1, 1642', correct: false },
        ]
    }
    {
        question: 'Where was the birthplace of the United States Marine Corps?',
        answers: [
            { text: 'TwentyNine Palms, California', correct: false },
            { text: 'Tun Tavern, Philadelphia', correct: true },
            { text: 'Headquarters, Washington, D.C.', correct: false },
            { text: 'Parris Island, South Carolina', correct: false },
        ]
    }
    {
        question: 'What are the three elements of the Marine Corps emblem?',
        answers: [
            { text: 'Eagle, Globe, and US Flag', correct: false },
            { text: 'Eagle, Map of USA, and Anchor', correct: false },
            { text: 'Eagle, Globe, and Aircraft Carrier', correct: false },
            { text: 'Eagle, Globe, and Fouled Anchor', correct: true },
        ]
    }
    {
        question: 'During what battle did the Marines earn the nickname DevilDogs?',
        answers: [
            { text: 'Bella Wood', correct: true },
            { text: 'Guadalcanal', correct: false },
            { text: 'Montezuma', correct: false },
            { text: 'Tripoli', correct: false },
        ]
    }
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