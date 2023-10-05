const clock = document.querySelector('.clock-container');

// const date = new date;
// console.log(date);

setInterval(function(){

      let date = new Date;
   clock.innerHTML  = date.toLocaleTimeString();

},1000)