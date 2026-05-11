let won = 0;
let lost = 0;
let tied = 0;

function rockChoosen() {
    const randomMove = Math.random();
    const result = document.querySelector(".result");

    if (randomMove < 1 / 3) {
        result.innerText = "You chose ROCK 🪨 — Computer chose ROCK 🪨 | TIE";
        tied++;
    } else if (randomMove < 2 / 3) {
        result.innerText = "You chose ROCK 🪨 — Computer chose PAPER 📄 | YOU LOST";
        lost++;
    } else {
        result.innerText = "You chose ROCK 🪨 — Computer chose SCISSORS ✂️ | YOU WON";
        won++;
    }
}


function paperChoosen() {
    const randomMove = Math.random();
    const result = document.querySelector(".result");

    if (randomMove < 1 / 3) {
        result.innerText = "You chose PAPER 📄 — Computer chose ROCK 🪨 | YOU WON";
        won++;
    } else if (randomMove < 2 / 3) {
        result.innerText = "You chose PAPER 📄 — Computer chose PAPER 📄 | TIE";
        tied++;
    } else {
        result.innerText = "You chose PAPER 📄 — Computer chose SCISSORS ✂️ | YOU LOST";
        lost++;
    }
}

function scissorsChoosen() {
    const randomMove = Math.random();
    const result = document.querySelector(".result");

    if (randomMove < 1 / 3) {
        result.innerText = "You chose SCISSORS ✂️ — Computer chose ROCK 🪨 | YOU LOST";
        lost++;
    } else if (randomMove < 2 / 3) {
        result.innerText = "You chose SCISSORS ✂️ — Computer chose PAPER 📄 | YOU WON";
        won++;
    } else {
        result.innerText = "You chose SCISSORS ✂️ — Computer chose SCISSORS ✂️ | TIE";
        tied++;
    }
}


function statData() {
    const display = document.querySelector(".stats");
    display.innerHTML = `
        <p>You had won ${won} times</p>
        <p>You had lost ${lost} times</p>
        <p>You had ties with computer ${tied} times</p>
    `;
}
