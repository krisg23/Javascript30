db_add = function(){
	var s = [[749,1024],[730,1095],[350,684],[340,882],[694,1149],[317,480],[340,577]];
	var i = Math.ceil(Math.random()*s.length);
	var sources = ['characters/db/1.png','characters/db/2.png','characters/db/3.png','characters/db/4.png','characters/db/5.png','characters/db/6.png','characters/db/7.png']
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
	m.onclick=db_add;
	m.style.cursor='pointer';
	m.src=sources[i-1];
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(d);
	d.appendChild(m);
}