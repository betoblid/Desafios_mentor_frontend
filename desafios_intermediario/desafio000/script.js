const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let count_down = new Date('11/05/2023 00:00:00').getTime();
let x = setInterval(() => countDown(), second);

function countDown() {
  let now = new Date(Date.now()).getTime();
  let diff = count_down - now;

  document.getElementById('day').innerText = Math.floor(diff / day);
  document.getElementById('hors').innerText = Math.floor(diff % day / hour);
  document.getElementById('minuts').innerText = Math.floor(diff % hour / minute);
  document.getElementById('segunts').innerText = Math.floor(diff % minute / second);
}

function resetCountdown() {
  clearInterval(x);
  let date_end = document.form_main.date_end.value;
  count_down = new Date(`${date_end} 00:00:00`).getTime();
  x = setInterval(() => countDown(), second);
}