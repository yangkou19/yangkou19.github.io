var p1 = prompt("Player One: Enter Your Name , you will be Blue");
var p2 = prompt("Player Two: Enter Your Name , you will be Red");
$('h3').text(p1 + ": it is your turn, please pick a column to drop your blue chip.")
var color = "blue"
var map = {blue:p1, red:p2}
$('td').click(function(){
  var col = $(this).index();
  var cells = document.querySelectorAll('#'+ $(this).attr('id'));
  var cell = cells[cells.length-1]
  // console.log(cells);
  cell.style.background = color
  $('h3').text(map[color]+": it is your turn, please pick a column to drop your red chip.")
  cell.setAttribute("id",color)
  if (color==="blue"){
    color = "red"
  }
  else{
    color = "blue"
  }

vcheck();
hcheck();
dcheck()
})

// Vertical Check
function vcheck(){
  for (c=0; c<7; c++){
    var count = 0;
    for (r=1; r<6; r++){
      var prevColor = $("td:eq("+(c+(r-1)*7)+")").attr('id');
      var color = $("td:eq("+(c+r*7)+")").attr('id');
      if ((color === "red"||color == "blue") && color === prevColor) {
        count ++;
        console.log(count);
        if (count === 3){
          $('h3').text(map[color]+" has won! Refresh your browser to play again!")
          break;
        }
      }
      else {
        count = 0;
      }
    }
  }
}

// Horizontal Check
function hcheck(){
  for (r=0; r<6; r++){
    var count = 0;
    for (c=1; c<7; c++){
      var prevColor = $("td:eq("+(c-1+r*7)+")").attr('id');
      var color = $("td:eq("+(c+r*7)+")").attr('id');
      if ((color === "red"||color == "blue") && color === prevColor) {
        count ++;
        console.log(count);
        if (count === 3){
          $('h3').text(map[color]+" has won! Refresh your browser to play again!")
          break;
        }
      }
      else {
        count = 0;
      }
    }
  }
}

// Diagnol Check
function dcheck(){
  for (r=1; r<6; r++){
    var count = 0;
    for (c=r; c<7; c++){
      var prevColor = $("td:eq("+(c-1+(r-1)*7)+")").attr('id');
      var color = $("td:eq("+(c+r*7)+")").attr('id');
      if ((color === "red"||color == "blue") && color === prevColor) {
        count ++;
        console.log(count);
        if (count === 3){
          $('h3').text(map[color]+" has won! Refresh your browser to play again!")
          break;
        }
      }
      else {
        count = 0;
      }
    }
  }
}
