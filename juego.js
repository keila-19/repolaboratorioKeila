// juego.js
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit-guess");
const message = document.getElementById("message");
const resetButton = document.getElementById("reset");

submitButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", resetGame);

function checkGuess() {
    const userGuess = parseInt(guessInput.value);
    attempts++;
    
    if (userGuess === randomNumber) {
        message.textContent = `¡Correcto! Lo adivinaste en ${attempts} intentos.`;
        message.style.color = "green";
        resetButton.style.display = "inline-block";
        submitButton.disabled = true;
    } else if (userGuess < randomNumber) {
        message.textContent = "Demasiado bajo. Intenta de nuevo.";
        message.style.color = "orange";
    } else if (userGuess > randomNumber) {
        message.textContent = "Demasiado alto. Intenta de nuevo.";
        message.style.color = "orange";
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessInput.value = '';
    message.textContent = '';
    submitButton.disabled = false;
    resetButton.style.display = "none";
}
