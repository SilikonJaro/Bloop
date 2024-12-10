///////////////////////
////// Variables //////
///////////////////////

let score = 0;

let clickCount = 1;
let clickMulti = 1;
const CountPrice = 100;
const MultiPrice = 500;

const audio = new Audio("./SOUNDS/ReadyPixelOne.mp3");
const RefScoreText = document.getElementById("Score");

const RefMessageText = document.getElementById("MessageText");
const RefMessageCont = document.getElementById("MessageCont");

///////////////////////
////// Functions //////
///////////////////////

function PlayMusic() {
    audio.play();
}

/// Buttons functions ///

function Click() {
    score = score + (clickCount * clickMulti);
    console.log(score);
    UpdateScore();
    EventCheckCount();
}

function BuyCount() {
    if (score >= CountPrice ) {
        console.log("buy cound for 100");
        score = score - CountPrice;
        clickCount = clickCount + 1;
        UpdateScore();
        UpdatePriceCount();
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

/// Update score text ///

function UpdateScore() {
    RefScoreText.innerHTML = "Money " + score;
}

/// Check score to run event ///

function EventCheckCount() {
    switch (score) {
        case 2:
            TextMessage("LOWPlOP");
          break;
        case 5:
            console.log("5 event");
          break;
        default:
            console.log("No event");
    }
}

////// Events functions //////

function TextMessage(TextM) {
    console.log(TextM);
    RefMessageCont.style.display = "flex";
    RefMessageText.innerHTML = TextM;
}