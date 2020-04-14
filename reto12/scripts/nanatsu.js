nanatsu_add = function(){
	var s = [[421,374],[320,612],[595,822],[518,566],[400,400],[750,1200],[340,564],[750,1200]];
	var i = Math.ceil(Math.random()*s.length);
	var sources = ['characters/nanatsu/1.png','characters/nanatsu/2.png','characters/nanatsu/3.png','characters/nanatsu/4.png','characters/nanatsu/5.png','characters/nanatsu/6.png','characters/nanatsu/7.png','characters/nanatsu/8.png']
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
	m.onclick=nanatsu_add;
	m.style.cursor='pointer';
	m.src=sources[i-1];
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(d);
	d.appendChild(m);
}