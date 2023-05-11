import React from "react";
import { Route, Routes } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import "./App.scss";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element="la" />
      </Routes>
    </div>
  );
}

export default App;
