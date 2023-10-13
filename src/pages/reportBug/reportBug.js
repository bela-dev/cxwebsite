import React, { useState } from "react";

import DefaultWrapper from "../../components/defaultWrapper";
import DefaultInput from "../../components/defaultInput";

import "./reportBug.css";
import DefaultButton from "../../components/defaultButton";
import DefaultDropdown from "../../components/defaultDropdown";
import { getLang } from "../../utils/languageUtils";

function ReportBug() {

    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const [title, setTitle] = useState("");
    const [email, setEmail] = useState("");
    const [app, setApp] = useState("");
    const [description, setDescription] = useState("");

    function send() {
        if(!(title && email && app && description)) {
            setError("Please fill in all fields");
            return;
        }
        if(!email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )) {
            setError("Your email is not valid!");
            return;
          }
        fetch("https://api.cuodex.net/website/sendmail.php", {
            method: "POST",
            body: JSON.stringify({
                "msg": "Bug Message for the application: " + app + "\r\n\r\n" + description,
                "subject": "Bug Report: " + title,
                "mail": email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.status === 200) {
                setSuccess(data.msg);
                setError("");
            }else {
                setError(data.msg);
            }
        })
        .catch((err) => {
            setError(err);
        });
    }

    return <DefaultWrapper id="reportBug">
        <section id="report-bug-form">
            <h1>{getLang("report-bug.title")}</h1>
            <h2 className={error ? "error" : ""}>{error ? error : success}</h2>
            <DefaultInput placeholder={getLang("report-bug.placeholder.title")} label={getLang("report-bug.label.title")} onChange={setTitle}/>
            <DefaultDropdown default={2} options={["Passx", "Website", getLang("report-bug.placeholder.app")]} onChange={setApp} label={getLang("report-bug.label.app")}/>
            <DefaultInput placeholder={getLang("report-bug.placeholder.email")} type="email" onChange={setEmail} label={getLang("report-bug.label.email")}/>
            <DefaultInput placeholder={getLang("report-bug.placeholder.desc")} textarea onChange={setDescription} label={getLang("report-bug.label.desc")}/>
            <DefaultButton onClick={send}>Send</DefaultButton>
        </section>
    </DefaultWrapper>
}

export default ReportBug;