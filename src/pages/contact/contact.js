import React from "react";
import DefaultWrapper from "../../components/defaultWrapper";
import DefaultButton from "../../components/defaultButton";

import { getLang } from "../../utils/languageUtils";

import backgroundContact from "../../assets/img/background-contact.jpg";
import MailIcon from "../../assets/icons/mail";
import InstagramIcon from "../../assets/icons/instagram";
import GithubIcon from "../../assets/icons/github";
import SubPage from "../../components/subPage";

function Contact() {
    return <SubPage id="contact" homeImg={backgroundContact} title={<>
        <h1>Contact</h1>
        <button className="button-1"><a>Discover</a></button>
    </>}>

        <section id="options">
            <h1>{getLang("contact.options.title")}</h1>
            <div className="box-space">
                <div className="box">
                    <h2><MailIcon/>info@cuodex.net</h2>
                    <DefaultButton sametab link href="mailto:info@cuodex.net">{getLang("contact.options.mail")}</DefaultButton>
                </div>
                <div className="box">
                    <h2><InstagramIcon/>@cuodex</h2>
                    <DefaultButton link href="https://www.instagram.com/cuodex/">{getLang("contact.options.instagram")}</DefaultButton>
                </div>
                <div className="box">
                    <h2><GithubIcon/>@cuodex</h2>
                    <DefaultButton link href="https://github.com/CuodeX/">{getLang("contact.options.github")}</DefaultButton>
                </div>
            </div>
        </section>
        
        <section id="bug" className="text">
            <h1>{getLang("contact.bug.title")}</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
            <DefaultButton sametab link href="report-bug">{getLang("contact.bug.btn")}</DefaultButton>
        </section>

        <section id="join" className="text">
            <h1>{getLang("contact.join.title")}</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
            <DefaultButton sametab link href="mailto:jobs@cuodex.net">{getLang("contact.join.btn")}</DefaultButton>
        </section>

    </SubPage>
}

export default Contact;