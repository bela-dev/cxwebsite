import React, { useEffect, useRef, useState } from "react";

import CloudIcon from "../../assets/icons/cloud";

const HEIGHT_LEVEL = [
    [10, 60],
    [70, 100],
    [110, 130],
    [140, 210],
    [240, 300]
];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CloudElement(props) {
    const cloudElement = useRef();
    const [position, setPosition] = useState();
    const [alreadySpawned, setAlreadySpawned] = useState(false);

    function spawn() {
        if(!cloudElement.current) return;
        cloudElement.current.style.display = "block";
        cloudElement.current.classList.remove("animated");
        setPosition(100);
        cloudElement.current.classList.add("animated");
        cloudElement.current.style.marginTop = (getRandomNumber(HEIGHT_LEVEL[props.height][0], HEIGHT_LEVEL[props.height][1])) + "px";
        cloudElement.current.style.zIndex = (getRandomNumber(4, 7));
    }

    useEffect(() => {
        if(!alreadySpawned) {
            setAlreadySpawned(true);
            cloudElement.current.style.display = "none";
            cloudElement.current.style.animationDelay = "-" + props.time + "s";
            setTimeout(function() {
                spawn();
                setInterval(spawn, 10 * 1000);
            }, 100);
        }
    });

    return <div className="cloud" ref={cloudElement} style={{
        marginLeft: position + "%"
    }}><CloudIcon/></div>;
}

export default CloudElement;