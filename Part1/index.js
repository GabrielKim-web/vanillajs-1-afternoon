//No matter what, a normal game of TicTacToe is 3x3, or 9 squares.
let status = ["", "", "", "", "", "", "", "", ""];
let turn = 1;
function play(clickedId) {
    //remember that clickedID is a number, not a string
    let clickedElement = document.getElementById(clickedId);
    let changeName = document.getElementById("player");
    /*checks to see if the box is unoccupied or not, then ends the function if
    the box is occupied (the player's turn is not skipped, however) */
    if (status[clickedId] !== "") {
        alert("That square is occupied!")
        return undefined;
    }
    if (changeName.innerText === "X") {
        changeName.innerText = "O";
        clickedElement.innerText = "X";
        status[clickedId] = "X";
    } else {
        changeName.innerText = "X";
        clickedElement.innerText = "O";
        status[clickedId] = "O";
    }
    // console.log(status);

    /* There are 8 different ways to win. If we referenced by ID, that would be:
    012, 345, 678, 036, 147, 258, 048, 246.
    1. Check array for X's and O's.
    2. If those elements above all match, declare winner. */
    //Checks status array after each square is clicked.
    function isWinner(piece) {
        //Checks which ID space has which player's piece.
        let spaceId = [...status]
        if (spaceId[0] === spaceId[1] && spaceId[0] === spaceId[2]) {
            if (spaceId[0] !== "") {
                return true;
            }
        }
        if  (spaceId[3] === spaceId[4] && spaceId[3] === spaceId[5]) {
            if (spaceId[3] !== ""){
                return true;
            }
        }
        if  (spaceId[6] === spaceId[7] && spaceId[6] === spaceId[8]) {
            if (spaceId[6] !== ""){
                return true;
            }
        }
        if  (spaceId[0] === spaceId[3] && spaceId[0] === spaceId[6]) {
                if (spaceId[0] !== ""){
                    return true;
                }
            }
        if  (spaceId[1] === spaceId[4] && spaceId[1] === spaceId[7]) {
                if (spaceId[1] !== ""){
                    return true;
                }
            }
        if  (spaceId[2] === spaceId[5] && spaceId[2] === spaceId[8]) {
                if (spaceId[2] !== ""){
                    return true;
                }
            }
        if  (spaceId[0] === spaceId[4] && spaceId[0] === spaceId[8]) {
                if (spaceId[0] !== ""){
                    return true;
                }
            }
        if  (spaceId[2] === spaceId[4] && spaceId[2] === spaceId[6]) {
                if (spaceId[2] !== "") {
                    return true;
                }
            }
        console.log(spaceId);
        //How do I compare IDs with winning combinations?
    }   

    function boardFull() {
        turn++;
        console.log(`turn ${turn}`);
        if (turn === 10) {
            return true;
        } else {
            return false;
        }
    }

    //checks if the player who just moved won by invoking isWinner function
    if (isWinner(clickedElement.innerText)) {
        alert(`Player ${clickedElement.innerText} wins!`);
        resetGame();
    } else if (boardFull()) {
        alert("It's a cats game. (Not surprising.)");
        resetGame();
    }
    else {
        console.log(`${clickedElement.innerText} just occupied space ${clickedId}!`);
        return changeName.innerText;
    }
}

function resetGame() {
    document.location.reload(true);
}