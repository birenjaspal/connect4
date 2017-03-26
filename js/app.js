//console.log("javascript connected");
//console.log("type: $ in console to confirm jquery is defined");
console.log("Welcome to Connect-4!");
$(function(){

  // [1   2   3   4   5   6   7]
  // [8   9  10  11  12  13  14]
  // [15 16  17  18  19  20  21]
  // [22 23  24  25  26  27  28]
  // [29 30  31  32  33  34  35]
  // [36 37  38  39  40  41  42]
  var array1 = [1,8,15,22,29,36];
  var array2 = [2,9,16,23,30,37];
  var array3 = [3,10,17,24,31,38];
  var array4 = [4,11,18,25,32,39];
  var array5 = [5,12,19,26,33,40];
  var array6 = [6,13,20,27,34,41];
  var array7 = [7,14,21,28,35,42];
  var takenPositionsArray = []; //array of taken positions
  var player = "red"; //red starts first; change to black
  var $placementboard = $('#placementboard');
  var $board = $('#board');
  var $placement = $('#placement');
  var lowestChipPosition;



  var isWon = function(takenPositionsArray){
    //horizontal test
    for (var i = 0; i<=42; i=i+7){ //for all of the columns
      for (var j=1; j <=4; j++){  //for all of the rows
        if (player == takenPositionsArray[i+j] && player == takenPositionsArray[i+j+1] && player == takenPositionsArray[i+j+2] && player == takenPositionsArray[i+j+3]){
          alert(player + " wins!");
          console.log(player +" wins!");
        }
      }
    }


    //vertical test
    for (var i = 0; i<=6; i++){ //for all of the columns
      for (var j=1; j <=21; j=j+7){  //for all of the rows
        if (player == takenPositionsArray[i+j] && player == takenPositionsArray[i+j+7] && player == takenPositionsArray[i+j+14] && player == takenPositionsArray[i+j+21]){
          alert(player + " wins!");
          console.log(player +" wins!");
        }
      }
    }

    //diagonal test up to the right
    if ((player == takenPositionsArray[22] && player == takenPositionsArray[16] && player == takenPositionsArray[10] && player == takenPositionsArray[4]) ||
    (player == takenPositionsArray[29] && player == takenPositionsArray[23] && player == takenPositionsArray[17] && player == takenPositionsArray[11]) ||
    (player == takenPositionsArray[23] && player == takenPositionsArray[17] && player == takenPositionsArray[11] && player == takenPositionsArray[5]) ||
    (player == takenPositionsArray[36] && player == takenPositionsArray[30] && player == takenPositionsArray[24] && player == takenPositionsArray[18]) ||
    (player == takenPositionsArray[30] && player == takenPositionsArray[24] && player == takenPositionsArray[18] && player == takenPositionsArray[12]) ||
    (player == takenPositionsArray[24] && player == takenPositionsArray[18] && player == takenPositionsArray[12] && player == takenPositionsArray[6]) ||
    (player == takenPositionsArray[37] && player == takenPositionsArray[31] && player == takenPositionsArray[25] && player == takenPositionsArray[19]) ||
    (player == takenPositionsArray[31] && player == takenPositionsArray[25] && player == takenPositionsArray[19] && player == takenPositionsArray[13]) ||
    (player == takenPositionsArray[25] && player == takenPositionsArray[19] && player == takenPositionsArray[13] && player == takenPositionsArray[7]) ||
    (player == takenPositionsArray[38] && player == takenPositionsArray[32] && player == takenPositionsArray[26] && player == takenPositionsArray[20]) ||
    (player == takenPositionsArray[32] && player == takenPositionsArray[26] && player == takenPositionsArray[20] && player == takenPositionsArray[14]) ||
    (player == takenPositionsArray[39] && player == takenPositionsArray[33] && player == takenPositionsArray[27] && player == takenPositionsArray[21]))
    {
      alert(player + " wins!");
      console.log(player +" wins!");
    }

    //diagonal test down to the right
      if ((player == takenPositionsArray[15] && player == takenPositionsArray[23] && player == takenPositionsArray[31] && player == takenPositionsArray[39]) || (player == takenPositionsArray[8] && player == takenPositionsArray[16] && player == takenPositionsArray[24] && player == takenPositionsArray[32]) || (player == takenPositionsArray[16] && player == takenPositionsArray[24] && player == takenPositionsArray[32] && player == takenPositionsArray[40]) || (player == takenPositionsArray[1] && player == takenPositionsArray[9] && player == takenPositionsArray[17] && player == takenPositionsArray[25]) || (player == takenPositionsArray[9] && player == takenPositionsArray[17] && player == takenPositionsArray[25] && player == takenPositionsArray[33]) ||
      (player == takenPositionsArray[17] && player == takenPositionsArray[25] && player == takenPositionsArray[33] && player == takenPositionsArray[41]) || (player == takenPositionsArray[2] && player == takenPositionsArray[10] && player == takenPositionsArray[18] && player == takenPositionsArray[26]) || (player == takenPositionsArray[10] && player == takenPositionsArray[18] && player == takenPositionsArray[26] && player == takenPositionsArray[34]) || (player == takenPositionsArray[18] && player == takenPositionsArray[26] && player == takenPositionsArray[34] && player == takenPositionsArray[42]) || (player == takenPositionsArray[3] && player == takenPositionsArray[11] && player == takenPositionsArray[19] && player == takenPositionsArray[27]) ||
      (player == takenPositionsArray[11] && player == takenPositionsArray[19] && player == takenPositionsArray[27] && player == takenPositionsArray[35]) || (player == takenPositionsArray[4] && player == takenPositionsArray[12] && player == takenPositionsArray[20] && player == takenPositionsArray[28]))
      {
        alert(player + " wins!");
        console.log(player +" wins!");
      }

  }

  var lowestpoint = function(player, position){
    if (position==50){
      if (array1.length==0){
        alert("nice try, but this row is obviously full, your turn is getting skipped");
      }
      else{
        takenPositionsArray[Math.max.apply(Math, array1)]=player; //sets the position
      //console.log("lowest position is: " + [Math.max.apply(Math, array1)]);
      $(document.getElementById(Math.max.apply(Math, array1))).css("background-color", player);
      array1.pop(); //removes the position from being available
      //console.log("available in array is: " + array1);
      }
    }

    if (position==51){
      if (array2.length==0){
        alert("nice try, but this row is obviously full, your turn is getting skipped")
      }
      else{
      takenPositionsArray[Math.max.apply(Math, array2)]=player; //sets the position
      $(document.getElementById(Math.max.apply(Math, array2))).css("background-color", player);
      array2.pop(); //removes the position from being available}
      }
    }
    if (position==52){
      if (array3.length==0){
        alert("nice try, but this row is obviously full, your turn is getting skipped")
      }
      else{
      takenPositionsArray[Math.max.apply(Math, array3)]=player; //sets the position
      $(document.getElementById(Math.max.apply(Math, array3))).css("background-color", player);
      array3.pop(); //removes the position from being available}
      }
    }
    if (position==53){
      if (array4.length==0){
        alert("nice try, but this row is obviously full, your turn is getting skipped")
      }
      else{
      takenPositionsArray[Math.max.apply(Math, array4)]=player; //sets the position
      $(document.getElementById(Math.max.apply(Math, array4))).css("background-color", player);
      array4.pop(); //removes the position from being available}
      }
    }
    if (position==54){
      if (array5.length==0){
        alert("nice try, but this row is obviously full, your turn is getting skipped")
      }
      else {
      takenPositionsArray[Math.max.apply(Math, array5)]=player; //sets the position
      $(document.getElementById(Math.max.apply(Math, array5))).css("background-color", player);
      array5.pop(); //removes the position from being available}
      }
    }
    if (position==55){
      if (array6.length==0){
        alert("nice try, but this row is obviously full, your turn is getting skipped")
      }
      else{
      takenPositionsArray[Math.max.apply(Math, array6)]=player; //sets the position
      $(document.getElementById(Math.max.apply(Math, array6))).css("background-color", player);
      array6.pop(); //removes the position from being available}
      }
    }
    if (position==56){
      if (array7.length==0){
        alert("nice try, but this row is obviously full, your turn is getting skipped")
      }
      else{
      takenPositionsArray[Math.max.apply(Math, array7)]=player; //sets the position
      $(document.getElementById(Math.max.apply(Math, array7))).css("background-color", player);
      array7.pop(); //removes the position from being available}
      }
    }
  }

  var showChip = function(){
    $(this).css("background-color", player);
  }
  var hideChip = function(){
    $(this).css("background-color", "thistle");
  }
  var placeChip = function(){
    $(this).css("background-color", "thistle");
    lowestpoint(player, $(this).attr("id"));
    isWon(takenPositionsArray);
    if((array1.length==0)&&(array2.length==0)&&(array3.length==0)&&(array4.length==0)&&(array5.length==0)&&(array6.length==0)&&(array7.length==0)){
      alert("there are no more possible moves, the game is over");
    }
    if (player =="red"){
      player="black";
    }
    else if (player =="black"){
      player="red";
    }
      isWon(takenPositionsArray);
    //console.log("the filled array: " + takenPositionsArray);
    //console.log("now its " + player + " turn");
  }

  for (var i=50; i<57; i++){
    var $newPlacement = $('<div>').attr("class","placement").attr("id",[i]);
    $newPlacement.on('mouseenter', showChip);
    $newPlacement.on('mouseleave', hideChip);
    $newPlacement.on('click', placeChip);
    $placementboard.append($newPlacement);
    //console.log("placement: "+i);
  }

  for (var i=1; i<43; i++){
    var $newSquare = $('<div>').attr("class","square").attr("id",i);
    $newSquare.text(i); //woohoo - why arent the numbers showing in the board squares?
    //console.log($newSquare);
    $board.append($newSquare);
  }

  // Grab my element
  var $ClearBoardBtn = $('#ClearBoardBtn');

  //set event handler
  var ClearBoardFunction = function(){
    location.reload();
  }

  //set event listener
  $ClearBoardBtn.on("click", ClearBoardFunction);

})
