let countdown;
const clock = document.querySelector('.display__time-left');

function timer(seconds) {
  const now = Date.now();
  const then = now + (seconds * 1000);
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then  - Date.now()) / 1000);
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const min = Math.floor(seconds / 60)
  const sec = seconds % 60;
  const display = `${min}:${sec < 10 ? '0' : ''}${sec}`;
  clock.textContent = display;
}