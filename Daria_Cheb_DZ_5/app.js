let $coinCount = document.getElementById("coin-count");
let $energyCount = document.getElementById("energy-count");

let $clickerButton = document.querySelector("#clicker");
let $resetButton = document.querySelector("#reset");

let coins = 0;
let energy = 10;

function updateDisplay() {
    $coinCount.innerText = coins;
    $energyCount.innerText = energy;
    $clickerButton.disabled = energy <= 0;
    $clickerButton.style.opacity = energy > 0 ? "1" : "0.5";
}

$clickerButton.addEventListener("click", function () {
    if (energy > 0) {
        coins += 5; 
        energy--;   
        updateDisplay();
    }
});

$resetButton.addEventListener("click", function () {
    coins = 0;
    energy = 10; 
    updateDisplay();
});

updateDisplay();