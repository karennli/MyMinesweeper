function onClick(ev) {
  //if its your first click
  //if you click a mine
  //if you click a number
  //if you've completed board
}

function generateBoard() {
  const board = new Map();
  //empty matrix
  for (var i = 0; i < 10; i++) {
    let obj = {
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
    };
    board.set(i, { ...obj });
  }
  //populate with mines
  const mines = mineLocations();
  for (let i of mines) {
    const firstIndex = i[0];
    const secondIndex = i[1];
    let value = board.get(firstIndex);
    board.set(firstIndex, { ...value, [secondIndex]: "mine" });
  }

  //populate with nums
  for (let i of board) {
  }

  return board;
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
