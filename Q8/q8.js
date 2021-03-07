var correctLetters = ['F', 'O', 'X'];
var guessedLetters = ['_', '_', '_'];

function guesstheLetter(lett) {
    var ggGuess = false;
    var guessAgain = false;
    for (var i = 0; i < correctLetters.length; i++) {
        if (correctLetters[i] == lett) {
            guessedLetters[i] = lett;
            ggGuess = true;
        }
        if (guessedLetters[i] == '_') {
            guessAgain = true;
        }
    }
    if (ggGuess) {
        console.log('Got one!');
        console.log(guessedLetters.join(''));
        if (!guessAgain) {
            console.log('Victory!!');
        } 
    } else {
        console.log('Try again');
    }
}

guesstheLetter('A');
guesstheLetter('S');
guesstheLetter('D');
guesstheLetter('F');
guesstheLetter('O');
guesstheLetter('X');