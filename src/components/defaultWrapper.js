import React from "react";

import Loader from "../components/loader";
import Header from "../components/header";
import Footer from "../components/footer";

function DefaultWrapper(props) {
    return <div id={props.id} className="wrapper">
        <Loader/>
        <Header/>
        {props.children}
        <Footer/>
    </div>;
}

export default DefaultWrapper;