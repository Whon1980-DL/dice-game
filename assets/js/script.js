//Player name has to be global variabless as they 
//need to be reassigned in the rollTheDice function
let player1 = "Player 1";
let player2 = "Player 2";

//player Nmae editing
function editNames() {
    player1 = prompt("Change player 1 Name");

    if (player1.length > 11) {
        alert("Player name must be no longer than 11 characters, Please Try Again");
        player1 = prompt("Change player 1 Name");
    } 

    player2 = prompt("Change player 2 Name");

    if (player2.length > 11) {
        alert("Player name must be no longer than 11 characters, Please Try Again");
        player2 = prompt("Change player 2 Name");
    } 
        
    if (player2.length > 11) {
        alert("Player name must be no longer than 11 characters, Please Try Again");
    } 

    if(player1.length < 1 || player2.length < 1 ) {
        alert("please enter valid name")
        return;
    }
    document.querySelector("p.player1")
        .innerHTML = player1;

    document.querySelector("p.player2")
        .innerHTML = player2;
}

//Dice rolling 
function rollTheDice() {
    let diceNum1 = document.querySelector(".img1");
    let diceNum2 = document.querySelector(".img2");

    diceNum1.setAttribute("src","assets/image/diceroll.gif");
    diceNum2.setAttribute("src","assets/image/diceroll.gif");

    let result = document.querySelector('h1');
    result.innerHTML = ""
    setTimeout(() => {
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;

        diceNum1.setAttribute('src','assets/image/dice' + randomNumber1 + '.png');
        diceNum2.setAttribute('src','assets/image/dice' + randomNumber2 + '.png');

        //Determine the winner
        if (randomNumber1 === randomNumber2) {
            result.innerHTML = "Draw!"
        } 
        else if (randomNumber1 > randomNumber2) {
            result.innerHTML = (player1 + " WIN!");
        }
        else {
            result.innerHTML = (player2 + " WIN!");
        }

    }, 1000);
    
}