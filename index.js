const result = document.querySelector(".result")

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playerScore = document.querySelector("#player-score")
const machineScore = document.querySelector("#machine-score")
let playerPoints = 0
let machinePoints = 0

const rockBtn = document.querySelector(".rock")
const paperBtn = document.querySelector(".paper")
const scissorsBtn = document.querySelector(".scissors")

const clickPlayer = (ev) => {
    animationPlayer(ev)
    setTimeout(() => {
        playingGame(ev, clickMachine())
    }, 1000)
}

const clickMachine =  () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomChoice = Math.floor(Math.random() * 3)
    return choices[randomChoice]
}

const playingGame = (player, machine) => {
    animationMachine(machine)

    setTimeout(() => {
        winnerGame(player, machine)
    }, 1800);
}

const animationPlayer = (player) => {
    if (player == rockBtn.value) {
        setTimeout(() => {
            rockBtn.classList.add("selected")
        }, 100);
    } else if (player == paperBtn.value) {
        setTimeout(() => {
            paperBtn.classList.add("selected")
        }, 100);
    } else if (player == scissorsBtn.value) {
        setTimeout(() => {
            scissorsBtn.classList.add("selected")
        }, 100);
    } else {
    }
    setTimeout(() => {
        rockBtn.classList.remove("selected")
        paperBtn.classList.remove("selected")
        scissorsBtn.classList.remove("selected")
    }, 800);
}

const animationMachine = (machine) => {
    if (machine == rockBtn.value) {
        setTimeout(() => {
            rockBtn.classList.add("selected-machine")
        }, 500);
    } else if (machine == paperBtn.value) {
        setTimeout(() => {
            paperBtn.classList.add("selected-machine")
        }, 500);
    } else if (machine == scissorsBtn.value) {
        setTimeout(() => {
            scissorsBtn.classList.add("selected-machine")
        }, 500);
    } else {
    }
    setTimeout(() => {
        rockBtn.classList.remove("selected-machine")
        paperBtn.classList.remove("selected-machine")
        scissorsBtn.classList.remove("selected-machine")
    }, 1300);
}

const winnerGame = (player, machine) => {
    if(player == machine) {
        result.innerText = "Empate!"
    } else if (
        (player == GAME_OPTIONS.PAPER && machine == GAME_OPTIONS.ROCK) ||
        (player == GAME_OPTIONS.ROCK && machine == GAME_OPTIONS.SCISSORS) ||
        (player == GAME_OPTIONS.SCISSORS && machine == GAME_OPTIONS.PAPER)) {
            result.innerText = "Você venceu! 🎉"
            playerPoints++
            playerScore.innerText = playerPoints
    } else {
        result.innerText = "A máquina venceu! 😑"
        machinePoints++
        machineScore.innerText = machinePoints
    }
    setTimeout(() => {
        result.innerText = ""
    }, 1000);
}

