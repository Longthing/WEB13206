//Weston Chin 

function setClock()
{
  var date = new Date();
  var h = parseInt(date.getHours(),10);
  h = h > 12 ? h-12: h;
  var m = parseInt(date.getMinutes(),10);
  var s = parseInt(date.getSeconds(),10);

  var second = 6*s;
  var minute =(m+s/60)*6;
  var hour = (h+m/60+s/3600)*30;
 
  var hourHand = document.getElementById("hour");
  var minuteHand = document.getElementById("minute");
  var secondHand = document.getElementById("second");

  hourHand.setAttribute("transform","rotate("+ hour.toString() +")");
  minuteHand.setAttribute("transform","rotate("+ minute.toString() +")");
  secondHand.setAttribute("transform","rotate("+ second.toString() +")");  
}


