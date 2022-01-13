/* jshint esversion: 8 */

// Countdown


const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const giveaway = document.querySelector('.date');
  const deadline = document.querySelector('.launch');
  const items = document.querySelectorAll('.launch-format h4');
   
  
  let launchDate = new Date(2022, 3, 25, 9, 30, 0);
  
  const year = launchDate.getFullYear();
  const hours = launchDate.getHours();
  const minutes = launchDate.getMinutes();
  
  let month = launchDate.getMonth();
  month = months[month];
  const weekday = weekdays[launchDate.getDay()];
  const date = launchDate.getDate();
  giveaway.textContent = `Launches ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;
  
  const launchTime = launchDate.getTime();
  function getRemaindingTime() {
    const today = new Date().getTime();
  
    const t = launchTime - today;
   
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    
    
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);
  
    const values = [days, hours, minutes, seconds];
    function format(item) {
      if (item < 10) {
        return (item = `0${item}`);
      }
      return item;
    }
  
    items.forEach(function (item, index) {
      item.innerHTML = format(values[index]);
    });
  
    if (t < 0) {
      clearInterval(countdown);
      deadline.innerHTML = `<h4 class="expired">Kind Cornwall has launched, membership giveaway has ended</h4>`;
    }
  }
  
  let countdown = setInterval(getRemaindingTime, 1000);
  getRemaindingTime();