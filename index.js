const choosingSymbol = (Img,playerChoice) => {
    if(playerChoice === "rock") {
        Img.src = "rocks.png";
        Img.id = "rock";
        Img.alt = "Rock symbol";
    } else if (playerChoice === "paper") {
        Img.src = "papers.png";
        Img.id = "paper";
        Img.alt = "Paper symbol";
    } else if (playerChoice === "scissors") {
        Img.src = "scissorss.png";
        Img.id = "scissor";
        Img.alt = "Scissors symbol";
    }
}

let compScore = parseInt(localStorage.getItem("compScore")) || 0;
let playerScore = parseInt(localStorage.getItem("playerScore")) || 0;

document.querySelector("#urScore").textContent = playerScore;
document.querySelector("#compScore").textContent = compScore;

document.getElementById("openRules").addEventListener("click", function() {
    document.getElementById("gameRules").classList.toggle("show");
});

document.querySelector(".closeButton").addEventListener("click", function() {
    document.getElementById("gameRules").classList.remove("show");
});

document.querySelector(".next").addEventListener("click", function () {
    document.querySelector("#screen").style.display = "none";
    document.querySelector(".win").style.display = "flex";
});

const choosingYourChoise = (playerChoice) => {
    let playerChoices = document.querySelector(".playerChoices");
    playerChoices.style.display = "none";

    let result = document.querySelector(".result");
    result.style.display = "flex";

    const urImgs = document.getElementsByClassName("urImg");
    choosingSymbol(urImgs[0],playerChoice)
    
    let compChoice = choosingCompChoise();
    winner (playerChoice, compChoice)
}

const choosingCompChoise = () => {
    let results = ["rock","paper","scissors"]
    let compChoice = results[Math.floor(Math.random() * 3)]

    const compImgs = document.getElementsByClassName("compImg");
    choosingSymbol(compImgs[0],compChoice)

    return compChoice;
}

const winner = (playerChoice,compChoice) => {
    if (playerChoice === compChoice) {
        decide("TIE UP")
        document.querySelector(".playAgain").innerText = "REPLAY";
        document.querySelector("#againstPC").style.display = "none";
        document.querySelector(".next").style.display = "none";
        document.querySelector(".ring1").style.borderColor = "transparent" ;
        document.querySelector(".ring2").style.borderColor = "transparent" ;
        document.querySelector(".ring3").style.borderColor = "transparent" ;
        document.querySelector(".ring4").style.borderColor = "transparent" ;
        document.querySelector(".ring5").style.borderColor = "transparent" ;
        document.querySelector(".ring6").style.borderColor = "transparent" ;
    } else if (
        (playerChoice === "rock" && compChoice === "paper") ||
        (playerChoice === "scissors" && compChoice === "rock") ||
        (playerChoice === "paper" && compChoice === "scissors")
    ) {
        decide("YOU LOST")
        updateScore("computer")
        document.querySelector(".playAgain").innerText = "PLAY AGAIN";
        document.querySelector("#againstPC").style.display = "block";
        document.querySelector(".next").style.display = "none";
        document.querySelector(".ring1").style.borderColor = "transparent" ;
        document.querySelector(".ring2").style.borderColor = "transparent" ;
        document.querySelector(".ring3").style.borderColor = "transparent" ;
        document.querySelector(".ring4").style.borderColor = "#3B6720" ;
        document.querySelector(".ring5").style.borderColor = "#1DA82BC9" ;
        document.querySelector(".ring6").style.borderColor = "#2E9A2563" ;
    } else {
        decide("YOU WIN")
        updateScore("player")
        document.querySelector(".playAgain").innerText = "PLAY AGAIN";
        document.querySelector("#againstPC").style.display = "block";
        document.querySelector(".next").style.display = "block";
        document.querySelector(".ring4").style.borderColor = "transparent" ;
        document.querySelector(".ring5").style.borderColor = "transparent" ;
        document.querySelector(".ring6").style.borderColor = "transparent" ;
        document.querySelector(".ring1").style.borderColor = "#3B6720" ;
        document.querySelector(".ring2").style.borderColor = "#1DA82BC9" ;
        document.querySelector(".ring3").style.borderColor = "#2E9A2563" ;
        document.querySelector(".rules").style.left = "80vh";
        document.querySelector(".next").style.left = "80vh";
    }
}

const decide = (decision) => {
    document.querySelector(".answer").innerText = decision;
}

function updateScore(winner) {
    if (winner === "player") {
        playerScore++;
        document.querySelector("#urScore").textContent = playerScore;
        localStorage.setItem("playerScore", playerScore);
    } else if (winner === "computer") {
        compScore++;
        document.querySelector("#compScore").textContent = compScore;
        localStorage.setItem("compScore", compScore);
    }
}

const playAgain = () => {
    let playerChoices = document.querySelector(".playerChoices");
    playerChoices.style.display = "flex";

    document.querySelector(".result").style.display = "none";
    document.querySelector(".next").style.display = "none";
    document.querySelector(".win").style.display = "none";
    document.querySelector("#screen").style.display = "flex";
}