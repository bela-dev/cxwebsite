import React from "react";
import DefaultWrapper from "../../components/defaultWrapper";

import passxDevices from "../../assets/img/passx/passx-devices.svg";
import passxEnc from "../../assets/img/passx/passx-encryption.svg";
import passxUi from "../../assets/img/passx/passx-interface.svg";

import backgroundPassx from "../../assets/img/background-passx.jpg";
import { getLang } from "../../utils/languageUtils";
import DefaultButton from "../../components/defaultButton";
import SubPage from "../../components/subPage";

function PassX() {
    return <SubPage id="passx" homeImg={backgroundPassx} title={<>
        <h1>PassX</h1>
        <button className="button-1" onClick={() => {window.open("https://passx.cuodex.net", "_blank");}}><a>{getLang("passx.button")}</a></button>
    </>}>

        <section id="about">
            <h1>{getLang("passx.about.title")}</h1>
            <p>{getLang("passx.about.text")}</p>
        </section>

        <section id="what">
            <div className="box">
                <h2>{getLang("passx.what.ui")}</h2>
                <div className="inner-box">
                    <img src={passxUi}/>
                </div>
            </div>
            <div className="box">
                <h2>{getLang("passx.what.enc")}</h2>
                <div className="inner-box">
                    <img src={passxEnc}/>
                </div>
            </div>
            <div className="box">
                <h2>{getLang("passx.what.sync")}</h2>
                <div className="inner-box">
                    <img src={passxDevices}/>
                </div>
            </div>
        </section>

        <section id="developer">
            <h1>{getLang("passx.dev.title")}</h1>
            <p>{getLang("passx.dev.text")}</p>
        </section>

        <section id="test">
            <h1>{getLang("passx.test.title")}</h1>
            <div className="box-space three">
                <div className="box">
                    <h2>PassX Web-Anwendung</h2>
                    <DefaultButton link href="https://passx.cuodex.net">Zu PassX</DefaultButton>
                </div>
                <div className="box">
                    <h2>Quellcode Client</h2>
                    <DefaultButton link href="https://github.com/CuodeX/PassX-Webclient">Zu Github</DefaultButton>
                </div>
                <div className="box">
                    <h2>Quellcode API</h2>
                    <DefaultButton link href="https://github.com/DevOFVictory/passx-api">Zu Github</DefaultButton>
                </div>
            </div>
        </section>
    </SubPage>;
}

export default PassX;