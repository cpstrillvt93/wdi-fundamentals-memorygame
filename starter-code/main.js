console.log("JS file is connected to HTML! Woo!")

/*cards*/

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*comparison of variables*/

/*cardOne == cardTwo;
cardOne == cardFour;*/

/*if else checking for equality between two cards*/

if (cardTwo === cardFour){
		alert('Sorry, try again.');

} else if (cardOne === cardThree){
		alert('Sorry, try again.')

} else if (cardOne === cardTwo) {
		alert('You found a match!');

} else if (cardThree === cardFour){
		alert('You found a match');
}



