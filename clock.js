function displayDate() {
  const dateTime = new Date();
  let hour = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const seconds = dateTime.getSeconds();
  const session = document.getElementById("session");
  if (hour >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }
  if (hour > 12) {
    hour = hour - 12;
  }
  document.getElementById("hours").innerHTML = hour;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}
setInterval(displayDate, 10);
