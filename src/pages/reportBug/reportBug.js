import React, { useState } from "react";

import DefaultWrapper from "../../components/defaultWrapper";
import DefaultInput from "../../components/defaultInput";

import "./reportBug.css";
import DefaultButton from "../../components/defaultButton";
import DefaultDropdown from "../../components/defaultDropdown";

function ReportBug() {

    const [title, setTitle] = useState();
    const [email, setEmail] = useState();
    const [app, setApp] = useState();
    const [description, setDescription] = useState();

    return <DefaultWrapper id="reportBug">
        <section id="report-bug-form">
            <h1>Report a Bug</h1>
            <DefaultInput placeholder="Enter Title" label="Title" onChange={setTitle}/>
            <DefaultDropdown default={2} options={["Passx", "Website", "Other"]} onChange={setApp} label="Choose the Application in which you found the bug"/>
            <DefaultInput placeholder="Enter Email" type="email" onChange={setEmail} label="Email for further questions"/>
            <DefaultInput placeholder="Enter Description" textarea onChange={setDescription} label="Describe the bug you found"/>
            <DefaultButton>Send</DefaultButton>
        </section>
    </DefaultWrapper>
}

export default ReportBug;