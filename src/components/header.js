import React, {useState, useRef, useEffect} from "react";

import LogoIcon from "../assets/icons/logo";
import ChevronIcon from "../assets/icons/chevron";

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import "../style/header.css";
import "../style/responsive/headerburger.css";
import { getLang } from "../utils/languageUtils";

function navigate(href) {
   window.open(href, "_self");
}

function Header() {

   const [mobileActive, setMobileActive] = useState(false);
   
   const headerEl = useRef();

   // Scroll animation
   gsap.registerPlugin(ScrollTrigger);
   
   useEffect(() => {
      gsap.to("#header"  , {
         scrollTrigger: {
            trigger: "#header",
            start: "top top",
            end: "+=150",
            toggleActions: "play none none reset",
            scrub: true
         },
         ease: "power2",
         paddingTop: "20px",
         paddingBottom: "20px"
      });

      gsap.to("#header .logo svg"  , {
         scrollTrigger: {
            trigger: "#header",
            start: "top top",
            end: "+=150",
            toggleActions: "play none none reset",
            scrub: true
         },
         ease: "elastic",
         rotation: "90deg"
      });
   });

   let ctx = gsap.context(() => {
    

      gsap.to("#header", {
         scrollTrigger: {
            trigger: "#header",
            start: "top top",
            end: "+=200",
            toggleActions: "play none none reset",
            scrub: true
         }, 
         ease: "none",
         color: "red",
         paddingBottom: "20px"
      });
      
    }, headerEl);

    return <header ref={headerEl} id="header" className={mobileActive ? "active" : ""}>
         <div className="logo">
            <LogoIcon/>
            <span>Cuodex</span>
         </div>
         <div className="burger" onClick={() => {setMobileActive(true);}}>
            <div className="line"/>
            <div className="line"/>
            <div className="line"/>
         </div>
         <ul>
            <div className="close-icon" onClick={() => {setMobileActive(false)}}>
               <ChevronIcon/>
            </div>
            <li onClick={() => {navigate("/home");}}>{getLang("home.title")}</li>
            <li onClick={() => {navigate("/passx");}}>{getLang("passx.title")}</li>
            <li onClick={() => {navigate("/contact")}}>{getLang("contact.title")}</li>
         </ul>
    </header>;
}

export {navigate}
export default Header;