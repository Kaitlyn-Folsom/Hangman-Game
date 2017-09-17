//VARIABLES

var words = ["argentina", "australia", "algeria", "belgium", "brazil",
    "cameroon", "costa rica", "dominican republic", "ethiopia",
    "finland", "guatemala", "greece", "indonesia", "kazakhstan",
    "south korea", "liechtenstein", "madagascar", "morocco", "nicaragua",
    "philippines", "switzerland", "tunisia", "thailand", "ukraine",
    "venezuela", "zimbabwe"
];

var randomWord = "";
var lettersInRandomWord = [];
var numBlanks = 0;
var blankArray = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 0;
var guessesLeft = 9;

// FUNCTIONS 
function startGame() {

    guessesLeft = 9;

    randomWord = words[Math.floor(Math.random() * words.length)];

    lettersInRandomWord = randomWord.split("");

    numBlanks = lettersInRandomWord.length;

    console.log(randomWord);

    //reset guesses
    blankArray = [];
    wrongGuesses = [];

    for (var i = 0; i < numBlanks; i++) {
        blankArray.push("_");
    }

   		 console.log(blankArray);

    document.getElementById("guesses-left").innerHTML = guessesLeft;

    document.getElementById("word-blanks").innerHTML = blankArray.join(" ");

    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

function checkLetters(letter) {

    var letterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (randomWord[i] === letter) {
            letterInWord = true;
        }
    }

    if (letterInWord) {
        for (var j = 0; j < numBlanks; j++) {
            if (randomWord[j] === letter) {
                blankArray[j] = letter;
            }
        }

        console.log(blankArray);
    }
    else {
        wrongGuesses.push(letter);
        guessesLeft--;
    }
}

function roundComplete() {

    console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + guessesLeft);

    document.getElementById("guesses-left").innerHTML = guessesLeft;

    document.getElementById("word-blanks").innerHTML = blankArray.join(" ");

    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

    if (lettersInRandomWord.toString() === blankArray.toString()) {
        winCounter++;
        alert("You win!");

        document.getElementById("wins").innerHTML = winCounter;
        startGame();
    }
    else if (guessesLeft === 0) {
        lossCounter++;
        alert("You lose");

        document.getElementById("losses").innerHTML = lossCounter;
        // Restart the game.
        startGame();
    }
}

// MAIN PROCESS

startGame();

document.onkeyup = function(event) {

    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    checkLetters(letterGuessed);

    roundComplete();
};