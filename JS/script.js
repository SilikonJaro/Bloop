
let score = 0;

let clickCount = 1;
let clickMulti = 1;
const CountPrise = 100;
const MultiPrise = 1000;


function Click() {
    score = score + (clickCount * clickMulti);
    console.log(score);
}

function BuyCount() {
    if (score >= CountPrise ) {
        console.log("buy cound for 10");
        score = score - CountPrise;
        clickCount = clickCount + 1;
    } else {
        console.log("dont have money");
    }
}

function BuyMulti() {
    if (score >= MultiPrise ) {
        console.log("buy multi for 100");
        score = score - MultiPrise;
        clickCount = clickCount + 1;
    } else {
        console.log("dont have money");
    }
}

function PlayMusic() {
    let audio = new Audio("./SOUNDS/ReadyPixelOne.mp3");
    audio.play();
}
