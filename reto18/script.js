const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const totalTime = document.getElementById('totalTime');

timeNodes.forEach(node => {
  node.innerHTML += `<span>${node.dataset.time}</span>`;
})

const seconds = timeNodes
.map(node => node.dataset.time)
.map(timeCode => {
  const [mins, secs] = timeCode.split(':').map(parseFloat);
  return (mins * 60) + secs;
})
.reduce((total, vidSeconds) => total + vidSeconds);

totalTime.innerText = secondsToString(seconds);

function secondsToString(seconds){
  let secondsLeft = seconds;
  const hours = Math.floor(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;
  const mins = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

  console.log(hours, mins, secondsLeft);

  return hours > 0 ?
  (str_pad_left(hours, '0', 2) + ':' + str_pad_left(mins, '0', 2) + ':' + str_pad_left(secondsLeft, '0', 2))
  :
  (str_pad_left(mins, '0', 2) + ':' + str_pad_left(secondsLeft, '0', 2));
}

function str_pad_left(string, pad, length) {
  return (new Array(length + 1).join(pad) + string).slice(-length);
}