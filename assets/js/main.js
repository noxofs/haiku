// main.js

let grid = document.querySelectorAll(".grid-container");
let divs = document.querySelectorAll(".grid-container div");

function randomize() {
    console.log(divs.length, "randomize!")

    // affects the whole grid
    grid[0].style.transform = `rotate(${Math.random() * 360}deg)`;

    // just the grid divs
    divs.forEach(function (div) {
        let scale = randomNumber(.5, 1.2);
        let translateX = randomNumber(0, 50);
        let translaetY = randomNumber(0, 20);
    }
    )
}


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

