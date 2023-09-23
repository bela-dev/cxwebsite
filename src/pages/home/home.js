import React, {useEffect, useState } from "react"

import DefaultWrapper from "../../components/defaultWrapper";

import backgroundMountain from "../../assets/img/background-mountain.png";
import malteImg from "../../assets/img/team/malte.png";
import belaImg from "../../assets/img/team/bela.png";
import jormaImg from "../../assets/img/team/jorma.png";


import InstagramIcon from "../../assets/icons/instagram";
import MailIcon from "../../assets/icons/mail";
import TwitterIcon from "../../assets/icons/twitter";

import "./home.css";
import { getLang } from "../../utils/languageUtils";
import SubPage from "../../components/subPage";

function Home() {

    return <SubPage id="home" homeImg={backgroundMountain} title={<>
        <h1>CuodeX - Simple, secure & free</h1>
        <button className="button-1"><a>Discover</a></button>
    </>}>
        

        <section id="about">
            <h1>{getLang("home.about.title")}</h1>
            <p>{getLang("home.about.text")}</p>
        </section>

        <section id="philosophy">
            <h1>{getLang("philosophy.title")}</h1>
            <div className="box-space">
                <div className="box">
                    <h2>Sicher</h2>
                    <p className="inner-box">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                </div>
                <div className="box">
                    <h2>Sicher</h2>
                    <p className="inner-box">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                </div>
                <div className="box">
                    <h2>Sicher</h2>
                    <p className="inner-box">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                </div>
            </div>
        </section>

        <section id="projects">
            <h1>Projekte</h1>
            <div className="box-space">
                <div className="box">
                    <h2>Passx</h2>
                    <div className="inner-box">
                        <img src={backgroundMountain}/>
                    </div>
                </div>
                <div className="box">
                    <h2>Limeboard</h2>
                    <div className="inner-box">
                        <img src={backgroundMountain}/>
                    </div>
                </div>
            </div>
        </section>

        <section id="team">
            <h1>Team</h1>
            <div className="box-space three">
                <div className="box">
                    <h2>Bela</h2>
                    <div className="inner-box">
                        <img src={belaImg}/>
                        <h3>Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
                        <div className="icons">
                            <div className="icon"><MailIcon/></div>
                            <div className="icon"><TwitterIcon/></div>
                            <div className="icon"><InstagramIcon/></div>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <h2>Malte</h2>
                    <div className="inner-box">
                        <img src={malteImg}/>
                        <h3>Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
                        <div className="icons">
                            <div className="icon"><MailIcon/></div>
                            <div className="icon"><TwitterIcon/></div>
                            <div className="icon"><InstagramIcon/></div>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <h2>Jorma</h2>
                    <div className="inner-box">
                        <img src={jormaImg}/>
                        <h3>Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
                        <div className="icons">
                            <div className="icon"><MailIcon/></div>
                            <div className="icon"><TwitterIcon/></div>
                            <div className="icon"><InstagramIcon/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </SubPage>;

}

export default Home;