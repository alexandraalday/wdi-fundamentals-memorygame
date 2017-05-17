
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

//Add first card user flipped to cardsInPlay array and display to console
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped" + " " + cardOne);

//Add next card user flipped to cardsInPlay array and display to console
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped" + " " + cardTwo);

//Check if user played two equal cards
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1] ) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.")
	}
}
