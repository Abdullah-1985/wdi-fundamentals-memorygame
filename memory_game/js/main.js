console.log("Up and running!");
var cards = ["queen", "queen", "king","king"]

var cardOne = cards[0];
var cardTwo = cards[1];
var cardThree = cards[2];
var cardFour = cards[3];


var cardsInPlay = [];
function flipCard(cardId)
{
    cardsInPlay.push(cards[cardId])
    console.log("User flipped" + cards[cardId].rank)
}

function checkForMatch(){
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
        } else {
        console.log("Sorry, try again.");
        }
}

flipCard(0);
flipCard(1);
checkForMatch();

var cards=[
    {
    rank:"queen",
    suit:"hearts",
    cardImage:"images/queen-of-hearts.png"
    },
    {
    rank:"queen",
    suit:"diamonds",
    cardImage:"images/queen-of-diamonds.png"
    },
    {
    rank:"king",
    suit:"hearts",
    cardImage:"images/king-of-hearts.png"
    },
    {
    rank:"king",
    suit:"diamonds",
    cardImage:"images/king-of-diamonds.png"
    }
    ];