// Show next screen
function nextScreen(screenNumber) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById("screen-" + screenNumber).classList.add("active");

    if(screenNumber === 6){
        typeLetter();
    }
}


// Open gift
function unwrapGift(){

    document.getElementById("gift-lid").classList.add("open");

    setTimeout(()=>{
        nextScreen(6);
    },1200);

}


// Replay
function resetApp(){

    document.querySelectorAll(".screen").forEach(screen=>{
        screen.classList.remove("active");
    });

    document.getElementById("screen-1").classList.add("active");

    document.getElementById("typed-text").innerHTML = "";

    letterIndex = 0;

    count = 0;

    // Restore all candle flames
    document.querySelectorAll(".candle").forEach(candle => {

        if(!candle.querySelector(".flame")){

            let flame = document.createElement("div");
            flame.className = "flame";
            candle.appendChild(flame);
        }
    });

    // Hide celebration
    let celebration = document.getElementById("celebration");

    if(celebration){
        celebration.style.display = "none";
    }

    document.getElementById("gift-lid")?.classList.remove("open");
}



// Typing Effect
const letterMessage = `

Happy Birthday Kinza ❤️

Today is all about celebrating YOU.

Thank you for bringing happiness, smiles and beautiful memories into my life.

May this year bring you endless happiness, success and everything your heart wishes for.

Stay the same beautiful person you are.

Always keep smiling.

Happy Birthday once again! 🎂💖

- From Ahmii ❤️

`;

let letterIndex = 0;

function typeLetter(){

    const box = document.getElementById("typed-text");

    if(!box || box.innerHTML !== "") return;

    function type(){

        if(letterIndex < letterMessage.length){

            box.innerHTML += letterMessage.charAt(letterIndex);

            letterIndex++;

            setTimeout(type,35);
        }
    }

    type();
}

function goToCake(){

    document.body.classList.add("page-exit");

    setTimeout(()=>{
        window.location.href="cake.html";
    },600);

}

// ===== YES / NO BUTTON =====

window.addEventListener("DOMContentLoaded", function () {

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const box = document.querySelector(".button-box");

    if (!yesBtn || !noBtn || !box) return;

    yesBtn.addEventListener("click", function () {
        window.location.href = "birthday.html";
    });

    function moveButton() {

        const maxX = box.clientWidth - noBtn.offsetWidth;
        const maxY = box.clientHeight - noBtn.offsetHeight;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
    }

    // Desktop
    document.addEventListener("mousemove", function (e) {

        const rect = noBtn.getBoundingClientRect();

        if (
            e.clientX > rect.left - 70 &&
            e.clientX < rect.right + 70 &&
            e.clientY > rect.top - 70 &&
            e.clientY < rect.bottom + 70
        ) {
            moveButton();
        }
    });

    // Mobile
    noBtn.addEventListener("touchstart", function (e) {
        e.preventDefault();
        moveButton();
    });

});