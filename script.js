setInterval(showCurrentTime, 1000);

function showCurrentTime() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let year = currentTime.getFullYear();
  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  let month = monthArray[d.getMonth()];
  let date = currentTime.getDate();
  let am_pm = "AM";

  am_pm = hours > 12 ? "PM" : "AM";

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = hours + " : " + minutes + " : " + seconds + " " + am_pm;

  let timeElement = document.getElementById("time");
  let currentTimeElement = `<p>Today is  ${month} ${date} ${year} </p> <h2>${time} </h2>`;
  timeElement.innerHTML = currentTimeElement;
}

showCurrentTime();
