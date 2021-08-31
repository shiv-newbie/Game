var myArr = [];

// ** JUST CHECKING ** //

// Row checker
function rowChecker(num){
  var idea = Math.floor(idea/9);
  isTrue = true;
  for(i = idea; i <= idea; i++){
    for(j = 0; j < 9; j++){
      if(myArr[i*9+j] == 'X'){
        isTrue = false;
      }
    }
  }
  return isTrue;
}

// Column checker
function colChecker(num){
  var idea = Math.floor(idea%9);
  isTrue = true;
  for(i = 0; i < 9; i++){
    for(j = idea; j <= idea; j++){
      if(myArr[i*9+j] == 'X'){
        isTrue = false;
      }
    }
  }
  return isTrue;
}

// 3x3 checker
function checker3x3(num){
  var i = Math.floor(num/9);
  var j = Math.floor(num%9);

  if(i >= 0 && i <= 2){
    i = 0;
  }else if(i >= 3 && i <= 5){
    i = 3;
  }else{
    i = 6;
  }

  if(j >= 0 && j <= 2){
    j = 0;
  }else if(j >= 3 && j <= 5){
    j = 3;
  }else{
    j = 6;
  }

  isTrue = true;

  for(k = i; k < i+3; k++){
    for(l = j; l < j+3; l++){
      if(k*9+j == 'X'){
        isTrue = false;
      }
    }
  }

  return isTrue;
}


// ** MAKING RED ** //

// checking if the 3x3 cube is finished
function wowShake(num){
  if(checker3x3(num)){
    var i = Math.floor(num/9);
    var j = Math.floor(num%9);

    if(i >= 0 && i <= 2){
      i = 0;
    }else if(i >= 3 && i <= 5){
      i = 3;
    }else{
      i = 6;
    }

    if(j >= 0 && j <= 2){
      j = 0;
    }else if(j >= 3 && j <= 5){
      j = 3;
    }else{
      j = 6;
    }


    for(k = i; k < i+3; k++){
      for(l = j; l < j+3; l++){
        document.getElementById("p"+(k*9+l)).style.color = "red";
      }
    }
    setTimeout(function(){
      for(k = i; k < i+3; k++){
        for(l = j; l < j+3; l++){
          var cx = k*9+l;
          document.getElementById("p"+cx).style.color = "black";
        }
      }
    }, 500);
  }
}

// checking if the COLUMN is finished
function colShake(num){
  if(colChecker(num)){
    var idea = Math.floor(num%9);
    for(i = 0; i < 9; i++){
      for(j = idea-1; j <= idea-1; j++){
        var cx = i*9+j;
        document.getElementById("p"+cx).style.color = "red";
      }
    }
    setTimeout(function(){
      for(i = 0; i < 9; i++){
        for(j = idea-1; j <= idea-1; j++){
          var cx = i*9+j;
          document.getElementById("p"+cx).style.color = "black";
        }
      }
      // Checking the 3x3 cube if it is finished
      wowShake(num);
    }, 500);

  }
}

// checking if the ROW is finished
function Shaker(num){
  num = num.slice(1);

  if(rowChecker(num)){
    var idea = Math.floor(num/9);
    for(i = idea; i <= idea; i++){
      for(j = 0; j < 9; j++){
        var cx = i*9+j;
        document.getElementById("p"+cx).style.color = "red";
        }
      }

      setTimeout(function(){
        for(i = idea; i <= idea; i++){
          for(j = 0; j < 9; j++){
            var cx = i*9+j;
            document.getElementById("p"+cx).style.color = "black";
          }
        }
        // Checking the col if it is finished
        colShake(num);
      }, 500);
    }
}

// ** CHECKING AND MAKING RED OVER ** //
