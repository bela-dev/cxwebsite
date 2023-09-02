import React from "react";
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom";

import Home from "./home/home";
import PassX from "./passx/passx";

import "./style/colors.css";
import "./style/fonts.css";
import "./style/master.css";

import "./style/responsive/smallpc.css";
import "./style/responsive/bigtablet.css";

function App() {

  return (
      <>

          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Navigate to={"home"}/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/passx" element={<PassX/>}/>
              </Routes>
          </BrowserRouter>
      </>

  );
}

export default App;
