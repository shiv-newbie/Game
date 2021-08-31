var second = 00, minute = 00, hour = 00;
var toBreak = false;

function time(){
  setTimeout(function(){
    if(!toBreak){
      second++;
      if(second == 60){
        second = 0;
        minute++;
        if(minute == 60){
          minute = 0;
          hour++;
        }

      }
      if(Math.floor(hour/10) == 0){
        document.getElementById("hr").innerHTML = "0"+hour;
      }else{
        document.getElementById("hr").innerHTML = hour;
      }

      if(Math.floor(minute/10) == 0){
        document.getElementById("min").innerHTML = "0"+minute;
      }else{
        document.getElementById("min").innerHTML = minute;
      }

      if(Math.floor(second/10) == 0){
        document.getElementById("sec").innerHTML = "0"+second;
      }else{
        document.getElementById("sec").innerHTML = second;
      }



      time();
    }
  }, 1000);
}
