var grid = "";

for(i = 0; i < 9; i++){
  for(j = 0; j < 9; j++){

    if(j == 0){
      grid += `<tr>`;
    }

    var xc = i*9+j;
    if(i % 3 == 2 && j % 3 == 2){
      grid += `<td id = "p`+ (xc) +`" class = "pal pald palr">`;
    }
    else if(i % 3 == 2){
      grid += `<td id = "p`+ xc +`" class = "pal pald">`;
    }
    else if(j % 3 == 2){
      grid += `<td id = "p`+ xc +`" class = "pal palr">`;
    }
    else{
      grid += `<td id = "p`+ xc +`" class = "pal">`;
    }

    grid += `<div ondrop="drop(event, `+ (xc+1) +`)" ondragover="allowDrop(event)">`;
    grid += j+1 ;
    grid += `</div></td>`;

    if(j == 8){
      grid += `</tr>`;
    }
  }
}

document.write(grid);
