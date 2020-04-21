var colors = document.getElementById("colors");
var bg = document.getElementById("rainbow");
var x = document.getElementById("words1");
var speed=80; // SPEED OF FADE
var interval = 0;

var hex=new Array("00","14","28","3C","50","64","78","8C","A0","B4","C8","DC","F0");
var r=1;
var g=1;
var b=1;
var seq=1;

function colorsT(){
	rainbow="#"+hex[r]+hex[g]+hex[b];
	colors.style.color=rainbow;
}

function changeBg(){
	rainbow="#"+hex[r]+hex[g]+hex[b];
	bg.style.backgroundColor = rainbow;
	x.style.color=rainbow;
}

function stopBg(){
	clearInterval(interval);
	bg.style.backgroundColor = "#263238";
	x.style.color="#000";
}

function change(){
	if (seq==6){
		b--;
		if (b==0)
			seq=1;
	}
	if (seq==5){
		r++;
		if (r==12)
			seq=6;
	}
	if (seq==4){
		g--;
		if (g==0)
			seq=5;
	}
	if (seq==3){
		b++;
		if (b==12)
			seq=4;
	}
	if (seq==2){
		r--;
		if (r==0)
			seq=3;
	}
	if (seq==1){
		g++;
		if (g==12)
			seq=2;
	}
	changeBg();
}

function changeColors(){
	if (seq==6){
		b--;
		if (b==0)
			seq=1;
	}
	if (seq==5){
		r++;
		if (r==12)
			seq=6;
	}
	if (seq==4){
		g--;
		if (g==0)
			seq=5;
	}
	if (seq==3){
		b++;
		if (b==12)
			seq=4;
	}
	if (seq==2){
		r--;
		if (r==0)
			seq=3;
	}
	if (seq==1){
		g++;
		if (g==12)
			seq=2;
	}
	colorsT();
}


function starteffect(){
	interval = setInterval(function(){change()}, speed);
	//setInterval("change()",speed);		
}

function cColors(){
	setInterval("changeColors()",speed);
}

cColors();

bg.addEventListener('mouseover', starteffect);
bg.addEventListener('mouseout', stopBg);
