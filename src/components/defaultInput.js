import React from "react";

import "../style/defaultInput.css";

function DefaultInput(props) {
    var elProps = {
        placeholder: props.placeholder,
        onChange: (e) => {props.onChange(e.target.value)},
        type: props.type ? props.type : "text",
        className: "default-input"
    }
    var inputEl = React.cloneElement(<input/>, elProps);
    if(props.textarea) {
        inputEl = React.cloneElement(<textarea/>, elProps);
    }
    return <>
    {props.label ? <label className="default-input-label">{props.label}</label> : ""}
    {inputEl}
    </>;
}

export default DefaultInput;