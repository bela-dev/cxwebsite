import React, {useState} from "react";

import "../style/defaultDropdown.css";
import ChevronIcon from "../assets/icons/chevron";

function DefaultDropdown(props) {

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(-1);

    function updateSelected(i) {
        setSelected(i);
        props.onChange(props.options[i]);
    }

    return <>
        {props.label ? <label className="default-input-label">{props.label}</label> : ""}<div className="default-dropdown">
        <div className={"dropdown" + (open ? " open" : "")} onClick={() => (setOpen(!open))}>
            <h3 className={selected == -1 ? "default" : ""}>{selected != -1 ? props.options[selected] : props.options[props.default]}</h3>
            <ChevronIcon down={!open} up={open}/>
            <ul>
                {props.options.map((e, i) => {
                    return <li onClick={() => {updateSelected(i);}}>{e}</li>;
                })}
            </ul>
        </div>
    </div></>;
}

export default DefaultDropdown;