const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");


function getTime(){
  const date = new Date();

  return{
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
}

setInterval(()=> {
  const time = getTime();

  secondHand.style.transform = `translate(0, -50%) rotate(${time.seconds*6}deg)`;
  minuteHand.style.transform = `translate(0, -50%) rotate(${time.minutes*6}deg)`;
  hourHand.style.transform = `translate(0, -50%) rotate(${time.hours*30}deg)`;
  
}, 1000);

setInterval(()=> {
  const time = getTime();

  sec.innerHTML = time.seconds;
  min.innerHTML = time.minutes;
  hour.innerHTML = time.hours;
  
}, 1000);
