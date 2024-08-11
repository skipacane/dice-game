function rollDice() {

    var randomNum1 = Math.floor(Math.random() * 6) + 1;
    var randomNum2 = Math.floor(Math.random() * 6) + 1;

    
    // Update dice 1
    var dice1 = document.querySelector("#dice-1 img");
    dice1.setAttribute("src", `assets/dice-${randomNum1}-solid.svg`);

    // Update dice 2
    var dice2 = document.querySelector("#dice-2 img");
    dice2.setAttribute("src", `assets/dice-${randomNum2}-solid.svg`);
    } 