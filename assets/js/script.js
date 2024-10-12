//Player Name Editing
function editNames() {
    let player1 = "Player 1";
    let player2 = "Player 2";

    player1 = prompt("Change player 1 Name");
    player2 = prompt("Change player 2 Name");

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
function roolTheDice() {
    let diceNum1 = document.querySelector(".img1");
    let diceNum2 = document.querySelector(".img2");

    diceNum1.setAttribute("src","diceroll.gif");
    diceNum2.setAttribute("src","diceroll.gif");

    let result = document.querySelector('h1');
    setTimeout(() => {
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;

        diceNum1.setAttribute('src','dice'+randomNumber1+'.png');
        diceNum2.setAttribute('src','dice'+randomNumber2+'.png');

        //Determine the winner
        if(randomNumber1 === randomNumber2) {
            result.innerHTML = "Draw!"
        } 
        else if(randomNumber1 > randomNumber2) {
            result.innerHTML = (player1+" WIN!");
        }
        else {
            result.innerHTML = (player2+" WIN!");
        }

    }, 2500);
    
}