import "./App.css";
import React, { useEffect, useState } from "react";
import generateBoard from "./generateBoard";

function App() {
  const [board, setBoard] = useState([]);
  const cr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    setBoard(generateBoard());
  }, []);

  function onClick(ev) {
    //if its your first click
    //if you click a mine
    //if you click a number
    //if you've completed board
  }

  return (
    <div className="App">
      <div>hello world!</div>
      {board
        ? cr.map((r) => {
            return cr.map((c) => {
              return <button>{JSON.stringify(board[r][c])}</button>;
            });
          })
        : ""}
    </div>
  );
}

export default App;
