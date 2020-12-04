
import React, { useState } from "react";
import { Navbar, Footer, Converter } from "./components";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Navbar title="Temperature Converter" />
      <Converter />
      <Footer />
    </div>
  );
}

export default App;