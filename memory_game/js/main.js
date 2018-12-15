console.log("Up and running!");
var cards = ["queen", "queen", "king","king"]

var cardOne = cards[0];
var cardTwo = cards[1];
var cardThree = cards[2];
var cardFour = cards[3];


var cardsInPlay = [];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
if(cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
}
else
{
    alert("Sorry, try agin");

}

console.log("User flipped " + cardOne);
