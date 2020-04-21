var pYellow = document.getElementById("yellow");
var pBlue = document.getElementById("blue");
var pRed = document.getElementById("red");
var pPink = document.getElementById("pink");
var pPurple = document.getElementById("purple");
var pGreen = document.getElementById("green");
var pBlack = document.getElementById("black");
var pGray = document.getElementById("gray");
var pWhite = document.getElementById("white");
var text = document.getElementById("footer");

var x = document.getElementById("words1");
var y = document.getElementById("table1");

function cYellow(){
	x.style.color="#fde101";
}

function cBlue(){
	x.style.color="#028dd0";
}

function cRed(){
	x.style.color="#e8493f";
}

function cPink(){
	x.style.color="#eb6ca3";
}

function cPurple(){
	x.style.color="#7368ad";
}

function cGreen(){
	x.style.color="#4cb36a";
}

function cBlack(){
	x.style.color="#212121";
}

function cGray(){
	x.style.color="#b3b5b4";
}

function cWhite(){
	x.style.color="#edf1f0";
}

function cStop(){
	x.style.color="#000";
}


pYellow.addEventListener('mouseover', cYellow);
pBlue.addEventListener('mouseover', cBlue);
pRed.addEventListener('mouseover', cRed);
pPink.addEventListener('mouseover', cPink);
pPurple.addEventListener('mouseover', cPurple);
pGreen.addEventListener('mouseover', cGreen);
pBlack.addEventListener('mouseover', cBlack);
pGray.addEventListener('mouseover', cGray);
pWhite.addEventListener('mouseover', cWhite);


y.addEventListener('mouseout', cStop);
