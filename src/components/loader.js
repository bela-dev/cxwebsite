import React, {useEffect, useRef} from "react";

import "../style/loader.css";

import LogoIcon from "../assets/icons/logo";

function Loader() {

    const loaderEl = useRef();

    useEffect(() => {
        const onPageLoad = () => {
            setTimeout(() => {
                loaderEl.current.classList.add("out");
            }, 1000);
            setTimeout(() => {
                loaderEl.current.style.display = "none";
            }, 1500);
        };

        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad, false);
            return () => window.removeEventListener('load', onPageLoad);
        }
    }, []);
    
    return <div className="loader" ref={loaderEl}>
        <div className="logo"><LogoIcon/></div>
    </div>;
}

export default Loader;