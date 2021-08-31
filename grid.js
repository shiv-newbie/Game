var grid = "";

for(i = 0; i < 81; i++){
  var j = i%9;


  if(j == 0){
    grid += `<tr>`;
  }

  grid += `<td id = "p`+ i +`" class = "pal">`;
  grid += `<div ondrop="drop(event, `+ i +`)" ondragover="allowDrop(event)">`;

  grid += j ;

  grid += `</div></td>`;

  if(j == 8){
    grid += `</tr>`;
  }
}

document.write(grid);
