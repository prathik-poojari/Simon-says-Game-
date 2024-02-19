let userSeq = [];
let gameSeq = [];
let colors = ["green", "red", "yellow", "blue"];

let started = false;
let level = 0;
let high = 0;

let startBtn = document.querySelector(".start-btn");
let endBtn = document.querySelector(".reset-btn");
let h3 = document.querySelector("h3");

let h2 = document.querySelector("h2");

startBtn.addEventListener("click", function () {
    if (!started) {
        started = true;
        levelUp();

    }

});

endBtn.addEventListener("click",function(){
    console.log("Reset")
    reset();
    h2.innerText ="Press below to start the Game";
});

function levelUp() {
    userSeq = [];
    level++
    h2.innerText = `Level ${level}`;

    let idx = Math.floor(Math.random() * 4);
    let color = colors[idx];
    let randomBtn = document.querySelector(`#${color}`);
    gameSeq.push(color);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function gameFlash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function () {
        btn.classList.remove("gameflash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}
function checkAns(idx) {


    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }

    } else {
        if(level>high){
            high =level;
            h3.innerText = `Your High Score is : ${high}`;
        }
        h2.innerHTML = `Game Over!! </br> your score was <b>${level}</b>`
        reset();
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150)


    }
}
function btnPress() {
    let btn = this;
    userFlash(btn);

    let usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);

    checkAns(userSeq.length - 1);

}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnPress);
}
let highest = document.createElement("h3");


function reset() {
    started = false;
    userSeq = [];
    gameSeq = []
    level =0;
}






