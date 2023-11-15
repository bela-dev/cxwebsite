import React, {useEffect} from "react";

import Loader from "../components/loader";
import Header from "../components/header";
import Footer from "../components/footer";
   

function DefaultWrapper(props) {



    return <div id={props.id} className="wrapper">
        
        <Loader/>
        {props.noheader ? <></> : <><Header/>
        <div className="header-placeholder"/></>}
        {props.children}
        <Footer/>
    </div>;
}

export default DefaultWrapper;