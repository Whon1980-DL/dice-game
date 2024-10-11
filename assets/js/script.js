//player Name 
let player1 = "Player 1";
let player2 = "Player 2";

function editNames() {
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
