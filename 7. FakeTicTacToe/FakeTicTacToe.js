function RandColor(){
  var colorCode = "0123456789ABCDEF"
  var color = "#";
  for (i=0; i<6; i++){
    color += colorCode[Math.floor(Math.random()*16)];
  }
  // var header = document.querySelector("h1");
  // header.style.color = color;
  document.querySelector("h1").style.color = color
}

setInterval("RandColor()", 1000);

var cells = document.querySelectorAll("td");
var restart = document.querySelector("button");
for (cell of cells) {
  cell.addEventListener("click", function(){
    if (this.textContent === "") {
      this.textContent = "X"
      }
    else if (this.textContent === "X"){
      this.textContent = "O";
    }
    else {
      this.textContent = "";
    };
  })
}
restart.addEventListener("click", function(){
  for (cell of cells) {
    cell.textContent = ""
  }
})
