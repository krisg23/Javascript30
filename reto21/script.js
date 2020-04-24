const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');
const ownLatitude = document.getElementById("ownLat");
const ownLongitude = document.getElementById("ownLong");
const distance = document.getElementById("distance");
const distanceT = document.getElementById("distanceT");
const kButton = document.getElementById("know");
const kText = document.getElementById("udeaT");
const latUdeA = 6.2677;
const longUdeA = 75.5688;

navigator.geolocation.watchPosition((data) => {
	speed.textContent = data.coords.speed;
	if (data.coords.latitude>0) {ownLatitude.textContent = data.coords.latitude + '°N';}
	if (data.coords.latitude<0) {ownLatitude.textContent = data.coords.latitude*-1 + '°S';}
	if (data.coords.longitude>0) {ownLongitude.textContent = data.coords.longitude + '°E';}
	if (data.coords.longitude<0) {ownLongitude.textContent = data.coords.longitude*-1 + '°W';}
	distanceT.style.visibility = "visible";
	kButton.style.visibility = "visible";
	distance.textContent = getKilometros(data.coords.latitude, data.coords.longitude, latUdeA, longUdeA);
	console.log("%c La %c Universidad de Antioquia %c es lo que más te ama. Latitud: "+latUdeA+"°N y Longitud: "+longUdeA+"°E",'color: #fff;','color: #4cb36a;','color: #fff;' );
	arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
	console.error('Por favor active la geolocalización de su dispositivo',err);
});

getKilometros = function(lat1,lon1,lat2,lon2){
	rad = function(x) {return x*Math.PI/180;}
	var R = 6378.137; //Radio de la tierra en km
	var dLat = rad( lat2 - lat1 );
	var dLong = rad( lon2 - lon1 );
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	var d = (R * c)/1000;
	return d.toFixed(3); //Retorna tres decimales
}

function udea(){
	kButton.parentNode.removeChild(kButton);
	kText.style.visibility = "visible";
}