import React from "react";
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom";

import "./style/colors.css";
import "./style/fonts.css";
import "./style/master.css";

import "./style/responsive/smallpc.css";
import "./style/responsive/bigtablet.css";

import Limeboard from "./pages/limeboard/limeboard";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";
import PassX from "./pages/passx/passx";
import ReportBug from "./pages/reportBug/reportBug";

function App() {

  return (
      <>

          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Navigate to={"home"}/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/passx" element={<PassX/>}/>
                <Route path="/limeboard" element={<Limeboard/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/report-bug" element={<ReportBug/>}/>
              </Routes>
          </BrowserRouter>
      </>

  );
}

export default App;
