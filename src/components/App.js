import React from "react";
import Converter from "./conversor/Converter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Converter valueOne="USD" valueTwo="BRL" />
      </header>
    </div>
  );
}

export default App;
