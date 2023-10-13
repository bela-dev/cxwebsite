import React from "react";
import DefaultWrapper from "../../components/defaultWrapper";
import DefaultButton from "../../components/defaultButton";

import { getLang } from "../../utils/languageUtils";

import backgroundContact from "../../assets/img/background-contact.jpg";
import MailIcon from "../../assets/icons/mail";
import InstagramIcon from "../../assets/icons/instagram";
import GithubIcon from "../../assets/icons/github";
import SubPage from "../../components/subPage";
import { GITHUB_LINK, INSTAGRAM_LINK } from "../../assets/content/links";
import InstagramFilledIcon from "../../assets/icons/instagram-filled";
import MailFilledIcon from "../../assets/icons/mail-filled";

function Contact() {
    return <SubPage id="contact" homeImg={backgroundContact} title={<>
        <h1>{getLang("contact.title")}</h1>
        <button className="button-1" onClick={() => {window.open("mailto:info@cuodex.net", "_self")}}><a>{getLang("contact.button")}</a></button>
    </>}>

        <section id="options">
            <h1>{getLang("contact.options.title")}</h1>
            <div className="box-space three">
                <div className="box">
                    <h2><MailFilledIcon/>info@cuodex.net</h2>
                    <DefaultButton sametab link href="mailto:info@cuodex.net">{getLang("contact.options.mail")}</DefaultButton>
                </div>
                <div className="box bigicon">
                    <h2><InstagramFilledIcon/>@cuodex</h2>
                    <DefaultButton link href={INSTAGRAM_LINK}>{getLang("contact.options.instagram")}</DefaultButton>
                </div>
                <div className="box biggericon">
                    <h2><GithubIcon/>@cuodex</h2>
                    <DefaultButton link href={GITHUB_LINK}>{getLang("contact.options.github")}</DefaultButton>
                </div>
            </div>
        </section>
        
        <section id="bug" className="text">
            <h1>{getLang("contact.bug.title")}</h1>
            <p>{getLang("contact.bug.text")}</p>
            <DefaultButton sametab link href="report-bug">{getLang("contact.bug.btn")}</DefaultButton>
        </section>

        <section id="join" className="text">
            <h1>{getLang("contact.join.title")}</h1>
            <p>{getLang("contact.join.text")}</p>
            <DefaultButton sametab link href="mailto:jobs@cuodex.net">{getLang("contact.join.btn")}</DefaultButton>
        </section>

    </SubPage>
}

export default Contact;