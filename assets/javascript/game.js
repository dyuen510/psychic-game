var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var win=0;
var losses=0;
var numGuess=9;


var computerGuess =letters[Math.floor(Math.random()*letters.length)];
var userGuesses = [];

var numberWins = document.getElementById("winnings");
var guessesLeft = document.getElementById("guessLeft");
var losePoints = document.getElementById("lossPoints");
var guessSoFar = document.getElementById("alreadyGuessed");

function updateDisplays() {
  numberWins.textContent = win;
  guessesLeft.textContent = numGuess;
  losePoints.textContent = losses; 
}

document.onkeyup = function(event) {

  var userGuess = event.key;
  userGuesses.push(userGuess);
  guessSoFar.textContent = userGuesses;

  if (userGuess == computerGuess) {

    win++;
    numGuess = 9
    userGuesses = [];
    computerGuess = letters[Math.floor(Math.random() * letters.length)];

  } else {

    numGuess--;

    if (numGuess == 0) {
      losses++;
      userGuesses = [];
      numGuess = 9;
    }

  }

  updateDisplays();

}


updateDisplays();