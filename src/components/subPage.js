import React, {useEffect} from "react";
import DefaultWrapper from "./defaultWrapper";

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; 

function SubPage(props) {

    //Parallax
    gsap.registerPlugin(ScrollTrigger);
    
    useEffect(() => {
        gsap.to(".home-img h1"  , {
            scrollTrigger: {
                trigger: "#header",
                start: "top top",
                end: "+=450",
                toggleActions: "play none none reset",
                scrub: true
            },
            ease: "none",
            paddingTop: "370px"
        });
    });

    return <DefaultWrapper id={props.id}>
        <div className="home-img" style={{
            backgroundImage: `url(${props.homeImg})`
        }}>
            {props.title}
        </div>
        {props.children}
    </DefaultWrapper>;
}

export default SubPage;