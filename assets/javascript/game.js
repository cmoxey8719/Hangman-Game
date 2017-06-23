
// declaring variables
	var numberGuess = 9;
	var wins= 0;
	var	rightGuess = 0;
	var newWord = [];
	var guessUsed = [];
	var start = [];
	var choosenWord = [];
	var library = ["skywalker", "vader", "obiwan", "ackbar", "yoda"];
	var thatWord = document.getElementById("currentWord");
	var thatNumb = document.getElementById("numGuess");
	var anotherWord = document.getElementById("guessedWord");
	var winnerWord = document.getElementById("victory");


	//Will return array (chooseWord[]) that has the words broken down to the letters
	function makeWord(){
		for(var i = 0; i < library.length; i++){
			newWord[i] = library[i].split("");
		}
	
		//randomly chose one of the words from library
		var ranNum = Math.floor(Math.random() * library.length);
		choosenWord = newWord[ranNum];
	}
	
	// shows the "-" for each letter from the start.
	function setdash(){
		for(i = 0; i < choosenWord.length; i++){
			start[i] = " - ";
		}
	}

	function resetGame() {
		numberGuess = 12;
		rightGuess = 0;
		guessUsed.length = 0;
		start = [];
		makeWord();
		setdash();
	}

	function pressKey(event){ //everything that happens after key press in this
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    for(var i = 0; i < choosenWord.length; i++){
    	if(userGuess === choosenWord[i]){
    		start[i] = userGuess;
			rightGuess++;
    	}
    }
    numberGuess--; // decrements from guesses
    guessUsed.push(userGuess); // adds to usedGuess array

    winnerWord.innerHTML = wins;
	thatWord.innerHTML = start.join(' ');
	thatNumb.innerHTML = numberGuess;
	anotherWord.innerHTML = guessUsed;

    console.log(guessUsed);
    console.log(rightGuess);
	console.log(start);

	if(rightGuess === choosenWord.length){
		wins++;
		resetGame();
		console.log(start);

	}
	else if(numberGuess === 0){
		resetGame();
		alert("Captain! She has gone from suck to blow!")
	}
	}

	document.onkeyup = pressKey;
	makeWord(library);
	setdash(choosenWord);
	



