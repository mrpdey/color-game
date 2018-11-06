var numSquare=6;
var colors=generateRandomColors(numSquare);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");

var messageDisplay=document.querySelector("#messageDisplay");
var h1=document.querySelector("h1")

var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hrdBtn=document.querySelector("#hrdBtn");


easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hrdBtn.classList.remove("selected");
	var numSquare=3;
	colors=generateRandomColors(numSquare);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
		squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
});


hrdBtn.addEventListener("click",function(){
	hrdBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	var numSquare=6;
	colors=generateRandomColors(numSquare);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
		squares[i].style.display="block";
	}
});


resetButton.addEventListener("click",function(){
	var numSquare=6;
	colors=generateRandomColors(numSquare);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];
	}
	h1.style.background="#232323";
});


colorDisplay.textContent=pickedColor;

 for(var i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.background;
		console.log(clickedColor);
		if(clickedColor===pickedColor){
			messageDisplay.textContent="Correct";
			resetButton.textContent="Play again?";
			changeColors(clickedColor);
			h1.style.background=clickedColor;
		}else{
			this.style.background="#232323";
			messageDisplay.textContent="Try Again";
		}
	});
}


function changeColors(color) {
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++ ){
		arr.push(rendomColor())
	}
	return arr;
}

function rendomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}
