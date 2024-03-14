let firstButton = document.querySelector(".first")
let secondButton = document.querySelector(".second")
let thirdButton = document.querySelector(".third")
let fourthButton = document.querySelector(".fourth")
let fivthButton = document.querySelector(".fivth")
let sixthButton = document.querySelector(".sixth")
let seventhButton = document.querySelector(".seventh")
let eigthButton = document.querySelector(".eigth")
let ninthButton = document.querySelector(".ninth")


let currentPlayer = 'X'; 

firstButton.addEventListener("click", () => {
    if (!firstButton.textContent) { 
        firstButton.textContent = currentPlayer
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
});

secondButton.addEventListener("click", () => {
    if (!secondButton.textContent) {
        secondButton.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
});

thirdButton.addEventListener("click", () => {
    if (!thirdButton.textContent) {
        thirdButton.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
});

fourthButton.addEventListener("click", () => {
    if (!fourthButton.textContent) {
        fourthButton.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
});

fivthButton.addEventListener("click", () => {
    if (!fivthButton.textContent) {
        fivthButton.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
});

sixthButton.addEventListener("click", () => {
    if (!sixthButton.textContent) {
        sixthButton.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
});

seventhButton.addEventListener("click", () => {
    if (!seventhButton.textContent) {
        seventhButton.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
});

eigthButton.addEventListener("click", () => {
    if (!eigthButton.textContent) {
        eigthButton.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
});

ninthButton.addEventListener("click", () => {
    if (!ninthButton.textContent) {
        ninthButton.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
});


