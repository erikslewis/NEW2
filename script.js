var cardOne = "queen";
var cardtwo = "queen";
var cardthree = "king";
var cardfour = "king";


var cards = ['queen', 'queen', 'king', 'king'];


var cardsInPlay = [];



var board = document.getElementById('game-board');

function createBoard() {

  for (var i=0; i<cards.length; i++) {
   
    var cardElement = document.createElement('div');
  
    cardElement.className = 'card';
	
    
    cardElement.setAttribute('data-card', cards[i]);
		
    cardElement.addEventListener('click', isTwoCards);

    
    board.appendChild(cardElement);
    board.appendChild(cardElement);
  }

}
function isTwoCards() {
  
  cardsInPlay.push(this.getAttribute('data-card'));
	
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='file:///Users/Erik/Fundamentals/git/src/dd17cb0f0e436fa60ace35306478a32d.png'>"; 
	} else {
		this.innerHTML = "<img src='file:///Users/Erik/Fundamentals/git/src/15e43a712ac44407d23c437b0a5b43bc.png'>"; 
	}
 
  if (cardsInPlay.length === 2) {
   
    isMatch(cardsInPlay);
    
    cardsInPlay = [];
  }
}

function isMatch(cards) {
 
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}

createBoard();

/*ards = ['cardOne','cardtwo','cardthree','cardfour'];






var createCards = cards.filter(function(x) {
  for (i = 0; i < cards.length; i++)
  if (x[i]['cardOne'] === cardtwo || x[i]['cardthree'] === cardfour) {
      return cards[i];
  }})*/





  







    
   
  





   




  














// 

/*if (cardOne === cardtwo) {
alert ("You found a match!");
} 
else { 
alert("sorry try again!");
}
if (cardthree === cardfour) {
alert("You found a match!");
}
else {
alert("sorry try again!");
}	*/


