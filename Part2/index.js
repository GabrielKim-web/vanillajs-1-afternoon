console.dir(document.styleSheets);
let identification = document.getElementById("idInput");
let color = document.getElementById("colorInput");
// console.log(identification + color);

function setCard() {
    card = document.getElementById(idInput.value);
    if (idInput.value == "diamonds" || idInput.value == "clubs" || 
        idInput.value == "hearts" || idInput.value == "spades") {
            if (idInput.value == "diamonds" || idInput.value == "hearts") {
                // card.style.color = "red";
                card.style.color = colorInput.value;
                console.log(card);
            }
            else {
                // card.style.color = "black";
                card.style.color = colorInput.value;
                console.log(card);
            }
        }
    else {
        console.log("Need a proper suit: diamonds, clubs, hearts, or spades.");
        return undefined;
    }
}

function reset() {
    //There's gotta be an easier way to do this.
    // let reset = document.getElementById("diamonds")
    // reset.style.color = "grey";
    // reset = document.getElementById("clubs")
    // reset.style.color = "grey";
    // reset = document.getElementById("hearts")
    // reset.style.color = "grey";
    // reset = document.getElementById("spades")
    // reset.style.color = "grey";

    let reset = document.getElementsByTagName("section");
    //rather than being dry, for loop them all!
    for (i = 0; i < reset.length; i++) {
        reset[i].style.color = "grey";
    }
}