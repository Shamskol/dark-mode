import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";
import useDarkMode from "./hooks/useDarkMode";
import {useLocalStorage} from "./hooks/useLocalStorage";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [darkMode, setDarkMode] = useLocalStorage(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
useDarkMode(darkMode)


  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar 
      toggleMode ={toggleMode}
      darkMode = {darkMode}/>
      
      
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
