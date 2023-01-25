import "./App.css";
import React, { useEffect, useState } from "react";
import generateBoard from "./generateBoard";

function App() {
  const [board, setBoard] = useState([]);
  const cr = Object.keys(board);

  useEffect(() => {
    setBoard(generateBoard(15));
  }, []);

  function onClick(ev) {
    console.log(ev.target.value);
  }

  return (
    <div className="App">
      <div>hello world!</div>
      {board
        ? cr.map((r) => {
            return (
              <div>
                {cr.map((c) => {
                  return board[c] ? (
                    <button onClick={onClick} value={board[c][r]}>
                      ' '
                    </button>
                  ) : (
                    ""
                  );
                })}
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default App;
