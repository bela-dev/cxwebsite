import React, {useEffect, useState } from "react"

import DefaultWrapper from "../../components/defaultWrapper";

import passxTitleImg from "../../assets/img/projects/passx.png";
import comingSoonTitleImg from "../../assets/img/projects/comingsoon.png";
import backgroundMountain from "../../assets/img/background-mountain.png";
import malteImg from "../../assets/img/team/malte.png";
import belaImg from "../../assets/img/team/bela.png";
import jormaImg from "../../assets/img/team/jorma.png";


import InstagramIcon from "../../assets/icons/instagram";
import MailIcon from "../../assets/icons/mail";
import GlobeIcon from "../../assets/icons/globe";
import FileIcon from "../../assets/icons/file";
import TwitterIcon from "../../assets/icons/twitter";

import "./home.css";
import { getLang } from "../../utils/languageUtils";
import SubPage from "../../components/subPage";
import CodeTagIcon from "../../assets/icons/codetag";

function Home() {

    return <SubPage id="home" homeImg={backgroundMountain} title={<>
        <h1>CuodeX - Simple, secure & free</h1>
        <button className="button-1" onClick={() => {window.scrollBy(0, 500);console.log("fasd")}}><a>Discover</a></button>
    </>}>
        

        <section id="about">
            <h1>{getLang("home.about.title")}</h1>
            <p>{getLang("home.about.text")}</p>
        </section>

        <section id="philosophy">
            <h1>{getLang("home.philosophy.title")}</h1>
            <div className="box-space three">
                <div className="box">
                    <h2>{getLang("home.philosophy.safe.title")}</h2>
                    <p className="inner-box">{getLang("home.philosophy.safe.text")}</p>
                </div>
                <div className="box">
                    <h2>{getLang("home.philosophy.free.title")}</h2>
                    <p className="inner-box">{getLang("home.philosophy.free.text")}</p>
                </div>
                <div className="box">
                    <h2>{getLang("home.philosophy.opensource.title")}</h2>
                    <p className="inner-box">{getLang("home.philosophy.opensource.text")}</p>
                </div>
            </div>
        </section>

        <section id="projects">
            <h1>Projekte</h1>
            <div className="box-space two">
                <div className="box">
                    <h2>Passx</h2>
                    <div className="inner-box">
                        <img src={passxTitleImg}/>
                    </div>
                </div>
                <div className="box">
                    <h2>Limeboard</h2>
                    <div className="inner-box">
                        <img src={comingSoonTitleImg}/>
                    </div>
                </div>
            </div>
        </section>

        <section id="team">
            <h1>Team</h1>
            <div className="box-space three img">
                <div className="box">
                    <h2>Bela</h2>
                    <div className="inner-box">
                        <img src={belaImg}/>
                        <h3>{getLang("home.team.bela.job")}</h3>
                        <p>{getLang("home.team.bela.text")}</p>
                        <div className="icons">
                            <div className="icon" onClick={() => {window.open("mailto:bela@cuodex.net", "_self")}}><MailIcon/></div>
                            <div className="icon" onClick={() => {window.open("https://github.com/bela-dev", "_blank")}}><CodeTagIcon/></div>
                            <div className="icon" onClick={() => {window.open("https://www.instagram.com/belasberge/", "_blank")}}><InstagramIcon/></div>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <h2>Malte</h2>
                    <div className="inner-box">
                        <img src={malteImg}/>
                        <h3>{getLang("home.team.malte.job")}</h3>
                        <p>{getLang("home.team.malte.text")}</p>
                        <div className="icons">
                            <div className="icon" onClick={() => {window.open("mailto:malte@cuodex.net", "_self")}}><MailIcon/></div>
                            <div className="icon" onClick={() => {window.open("https://github.com/devofvictory", "_blank")}}><CodeTagIcon/></div>
                            <div className="icon" onClick={() => {window.open("https://www.instagram.com/malte.tlam/", "_blank")}}><InstagramIcon/></div>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <h2>Jorma</h2>
                    <div className="inner-box">
                        <img src={jormaImg}/>
                        <h3>{getLang("home.team.jorma.job")}</h3>
                        <p>{getLang("home.team.jorma.text")}</p>
                        <div className="icons">
                            <div className="icon" onClick={() => {window.open("mailto:jorma@cuodex.net", "_self")}}><MailIcon/></div>
                            <div className="icon" onClick={() => {window.open("https://instagram.com/jormabissinger", "_blank")}}><InstagramIcon/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </SubPage>;

}

export default Home;