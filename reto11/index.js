const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const mute = player.querySelector('.mute');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
let lastVolume = 100;

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function toggleMute() {
  if(video.volume == 0){
    video.volume = lastVolume;
    ranges[0].value = lastVolume;
    mute.innerHTML = '<i class="material-icons md-light md-36">volume_up</i>';
  }
  else {
    video.volume = 0;
    ranges[0].value = 0;
    mute.innerHTML = 	'<i class="material-icons md-light md-36">volume_off</i>';
  }
}

function updateButton() {
  const icon = this.paused ? '<i class="material-icons md-light md-36">play_arrow</i>' : '<i class="material-icons md-light md-36">pause</i>';
  console.log(icon);
  toggle.innerHTML = icon;
}

function skip() {
 video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
  lastVolume = this.value;
  if (this.value == 0){
    mute.innerHTML = 	'<i class="material-icons md-light md-36">volume_off</i>';
  }
  else {
    mute.innerHTML = '<i class="material-icons md-light md-36">volume_up</i>';
  }
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function onKeyDown(e){
  switch(e.keyCode){
    case 32: togglePlay(); break;
    case 39: video.currentTime += parseFloat(5); break;
    case 37: video.currentTime += parseFloat(-5); break;
    case 38: video.volume += 0.05; ranges[0].value = video.volume; break;
    case 40: video.volume += -0.05; ranges[0].value = video.volume; break;
    case 77: toggleMute(); break;
  }
}


video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
window.addEventListener('keydown', onKeyDown);

toggle.addEventListener('click', togglePlay);
mute.addEventListener('click', toggleMute);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
