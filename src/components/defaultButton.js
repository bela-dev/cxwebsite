import React from "react";

import ArrowTilt from "../assets/icons/arrow-tilt";

import "../style/defaultButton.css";

function DefaultButton(props) {
    return <button className="blue-btn" onClick={props.href ? () => {
        window.open(props.href, "_blank");
    } : () => {}}>
        {props.children}
        {props.link ? <ArrowTilt/> : <></>}
    </button>;
}

export default DefaultButton;