import { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./Components/Home/home";
import axios from "axios";

function App() {
  return (
    <>
      <div className="sticky top-0 bg-[#26435F] py-4 w-full flex items-center justify-center">
        <img alt='Logo' className="logo" src='https://e7.pngegg.com/pngimages/146/805/png-clipart-line-chart-computer-icons-bar-chart-statistics-symbol-miscellaneous-angle-thumbnail.png'/>
        <p className="text-white font-bold text-[20px] ">GraphVerse</p>
      </div>
      <Home />
    </>
  );
}

export default App;
