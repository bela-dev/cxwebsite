import React from "react";

import ArrowTilt from "../assets/icons/arrow-tilt";

import "../style/defaultButton.css";

function DefaultButton(props) {
    return <button className="blue-btn" onClick={props.onClick ? props.onClick : props.href ? () => {
        window.open(props.href, (props.sametab ? "_self" : "_blank"));
    } : () => {}}>
        {props.children}
        {props.link ? <ArrowTilt/> : <></>}
    </button>;
}

export default DefaultButton;