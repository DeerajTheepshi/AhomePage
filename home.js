var days_s = document.querySelectorAll(".days")[0];
var hrs_s = document.querySelectorAll(".hours")[0];
var mins_s = document.querySelectorAll(".minutes")[0];
var secs_s = document.querySelectorAll(".seconds")[0];
var days_s1 = document.querySelectorAll(".days")[1];
var hrs_s1 = document.querySelectorAll(".hours")[1];
var mins_s1 = document.querySelectorAll(".minutes")[1];
var secs_s1= document.querySelectorAll(".seconds")[1];

function countdown(endDate) {
  let days, hours, minutes, seconds;

  endDate = new Date(endDate).getTime();

  if (isNaN(endDate)) {
	return;
  }

  setInterval(calculate, 1000);

  function calculate() {
    let startDate = new Date();
    startDate = startDate.getTime();

    let timeRemaining = parseInt((endDate - startDate) / 1000);

    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);

      hours = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);

      minutes = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);

      seconds = parseInt(timeRemaining);

      string_d = ""+parseInt(days, 10);
      string_h = ""+("0" + hours).slice(-2);
      string_m = ""+("0" + minutes).slice(-2);
      string_s = ""+("0" + seconds).slice(-2);

      console.log(string_s[1]);
      days_s.innerHTML = string_d[0];
      hrs_s.innerHTML = string_h[0];
      mins_s.innerHTML = string_m[0];
      secs_s.innerHTML = string_s[0];

      days_s1.innerHTML = string_d[1];
      hrs_s1.innerHTML = string_h[1];
      mins_s1.innerHTML = string_m[1];
      secs_s1.innerHTML = string_s[1];

    } else {
      return;
    }
  }
}

countdown('02/01/2019 05:30:00 PM');
