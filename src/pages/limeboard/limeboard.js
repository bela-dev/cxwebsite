import React from "react";
import DefaultWrapper from "../../components/defaultWrapper";
import DefaultButton from "../../components/defaultButton";

import { getLang } from "../../utils/languageUtils";

import passxDevices from "../../assets/img/passx/passx-devices.svg";
import passxEnc from "../../assets/img/passx/passx-encryption.svg";
import passxUi from "../../assets/img/passx/passx-interface.svg";


import backgroundLimeboard from "../../assets/img/background-limeboard.jpg";
import SubPage from "../../components/subPage";

function Limeboard() {
    return <SubPage id="limeboard" homeImg={backgroundLimeboard} title={<>
        <h1>Limeboard</h1>
        <button className="button-1"><a>Discover</a></button>
    </>}>
        <section id="about">
            <h1>{getLang("limeboard.about.title")}</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
        </section>

        <section id="what">
            <div className="box">
                <h2>{getLang("limeboard.what.ui")}</h2>
                <div className="inner-box">
                    <img src={passxUi}/>
                </div>
            </div>
            <div className="box">
                <h2>{getLang("limeboard.what.enc")}</h2>
                <div className="inner-box">
                    <img src={passxEnc}/>
                </div>
            </div>
            <div className="box">
                <h2>{getLang("limeboard.what.sync")}</h2>
                <div className="inner-box">
                    <img src={passxDevices}/>
                </div>
            </div>
        </section>

        <section id="developer">
            <h1>{getLang("limeboard.hardware.title")}</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
        </section>

        <section id="test">
            <h1>{getLang("limeboard.test.title")}</h1>
            <div className="box-space">
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

export default Limeboard;