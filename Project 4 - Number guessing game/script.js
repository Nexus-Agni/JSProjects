let randomNumber = parseInt((Math.random()*100)+1);
console.log(randomNumber);
const submit = document.querySelector("#submitbtn");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector("#guesses");
const remaining = document.querySelector("#lastResult");
const startOver = document.querySelector(".resultParas");
const lowOrHi = document.querySelector("#lowOrHigh"); 

let prevGuess = [];
let playGame = true;
let numGuess = 1; //number of gusses

const p = document.createElement("button");

if (playGame) {
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

// Validation of the guess
function validateGuess(guess) {
    if (guess < 0) {
        alert("Please enter positive value");
    } else if (guess > 100) {
        alert("Please enter value less than 100");
    } else if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else {
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`);
            endGame();
        } else {
            checkGuess(guess);
            displayGuess(guess);
        }
    }
}

// Checking whether guess = random number
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Congratulations you guessed it right`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Your guess is too low`);
    } else {
        displayMessage(`Your guess is too high`);
    }
}
// clearing funtion
function displayGuess(guess) {
    userInput.value = ``;
    guessSlot.innerHTML += `${guess}, `; // previous array
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
    if (11 - numGuess === 0) {
        endGame();
    }
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message} </h2>`;
}
function endGame() {
    userInput.value = ``;
    userInput.setAttribute(`disabled`,``);
    p.classList.add(`button`);
    p.innerHTML = `<h2 id="newGame"> Start New Game </h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener('click', (e)=>{
        randomNumber = parseInt((Math.random()*100)+1);
        prevGuess=[];
        lowOrHi.innerHTML = ``;
        numGuess = 1;
        guessSlot.innerHTML =  ``;
        remaining.innerHTML = `${10 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
}


// let randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber);
// const submit = document.querySelector('#submitbtn');
// const userInput = document.querySelector('#guessField');
// const guessSlot = document.querySelector('#guesses');
// const remaining = document.querySelector('#lastResult');
// const lowOrHi = document.querySelector('#lowOrHigh');
// const startOver = document.querySelector('.resultParas');

// const p = document.createElement('p');

// let prevGuess = [];
// let numGuess = 1;

// let playGame = true;

// if (playGame) {
//   submit.addEventListener('click', function (e) {
//     e.preventDefault();
//     const guess = parseInt(userInput.value);
//     console.log(guess);
//     validateGuess(guess);
//   });
// }

// function validateGuess(guess) {
//   if (isNaN(guess)) {
//     alert('PLease enter a valid number');
//   } else if (guess < 1) {
//     alert('PLease enter a number more than 1');
//   } else if (guess > 100) {
//     alert('PLease enter a  number less than 100');
//   } else {
//     prevGuess.push(guess);
//     if (numGuess === 11) {
//       displayGuess(guess);
//       displayMessage(`Game Over. Random number was ${randomNumber}`);
//       endGame();
//     } else {
//       displayGuess(guess);
//       checkGuess(guess);
//     }
//   }
// }

// function checkGuess(guess) {
//   if (guess === randomNumber) {
//     displayMessage(`You guessed it right`);
//     endGame();
//   } else if (guess < randomNumber) {
//     displayMessage(`Number is TOOO low`);
//   } else if (guess > randomNumber) {
//     displayMessage(`Number is TOOO High`);
//   }
// }

// function displayGuess(guess) {
//   userInput.value = '';
//   guessSlot.innerHTML += `${guess}, `;
//   numGuess++;
//   remaining.innerHTML = `${11 - numGuess} `;
// }

// function displayMessage(message) {
//   lowOrHi.innerHTML = `<h2>${message}</h2>`;
// }

// function endGame() {
//   userInput.value = '';
//   userInput.setAttribute('disabled', '');
//   p.classList.add('button');
//   p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
//   startOver.appendChild(p);
//   playGame = false;
//   newGame();
// //   lowOrHi.innerHTML = '';
// }

// function newGame() {
//   const newGameButton = document.querySelector('#newGame');
//   newGameButton.addEventListener('click', function (e) {
//     randomNumber = parseInt(Math.random() * 100 + 1);
//     lowOrHi.innerHTML = '';
//     prevGuess = [];
//     numGuess = 1;
//     guessSlot.innerHTML = '';
//     remaining.innerHTML = `${11 - numGuess} `;
//     userInput.removeAttribute('disabled');
//     startOver.removeChild(p);

//     playGame = true;
//   });
// }

