
// declaring variables
	var numberGuess = 13;
	var wins= 0;
	var	rightGuess = 0;
	var newWord = [];
	var guessUsed = [];
	var start = [];
	var choosenWord = [];

	//library of useable words for the game
	var library = ["skywalker", "vader", "obiwan", "ackbar", "yoda"];

	//
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

	// reset the game
	function resetGame() {
		numberGuess = 12;
		rightGuess = 0;
		guessUsed = [];
		start = [];
		userGuess = [];
		makeWord();
		setdash();
	}

	//when a key is pressed, it checks to see if any of the letters are in the word
	function pressKey(event){ 
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    for(var i = 0; i < choosenWord.length; i++){
    	if(userGuess === choosenWord[i]){
    		start[i] = userGuess;
			rightGuess++;
		}
    }
    numberGuess--;
    guessUsed.push(userGuess);

	if(rightGuess === choosenWord.length){
		wins++;
		resetGame();
	}
	if(numberGuess < 1){
		alert("Once you start down the dark side, forever will it dominate your destiny. - Yoda");
		resetGame();
	}	

    winnerWord.innerHTML = wins;
	thatWord.innerHTML = start.join(' ');
	thatNumb.innerHTML = numberGuess;
	anotherWord.innerHTML = guessUsed;

	console.log(choosenWord);
    console.log(guessUsed);
    console.log(rightGuess);
	console.log(start);

	
	}


	document.onkeyup = pressKey;
	makeWord(library);
	setdash(choosenWord);
	



