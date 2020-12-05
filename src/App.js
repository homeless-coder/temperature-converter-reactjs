import React, { useState, useEffect } from "react";
import { Navbar, Footer, Converter } from "./components";
import "./App.css";

function App() {
  const [celsius, setCelsius] = useState("");
  const [farenheit, setFarenheit] = useState("");

  const onHandleConvert = (e) => {
    let result;
    let value = e.target.value;

    if(e.target.id === "celsius"){
      setCelsius(value)
      if(isNaN(value)) return;
      result = Number(value) * (9/5) + 32;
      setFarenheit(result);
    } else {
      setFarenheit(value);
      if(isNaN(value)) return;
      result = (Number(value) - 32) * (5/9)
      setCelsius(result);
    }
  }

  return (
    <div className="App">
      <Navbar title="Temperature Converter" />
      <Converter
        celsius={celsius}
        farenheit={farenheit}
        onHandleConvert={onHandleConvert}
      />
      <Footer />
    </div>
  );
}

export default App;
