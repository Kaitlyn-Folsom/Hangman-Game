
var words =["Argentina", "Australia", "Algeria", "Belgium", "Brazil",
						"Cameroon", "Costa Rica", "Dominican Republic", "Ethiopia", 
						"Finland", "Guatemala", "Greece", "Indonesia", "Kazakhstan", 
						"South Korea", "Liechtenstein", "Madagascar", "Morocco", "Nicaragua", 
						"Philippines", "Switzerland", "Tunisia", "Thailand", "Ukraine", 
						"Venezuela", "Zimbabwe"];

	console.log(words);

var answerArray = ["_", "_", "_", "_", "_", "_", "_", "_", ];
var lettersGuessed = [];
var guessesLeft = 8;

var answerString;

var chosenWord = words[Math.floor(Math.random() * words.length)];

	console.log(chosenWord);

document.onkeyup = function(event) {

	var userGuess = event.key;

	console.log(userGuess);
	

	(function () {
		for (var j = 0; j < chosenWord.length; j++) {
		if (chosenWord[j] === userGuess) {
 			answerArray[j] = userGuess;
 		}
	}
	answerString = answerArray.join(' ');
	console.log("answerString: ",answerString.length);
	console.log('answerArray: ',answerArray.length);
}());

	if (lettersGuessed.indexOf(userGuess) < 0 && chosenWord.indexOf(userGuess) >= 0) {
          lettersGuessed[lettersGuessed.length]=userGuess;
          guessesLeft--;
        }

    if (chosenWord == userGuess) {
          guessesLeft = 8;
          guessesMade = [];
          chosenWord = words[Math.floor(Math.random() * words.length)];
         }

    if (guessesLeft == 0) {
          guessesLeft = 10;
          guessesMade = [];
          chosenWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        }

	var targetDiv = document.getElementById("country");
	targetDiv.innerHTML = answerString;
    
    var guessesMadeDisplay = document.getElementById("letters-guessed");
        guessesMadeDisplay.innerHTML = lettersGuessed;

    var guessesLeftDisplay = document.getElementById("remaining-guesses");
        guessesLeftDisplay.innerHTML = guessesLeft;
}	


//
    

   





