const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

// Activate the button functions

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

//Generating computer choice

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber)
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

// game result display by choices

function getResult() {
    if (computerChoice === userChoice)
        result = 'It is a tie!'

    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'You won!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'You lost!'
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'You lost!'
    }

    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'You won!'
    }

    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'You lost!'
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'You won!'
    }
    resultDisplay.innerHTML = result
}




