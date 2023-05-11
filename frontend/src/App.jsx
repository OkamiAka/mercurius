import React, { useCallback, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={"la"} />
      </Routes>
    </div>
  );
}

export default App;
