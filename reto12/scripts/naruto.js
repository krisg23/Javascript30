naruto_add = function(){
	var s = [[602,639],[350,629],[512,512],[655,1414],[630,634],[332,479],[292,854]];
	var i = Math.ceil(Math.random()*s.length);
	var sources = ['characters/naruto/1.png','characters/naruto/2.png','characters/naruto/3.png','characters/naruto/4.png','characters/naruto/5.png','characters/naruto/6.png','characters/naruto/7.png']
	var a = typeof(window.innerHeight) == 'number';
	var b = document.documentElement && document.documentElement.clientHeight;
	var h = a ? window.innerHeight : b ? document.documentElement.clientHeight : document.body.clientHeight;
	var w = a ? window.innerWidth  : b ? document.documentElement.clientWidth  : document.body.clientWidth;
	var d = document.createElement('div');
	d.style.position = 'fixed';
	d.style.left = (Math.random()*(w-s[i-1][0]))+'px';
	d.style.top  = (Math.random()*(h-s[i-1][1]))+'px';
	d.style.zIndex = 10;
	var m = document.createElement('img');
	m.onclick=naruto_add;
	m.style.cursor='pointer';
	m.src=sources[i-1];
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(d);
	d.appendChild(m);
}