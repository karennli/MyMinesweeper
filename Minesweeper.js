let d = new Date();
//document.body.innerHTML = "<h1>Today's date is " + d + "</h1>";

function onClick(ev) {
  //if you click a mine
  if (ev.target.value === "mine") {
  }
  //if you click a number
  else {
    //if you've completed board
    if (0) {
    }
  }
}

function generateBoard() {
  const board = [];
  //empty matrix
  for (var i = 0; i < 10; i++) {
    board[i] = new Array(10);
  }

  //populate with mines
  //populate with nums
}

//generate 10 random mine locations
function mineLocations() {
  let mines = [];
  for (let i = 1; i <= 10; i++) {
    const row = Math.floor(Math.random() * 10);
    const column = Math.floor(Math.random() * 10);
    if (!mines.includes([row, column])) {
      mines.push([row, column]);
    } else {
      //redo so there are only unique row/column pairs
      i--;
    }
  }
  return mines;
}

console.log(mineLocations());
//10x10 board 10 mines, 1/10
