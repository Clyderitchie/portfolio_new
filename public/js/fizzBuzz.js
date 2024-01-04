// Retrieving Local Storage
let score = parseInt(localStorage.getItem('score')) || 0;
let scores = JSON.parse(localStorage.getItem('scores')) || [];

// Global Variables
let searchEl = document.querySelector('#userSearch');
let inputEl = document.querySelector('#userInput');
let startBtn = document.querySelector('#startBtn');
let numberEl = document.querySelector('#numberInput');
let highscoreEl = document.querySelector('#highscore');
let scoreListEl = document.querySelector('#highscoreList');
let fizz = document.querySelector('#fizzBtn');
let buzz = document.querySelector('#buzzBtn');
let fizzBuzz = document.querySelector('#fizzBuzzBtn');
let nothing = document.querySelector('#nothingBtn');
let scoreEl = document.querySelector('#score');
let randomNumber = Math.floor(Math.random() * 1000);
let selectedBtn = '';
let timer = 60;
let countdown;

// Function calls
answerBtns();
renderScores();

// Buttons/ Event listeners
startBtn.addEventListener('click', startTimer);
startBtn.addEventListener('click', () => {
    randomNumbers();

});

// Functions
function randomNumbers() {
    if (randomNumber % 15 === 0) {
        console.log('fizzBuzz');
    } else if (randomNumber % 3 === 0) {
        console.log('fizz');
    } else if (randomNumber % 5 === 0) {
        console.log('buzz');
    } else {
        console.log('nothing');
    }

    document.querySelector('#numberInput').innerHTML = randomNumber;
    return randomNumber;
}

function startTimer() {
    countdown = setInterval(() => {
        timer--;
        if (timer <= 0) {
            clearInterval(countdown);
            document.querySelector('#numberInput').innerHTML = 'Game Over'
            startBtn.disabled = true;
            saveScore();
        }

        document.querySelector('#timer').textContent = `Time left: ${timer} seconds`;
    }, 1000);
}

function answerBtns() {

    const fizzAnswer = fizz.addEventListener('click', function (event) {
        event.preventDefault();
        selectedBtn = 'fizz';
        compareAnswers();
        console.log(selectedBtn);
    })

    const buzzAnswer = buzz.addEventListener('click', function (event) {
        event.preventDefault();
        selectedBtn = 'buzz';
        compareAnswers();
        console.log(selectedBtn);
    })

    const fizzBuzzAnswer = fizzBuzz.addEventListener('click', function (event) {
        event.preventDefault();
        selectedBtn = 'fizzBuzz'
        compareAnswers();
        console.log(selectedBtn);
    })

    const nothingAnswer = nothing.addEventListener('click', function (event) {
        event.preventDefault();
        selectedBtn = 'nothing';
        compareAnswers();
        console.log(selectedBtn);
    })

}

function compareAnswers() {
    if (selectedBtn === 'fizzBuzz' && randomNumber % 15 === 0) {
        score += 1;
    } else if (selectedBtn === 'fizz' && randomNumber % 3 === 0) {
        score += 1;
    } else if (selectedBtn === 'buzz' && randomNumber % 5 === 0) {
        score += 1;
    } else if (selectedBtn === 'nothing' && randomNumber % 3 != 0 && randomNumber % 5 != 0 && randomNumber % 15 != 0) {
        score += 1;
    }
    console.log(score);
    scoreEl.textContent = `Score: ${score}`;
    randomNumber = Math.floor(Math.random() * 1000);
    document.querySelector('#numberInput').textContent = randomNumber;
}

function saveScore() {
    const newScore = { in: "CR", score }
    scores.push(newScore)
    scores.sort((a, b) => b.score - a.score);
    scores = scores.slice(0, 5);

    // highscoreEl.textContent = `High Scores:`

    renderScores();
    localStorage.setItem('scores', JSON.stringify(scores));
}

function renderScores() {
    scoreListEl.innerHTML = '';
    scores.forEach((score, index) => {
        const li = document.createElement('li');
        li.textContent = score.score;
        scoreListEl.appendChild(li);
    });

    highscoreEl.appendChild(scoreListEl);
}

