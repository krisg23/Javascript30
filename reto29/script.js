let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

const alarm = document.getElementById('alarm');
const clock = document.getElementById('clock');

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it!
    if(secondsLeft < 0) {
      clearInterval(countdown);
      alarm.play();
      return;
    }
    if(secondsLeft<=10){
      timerDisplay.style.color = 'red';
      clock.play();
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const hours = Math.floor(seconds / 3600);
  let remainderSeconds = seconds % 3600;
  const minutes = Math.floor(remainderSeconds / 60);
  remainderSeconds = remainderSeconds % 60;
  let display;
  if(hours>0){
    display = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
  }
  else{display = `00:${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;}
  document.title = 'JS30 | '+display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  const seconds = end.getSeconds();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  endTime.textContent = `Termina a las ${adjustedHour < 10 ? '0' : ''}${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
  var seconds = 0;
  if(this.id == "newYear"){
    const now = new Date().getTime();
    const nuevo = new Date(2021,0,1,0,0,0,0).getTime();
    var dif = nuevo - now;
    seconds = dif/1000;
  }
  else{seconds = parseInt(this.dataset.time);}
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
