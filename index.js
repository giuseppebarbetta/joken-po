const result = document.querySelector(".result")

const playerScore = document.querySelector("#player-score")
const machineScore = document.querySelector("#machine-score")
let playerPoints = 0
let machinePoints = 0

const rockBtn = document.querySelector(".rock")
const paperBtn = document.querySelector(".paper")
const scissorsBtn = document.querySelector(".scissors")

const clickPlayer = (ev) => {
    playingGame(ev, clickMachine()) 
}

const clickMachine =  () => {
    const choices = ["rock", "paper", "scissors"]
    const randomChoice = Math.floor(Math.random() * 3)
    return choices[randomChoice]
}

const playingGame = (player, machine) => {

    if (machine == rockBtn.value) {
        setTimeout(() => {
            rockBtn.classList.add("selected")
        }, 800);
    } else if (machine == paperBtn.value) {
        console.log("olá paper")
        setTimeout(() => {
            paperBtn.classList.add("selected")
        }, 800);
    } else if (machine == scissorsBtn.value) {
        setTimeout(() => {
            scissorsBtn.classList.add("selected")
        }, 800);
    } else {
    }
    setTimeout(() => {
        rockBtn.classList.remove("selected")
        paperBtn.classList.remove("selected")
        scissorsBtn.classList.remove("selected")
    }, 1700);

    setTimeout(() => {
        winnerGame(player, machine)
    }, 1800);
}

const winnerGame = (player, machine) => {
    if(player == machine) {
        result.innerText = "Empate!"
    } else if (
        (player == "paper" && machine == "rock") ||
        (player == "rock" && machine == "scissors") ||
        (player == "scissors" && machine == "paper")) {
            result.innerText = "Você venceu!"
            playerPoints++
            playerScore.innerText = playerPoints
    } else {
        result.innerText = "A máquina venceu!"
        machinePoints++
        machineScore.innerText = machinePoints
    }
    setTimeout(() => {
        result.innerText = ""
    }, 1000);
}

