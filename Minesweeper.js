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
    //i = [0, {obj keys 0-9}]
    const row = i[0];
    const rowValue = { ...i[1] };
    const columns = Object.keys(i[1]); //0-9

    for (let j of columns) {
      j = j * 1; //convert to int
      let counter = 0;
      const search = [
        [row, j - 1],
        [row, j + 1],
        [row - 1, j],
        [row - 1, j - 1],
        [row - 1, j + 1],
        [row + 1, j],
        [row + 1, j - 1],
        [row + 1, j + 1],
      ];
      //if mines array includes any of search, add to counter
      search.map((el) => {
        if (mines.find((mine) => mine[0] === el[0] && mine[1] === el[1])) {
          counter++;
        }
      });
      //set board at i,j to counter if its not a mine
      rowValue[j] = rowValue[j] !== "mine" ? counter : "mine";
      board.set(row, rowValue);
    }
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

console.log(generateBoard());
