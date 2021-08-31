var gridCnt = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var isDead = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// TODO: Impliment help and show a random cell
function HTP(){

}

var help = 3;
function help(){
  help--;
}

function resetPal(num){
  var p = "";
  if(num != -1){
    isDead[num] = 1;
  }
  for(i = 0; i < 9; i++){
    p += `<td class = "pal"><div = `;
    if(!isDead[i]){
      p +=`draggable="true" ondragstart="drag(event)" id = "`;
    }
    p += i + `">`;

    if(isDead[i]){
      p +=  "X";
    }else{
      p +=  i+1 ;
    }

    p +=`</div></td>`;
  }

  var pal = document.getElementById("nums");
  pal.innerHTML = p;
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}


function drop(ev, i) {

  if(!toBreak){
    stop();
  }
  // TODO: check if the number is correct & update gridCount


  ev.preventDefault();
  var data=ev.dataTransfer.getData("Text");
  var s=document.getElementById(data);
  ev.target.appendChild(s);

  const palNum = s.innerHTML;
  ev.target.innerHTML = palNum;

  gridCnt[palNum-1]++;
  // Reset the pallete according to GridCount
  if(gridCnt[palNum-1] != 9){
    resetPal(-1);
  }else {
    // checking if the pallete is all used up
    var check = true;
    for(i = 0;i < 9; i++){
      if(gridCnt[i] != 9){
        check = false;
        break;
      }
    }
    if(!check){
      resetPal(palNum-1);
    }else {
      toBreak = true;
      // TODO: The pallete is all used so display a congratulations message!!
    }

  }

  // TODO: Reset the grid if the number is correct
  ev.target.removeAttribute("ondrop");
  ev.target.removeAttribute("ondragover");
  Shaker("p"+i);
}
