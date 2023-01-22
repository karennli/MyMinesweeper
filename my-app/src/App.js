import "./App.css";
import React, { useEffect, useState } from "react";
import generateBoard from "./generateBoard";

function App() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    setBoard = generateBoard();
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
    </div>
  );
}

export default App;
