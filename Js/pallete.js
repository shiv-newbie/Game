var p = "";

for(i = 0; i < 9; i++){
  p += `<td class = "pal"><div = draggable="true" ondragstart="drag(event)" id = "`;
  p +=  i +`">`+ (i+1) +`</div></td>`;
}

document.write(p);
