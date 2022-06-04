import "./index.css"
import Window from "./Windows";
import React from "react";

export default function App() {
  var [show, setShow] = React.useState(false);

  function run() {
    setShow(function () {
      return !show;
    });
  }
  return (
    <div className="App">
      <button onClick={run}>Window Size Tracker</button>
      {show && <Window />}
    </div>
  );
}
