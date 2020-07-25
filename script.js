var endDate  = new Date ("Jun 28, 21 05:00:00").getTime();

var timer = setInterval(function() {
  let now= new Date().getTime();
  let t = endDate - now;

  if (t >= 0) {

    let days = Math.floor (t/(1000 * 60 * 60 * 24));
    let hours= Math.floor ((t% (1000 * 60 * 60 * 24)) / ( 1000 * 60 * 60));
    let minutes= Math.floor ((t% (1000 * 60 * 60)) / (1000*60));
    let seconds= Math.floor ((t% (1000 * 60)) / 1000 );

    document.getElementById("timer-days").innerHTML = days + "<span class='label'>DAY(S)</span>";
    document.getElementById ("timer-hours").innerHTML = ("0" + hours) .slice(-2) + "<span class='label'> HR(S)</span>";
    document.getElementById("timer-minutes").innerHTML = ("0" + minutes).slice(-2) + "<span class='label'>MIN(S)</span>";
    document.getElementById("timer-seconds") .innerHTML = ("0" + seconds).slice(-2) + "<span class='label' >SEC(S)</span>"

  }

  else {

    document.getElementById("timer") .innerHTML = "The countdown is over!";

  }
}, 1000);
