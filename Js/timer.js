var second = 00, minute = 00, hour = 00;
var toBreak = false;
var working = true;

function stop(){

  if(!toBreak){
    toBreak = true;
    document.getElementById('fullCover').style.display = 'none';
    document.getElementById("sudoku").style.backgroundColor = "white";
    document.getElementById("sudoku").style.opacity=0.7;
    what = "Pause";
    working = true;
    time();
  }else{
    // TODO: HIDE the sudoku part of the page
    document.getElementById('fullCover').style.display = '';
    document.getElementById("sudoku").style.backgroundColor = "black";
    document.getElementById("sudoku").style.opacity=1;


    toBreak = false;
    working = false;
    what = "Play";
  }

  var elem = document.getElementById("plu").innerHTML = what;
}

function time(){
  setTimeout(function(){
    if(working){
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
