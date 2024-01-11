function updateElapsedTime() {
  const elapsedTimeElement = document.getElementById("elapsed-time");
  let secondsElapsed = 0;

  setInterval(() => {
    secondsElapsed++;

    if (secondsElapsed % 60 === 0) {
      const minutesPassed = secondsElapsed / 60;
      const minuteText = minutesPassed === 1 ? "minute" : "minutes";
      elapsedTimeElement.innerHTML = `${minutesPassed} ${minuteText} have passed`;
    } else {
      elapsedTimeElement.innerHTML = `${secondsElapsed} seconds have passed`;
    }

    elapsedTimeElement.style.opacity = 1;
  }, 1000); 
}

window.onload = updateElapsedTime;