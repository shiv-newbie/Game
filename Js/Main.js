var gridCnt = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function resetPal(num){
  var p = "";

  for(i = 0; i < 9; i++){
    p += `<td class = "pal"><div = `;
    if(i != num){
      p +=`draggable="true" ondragstart="drag(event)" id = "`;
    }
    p += i + `">`;

    if(i == num){
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

var firstEvent = true;

function drop(ev, i) {

  if(firstEvent){
    firstEvent = false;
    time();
  }
  // TODO: check if the number is correct & update gridCount


  ev.preventDefault();
  var data=ev.dataTransfer.getData("Text");
  var s=document.getElementById(data);
  ev.target.appendChild(s);

  const palNum = s.innerHTML;
  console.log(i);
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
      // TODO: The pallete is all used so stop the clock and display a congratulations message!!
    }

  }

  // TODO: Reset the grid if the number is correct
  ev.target.removeAttribute("ondrop");
  ev.target.removeAttribute("ondragover");
  Shaker("p"+i);
}
