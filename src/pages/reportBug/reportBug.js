import React, { useState } from "react";

import DefaultWrapper from "../../components/defaultWrapper";
import DefaultInput from "../../components/defaultInput";

import "./reportBug.css";
import DefaultButton from "../../components/defaultButton";
import DefaultDropdown from "../../components/defaultDropdown";
import { getLang } from "../../utils/languageUtils";

function ReportBug() {

    const [title, setTitle] = useState();
    const [email, setEmail] = useState();
    const [app, setApp] = useState();
    const [description, setDescription] = useState();

    return <DefaultWrapper id="reportBug">
        <section id="report-bug-form">
            <h1>{getLang("report-bug.title")}</h1>
            <DefaultInput placeholder={getLang("report-bug.placeholder.title")} label={getLang("report-bug.label.title")} onChange={setTitle}/>
            <DefaultDropdown default={2} options={["Passx", "Website", getLang("report-bug.placeholder.app")]} onChange={setApp} label={getLang("report-bug.label.app")}/>
            <DefaultInput placeholder={getLang("report-bug.placeholder.email")} type="email" onChange={setEmail} label={getLang("report-bug.label.email")}/>
            <DefaultInput placeholder={getLang("report-bug.placeholder.desc")} textarea onChange={setDescription} label={getLang("report-bug.label.desc")}/>
            <DefaultButton>Send</DefaultButton>
        </section>
    </DefaultWrapper>
}

export default ReportBug;