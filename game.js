var numSquares= 6;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square")
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i< squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else {
			squares[i].style.display = "none";
		}
	}
})


hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i< squares.length; i++){
		
			squares[i].style.backgroundColor = colors[i];
		
			squares[i].style.display = "block";
		
	}
})


resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColor(numSquares);
	//pick a new random color from array
	 pickedColor = pickColor();
	 //change colorDisplay to match picked coloer
	 colorDisplay.textContent = pickedColor;
	 this.textContent ="New Colors"
	 messageDisplay.textContent=""
	 for(var i =0; i<squares.length; i++){
	 	squares[i].style.backgroundColor=colors[i];
	 }
	 h1.style.backgroundColor="steelblue";

})


colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length;i++){
	squares[i].style.backgroundColor = colors[i];

	//add click lixtener to squares

	squares[i].addEventListener("click",function(){
		//grab color  of picked color
		var clickedColor= this.style.backgroundColor;
		console.log(clickedColor,pickedColor);
		if(clickedColor=== pickedColor){

			messageDisplay.textContent="CORRECT!!!!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent="Play Again!";
		} else{
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again";
		}
	})
}

function changeColors(color){
//loop through all squares
	for(var i =0; i<squares.length; i++){
		//change each color
		squares[i].style.backgroundColor =color;
	}
}

function pickColor(){
var random =Math.floor(Math.random()*colors.length);
return colors[random];	

}

function generateRandomColor(num){
	//make an array
	var arr =[]
	//add random colors to array
	for(var i=0; i<num; i++){
		arr.push(randomColor());//get random color and push into arr
	}
	//return that array
	return arr;
}
function randomColor(){
	//pick a red from 0 to 255
	var r =Math.floor(Math.random()*256);
	//pick a green from 0 to 255
	var g =Math.floor(Math.random()*256);
	//pick a blue from 0 to 255
	var b =Math.floor(Math.random()*256);

	return "rgb(" + r +", " + g +", " + b + ")";
}