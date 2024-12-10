///////////////////////
////// Variables //////
///////////////////////

let score = 0;

let clickCount = 1;
let clickMulti = 1;
const CountPrice = 100;
const MultiPrice = 500;

let Event01 = false;
let Event02 = false;
let Event03 = false;
let Event04 = false;

let CloseTextMesCount = 1;
const CountMustToClose = 2;

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
    if (score >= 50 && Event01 == false) {
        TextMessage("Yes keep going!!!");
        Event01 = true;
    }
    else if (score >= 500 && Event02 == false) {
        TextMessage("ooh...");
        Event02 = true;
    }

}

////// Events functions //////

function TextMessage(TextM) {
    console.log(TextM);
    RefMessageCont.style.display = "flex";
    RefMessageText.innerHTML = TextM;
}

function CloseTextMessage() {
    if (CloseTextMesCount == CountMustToClose) {
        RefMessageCont.style.display = "none";
        CloseTextMesCount = 0;
    } else {
        CloseTextMesCount = CloseTextMesCount + 1;
    }
}