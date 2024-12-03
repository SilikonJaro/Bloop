///////////////////////
////// Variables //////
///////////////////////

let score = 0;

let clickCount = 1;
let clickMulti = 1;
const CountPrice = 100;
const MultiPrice = 1000;

const audio = new Audio("./SOUNDS/ReadyPixelOne.mp3");
const ScoreText = document.getElementById("Score")

///////////////////////
////// Functions //////
///////////////////////

function PlayMusic() {
    let audio = new Audio("./SOUNDS/ReadyPixelOne.mp3");
    audio.play();
}

/// Buttons functions ///

function Click() {
    score = score + (clickCount * clickMulti);
    console.log(score);
    UpdateScore();
    PlayMusic();
}

function BuyCount() {
    if (score >= CountPrice ) {
        console.log("buy cound for 100");
        score = score - CountPrice;
        clickCount = clickCount + 1;
        UpdateScore();
    } else {
        console.log("dont have money");
    }
}

function BuyMulti() {
    if (score >= MultiPrice ) {
        console.log("buy multi for 1000");
        score = score - MultiPrice;
        clickCount = clickCount + 1;
        UpdateScore();
    } else {
        console.log("dont have money");
    }
}

/// Update text ///

function UpdateScore() {
    ScoreText.innerHTML = "Money " + score;
}