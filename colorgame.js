var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
//since we removed the ids from the html page, we no longer need these variables #refactor
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
//instead we will now use the variable modeButtons up above.

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();		
}

function setupModeButtons(){
	//Mode buttons event listeners
	//This block replaces the code blocks for easyBtn and hardBtn event listeners below #refactor
	for (var i=0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			//ternary operator used to replace traditional if statement
			//reads just like an if statement
			this.textContent ==="Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	//
	for (var i=0; i < squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of picked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if (clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i=0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = " ";
	resetButton.textContent = "New Colors";
}

// The following lines of code are obsolete as a result of refactoring or optimizing our code.
// these button eventlisteners were combined into a single block of code now embedded inside the 
// init() function up above. 
// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3;

// 	//generate 3 new colors
// 	colors = generateRandomColors(numSquares);

// 	//pick a new pickedColor from the 3 above
// 	pickedColor = pickColor();

// 	//change colorDisplay to match the picked color
// 	colorDisplay.textContent = pickedColor;

// 	//loop through all the squares from start to finish. For each index in the squares array
// 	//if there's a value in the colors array, replace the current color value with the new value.
// 	//this is how we get the new colors into the squares to be displayed.
// 	//if there's no corresponding value in the colors array (else), hide the square.
// 	for (var i=0; i < squares.length; i++){
		// if(colors[i]){
		// 	squares[i].style.backgroundColor = colors[i];
		// }
		// else{
		// 	squares[i].style.display = "none";
		// }
// 	}

// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;

// 	//generate 3 new colors
// 	colors = generateRandomColors(numSquares);

// 	//pick a new pickedColor from the 3 above
// 	pickedColor = pickColor();

// 	//change colorDisplay to match the picked color
// 	colorDisplay.textContent = pickedColor;

// 	//loop through all the squares from start to finish. For each index in the squares array
// 	//if there's a value in the colors array, replace the current color value with the new value.
// 	//this is how we get the new colors into the squares to be displayed.
// 	//Also make sure that all squares are displayed.
// 	for (var i=0; i < squares.length; i++){
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}

// });

resetButton.addEventListener("click", function(){
	reset();
	// This block of code was moved into the reset() function as part of #refactor
	// //generate all new colors
	// colors = generateRandomColors(numSquares);
	// //pick a new random color from array
	// pickedColor = pickColor();
	// //change colorDisplay to match picked color
	// colorDisplay.textContent = pickedColor;
	// //change colors of squares
	// for (var i=0; i < squares.length; i++){
	// 	squares[i].style.backgroundColor = colors[i];
	// }
	// h1.style.backgroundColor = "steelblue";
	// messageDisplay.textContent = " ";
	// this.textContent = "New Colors";	
});

function changeColors(color){
	//loop through all squares
	for(var i=0; i < squares.length; i++){
		//change each to matcg the given color
		squares[i].style.backgroundColor = color;	
	}
	
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for (var i=0; i < num; i++){
		//get random color and push into arr
		arr.push (randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);

	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);

	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}