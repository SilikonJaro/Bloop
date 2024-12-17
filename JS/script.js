///////////////////////
////// Variables //////
///////////////////////

let score = 0;

let clickCount = 1;
let clickMulti = 1;
const CountPrice = 125;
const MultiPrice = 999;

let CloseTextMesCount = 1;
const CountMustToClose = 2;

/// Events state machine ///
let Event01 = false;
let Event02 = false;
let Event03 = false;
let Event04 = false;

/// References ///
const audio = new Audio("./SOUNDS/ReadyPixelOne.mp3");

const RefScoreText = document.getElementById("Score");
const RefCountText = document.getElementById("Count");
const RefMultiText = document.getElementById("Multi");

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
    //EventCheckCount(); //Its slow not good :(
}

function BuyCount() {
    if (score >= CountPrice ) {
        console.log("Buy cound for "+ CountPrice);
        score = score - CountPrice;
        clickCount = clickCount + 1;
        UpdateScore();
        UpdateCount();
    } else {
        console.log("Dont have enough money");
        UpdateCount();
    }
}

function BuyMulti() {
    if (score >= MultiPrice ) {
        console.log("Buy multi for " + MultiPrice);
        score = score - MultiPrice;
        clickMulti = clickMulti + 1;
        UpdateScore();
        UpdateMulti();
    } else {
        console.log("Dont have enough money");
        UpdateMulti();
    }
}

/// Update score text ///

// Score
function UpdateScore() {
    RefScoreText.innerHTML = "Money " + score;
}

// Count
function UpdateCount() {
    RefCountText.innerHTML = "Count " + clickCount;
}

// Multi
function UpdateMulti() {
    RefMultiText.innerHTML = "Multi " + clickMulti;
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