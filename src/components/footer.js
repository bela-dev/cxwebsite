import React from "react";

import InstagramIcon from "../assets/icons/instagram";
import MailIcon from "../assets/icons/mail";
import TwitterIcon from "../assets/icons/twitter";

import "../style/footer.css";

function Footer() {
    return <footer>
        <div className="row">
            <h4>Kontakt</h4>
            <p>info@cuodex.net</p>
        </div>
        <div className="row">
            <h4>Projekte</h4>
            <p>Passx</p>
            <p>Limeboard</p>
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
                <div className="icon"><InstagramIcon/></div>
                <div className="icon"><TwitterIcon/></div>
                <div className="icon"><MailIcon/></div>
            </div>
        </div>
    </footer>;
}

export default Footer;