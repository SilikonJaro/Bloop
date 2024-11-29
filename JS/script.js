
let score = 0;

let clickCount = 1;
let clickMulti = 1;

function Click() {
    score = score + (clickCount * clickMulti);
    console.log(score);
}

function PlayMusic() {
    let audio = new Audio("./SOUNDS/ReadyPixelOne.mp3");
    audio.play();
}
