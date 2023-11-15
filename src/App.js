import React from "react";
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom";

import "./style/colors.css";
import "./style/fonts.css";
import "./style/master.css";

import "./style/responsive/smallpc.css";
import "./style/responsive/bigtablet.css";
import "./style/responsive/medtablet.css";
import "./style/responsive/smalltablet.css";
import "./style/responsive/phone.css";
import "./style/responsive/bigphone.css";

import Limeboard from "./pages/limeboard/limeboard";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/home";
import PassX from "./pages/passx/passx";
import ReportBug from "./pages/reportBug/reportBug";
import ErrorPage from "./pages/error/error";

function App() {

  return (
      <>

          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Navigate to={"home"}/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/passx" element={<PassX/>}/>
                //*<Route path="/limeboard" element={<Limeboard/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/report-bug" element={<ReportBug/>}/>
                <Route path="/error/:id" element={<ErrorPage/>}/>
                <Route path="*" element={<Navigate to={"error/404"}/>} />
              </Routes>
          </BrowserRouter>
      </>

  );
}

export default App;
