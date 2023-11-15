import React, { useEffect } from "react";
import DefaultWrapper from "../../components/defaultWrapper";

import PlaneIcon from "../../assets/icons/plane";
import PlaneElement from "./planeElement";

import "./error.css";
import CloudElement from "./cloudElement";
import { useNavigate, useParams } from "react-router-dom";
import { getLang, langExists } from "../../utils/languageUtils";
import CloudLayer1 from "../../assets/icons/cloudLayer1";
import CloudLayer2 from "../../assets/icons/cloudLayer2";

function ErrorPage(props) {

    const navigate = useNavigate();
    var { id } = useParams();

    useEffect(() => {
        if(!langExists("error." + id + ".title")) {
            navigate("/error/404");
        }
    });

    return <DefaultWrapper noheader id="error-wrapper">
    <section id="error">
        <div className="inner-container">
            <h2>{id}: {getLang("error." + id + ".title")}</h2>
            <h3>{getLang("error." + id + ".desc")}</h3>
            <div className="animation">
                <PlaneElement/>
                
                <div className="cloud-layer top first"><CloudLayer1/></div>
                <div className="cloud-layer bottom first"><CloudLayer2/></div>
                <div className="cloud-layer top second"><CloudLayer1/></div>
                <div className="cloud-layer bottom second"><CloudLayer2/></div>
            </div>
            <button className="button-1" onClick={() => {navigate("/home");}}><a>zur Home-Seite</a></button>
        </div>
    </section>
    </DefaultWrapper>;
}

export default ErrorPage;