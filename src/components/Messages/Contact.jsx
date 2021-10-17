import React from "react";
import { NavLink } from "react-router-dom";
import c from "../../styles/Messages.module.css";

function Contact(props){
    return(
        <div className={c.contacts}>
            <NavLink to={"/messages/" + props.id} activeClassName={c.active} className={c.name}>{props.name}</NavLink>
        </div>
    )
}

export default Contact;