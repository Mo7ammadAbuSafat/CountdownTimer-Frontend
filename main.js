let estimatedDate = new Date();
let flag = false;
function set() {
  let cu = document.getElementById("input").value;
  if (new Date(cu) instanceof Date) {
    if (new Date(cu) < new Date()) alert("enter a future date");
    else {
      document.getElementById("title").innerHTML = 'left for "' + cu + '"';
      estimatedDate = new Date(cu);
      flag = true;
    }
  } else alert("enter a valid date");
}

function cal() {
  if (flag) {
    let currentDate = new Date();
    let remain = estimatedDate - currentDate;
    let seconds = (remain / 1000) % 60;
    let minutes = (remain / 1000 / 60) % 60;
    let hours = (remain / 1000 / 60 / 60) % 24;
    let days = remain / 1000 / 60 / 60 / 24;
    console.log(seconds + "  " + minutes);
    document.getElementById("seconds").innerHTML = Math.floor(seconds);
    document.getElementById("minutes").innerHTML = Math.floor(minutes);
    document.getElementById("hours").innerHTML = Math.floor(hours);
    document.getElementById("days").innerHTML = Math.floor(days);
  }
}

setInterval(cal, 1000);
