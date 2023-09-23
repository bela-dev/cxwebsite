import React from "react";

import InstagramIcon from "../assets/icons/instagram";
import MailIcon from "../assets/icons/mail";
import TwitterIcon from "../assets/icons/twitter";

import "../style/footer.css";
import { INSTAGRAM_LINK } from "../assets/content/links";
import { navigate } from "./header";

function Footer() {

    return <footer>
        <div className="row">
            <h4>Kontakt</h4>
            <p><a href="mailto:info@cuodex.net">info@cuodex.net</a></p>
        </div>
        <div className="row">
            <h4>Projekte</h4>
            <p onClick={() => {navigate("/passx")}}>Passx</p>
            <p onClick={() => {navigate("/limeboard")}}>Limeboard</p>
        </div>
        <div className="row">
            <h4>Rechtliches</h4>
            <p>Nutzungsbedingungen</p>
            <p>Datenschutzrichtlinien</p>
            <p>Impressum</p>
        </div>
        <div className="row last">
            <h4>cuodex.net 2023</h4>
            <div className="icons">
                <div className="icon" onClick={() => {window.open(INSTAGRAM_LINK, "_blank")}}><InstagramIcon/></div>
                <div className="icon" ><TwitterIcon/></div>
                <div className="icon"><MailIcon/></div>
            </div>
        </div>
    </footer>;
}

export default Footer;