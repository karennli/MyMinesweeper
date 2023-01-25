function generateBoard(n) {
  const board = {};
  //empty matrix
  for (let i = 0; i < n; i++) {
    let columns = [];
    for (let k = 0; k < n; k++) {
      columns.push(null);
    }
    const obj = Object.assign({}, columns);
    // let obj = {
    //   0: null,
    //   1: null,
    //   2: null,
    //   3: null,
    //   4: null,
    //   5: null,
    //   6: null,
    //   7: null,
    //   8: null,
    //   9: null,
    // };
    board[i] = { ...obj };
  }
  //populate with mines
  const mines = mineLocations(n);
  for (let i of mines) {
    const firstIndex = i[0];
    const secondIndex = i[1];
    let value = board[firstIndex];
    board[firstIndex] = { ...value, [secondIndex]: "m" };
  }

  //populate with nums
  for (let i of Object.keys(board)) {
    const row = i * 1;
    const rowValue = board[i];
    const columns = Object.keys(rowValue); //0-9
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
      rowValue[j] = rowValue[j] !== "m" ? counter : "m";
      board[row] = { ...rowValue };
    }
  }

  return board;
}

//generate 10 random mine locations
function mineLocations(n) {
  let mines = [];
  for (let i = 1; i <= n; i++) {
    const row = Math.floor(Math.random() * n);
    const column = Math.floor(Math.random() * n);
    if (!mines.includes([row, column])) {
      mines.push([row, column]);
    } else {
      //redo so there are only unique row/column pairs
      i--;
    }
  }
  return mines;
}

export default generateBoard;
