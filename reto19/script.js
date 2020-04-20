const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

let reset = false;
let actRed = false;
let actRGB = false;
let actGray = false;
let actBright = false;
let actThres = false;

const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");

alert("Cuando te tomes una foto saldrá en la parte inferior de la página\n y si le das click se te descarga :3");

b1.onclick = function(){
  reset = true;
  actRed = false;
  actRGB = false;
  actGray = false;
  actBright = false;
  actThres = false;
}

b2.onclick = function(){
  reset = false;
  actRed = true;
  actRGB = false;
  actGray = false;
  actBright = false;
  actThres = false;
}

b3.onclick = function(){
  reset = false;
  actRed = false;
  actRGB = true;
  actGray = false;
  actBright = false;
  actThres = false;
}

b4.onclick = function(){
  reset = false;
  actRed = false;
  actRGB = false;
  actGray = true;
  actBright = false;
  actThres = false;
}

b5.onclick = function(){
  reset = false;
  actRed = false;
  actRGB = false;
  actGray = false;
  actBright = true;
  actThres = false;
}

b6.onclick = function(){
  reset = false;
  actRed = false;
  actRGB = false;
  actGray = false;
  actBright = false;
  actThres = true;
}

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      console.log(localMediaStream);      
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => {
      console.error(`¡Tienes que darle permiso a la cámara! >:c`, err);
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    let pixels = ctx.getImageData(0, 0, width, height);
    if(reset){pixels=ctx.getImageData(0, 0, width, height);}
    if(actRed){pixels=redEffect(ctx.getImageData(0, 0, width, height));}
    if(actRGB){pixels=rgbSplit(ctx.getImageData(0, 0, width, height));}
    if(actGray){pixels=grayScale(ctx.getImageData(0, 0, width, height));}
    if(actBright){pixels=brightness(ctx.getImageData(0, 0, width, height));}
    if(actThres){pixels=threshold(ctx.getImageData(0, 0, width, height));}
    
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function takePhoto() {
  // played the sound
  snap.currentTime = 0;
  snap.play();
  // take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src="${data}" alt="" />`;
  strip.insertBefore(link, strip.firstChild);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 100] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 150] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

function grayScale(pixels){
  var d = pixels.data;
  for (var i=0; i<d.length; i+=4) {
    var r = d[i];
    var g = d[i+1];
    var b = d[i+2];
    // CIE luminance for the RGB
    // The human eye is bad at seeing red and blue, so we de-emphasize them.
    var v = 0.2126*r + 0.7152*g + 0.0722*b;
    d[i] = d[i+1] = d[i+2] = v
  }
  return pixels;
}

function brightness(pixels){
  var d = pixels.data;
  let adjustment = 100;
  for (var i=0; i<d.length; i+=4) {
    d[i] += adjustment;
    d[i+1] += adjustment;
    d[i+2] += adjustment;
  }
  return pixels;
}

function threshold(pixels){
  var d = pixels.data;
  let threshold = 50;
  for (var i=0; i<d.length; i+=4) {
    var r = d[i];
    var g = d[i+1];
    var b = d[i+2];
    var v = (0.2126*r + 0.7152*g + 0.0722*b >= threshold) ? 255 : 0;
    d[i] = d[i+1] = d[i+2] = v
  }
  return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
