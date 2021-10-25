import React from "react";
import { Redirect } from "react-router";
import c from "../../styles/Messages.module.css";
import Contact from "./Contact";
import OnlyMessages from "./OnlyMessages";

const Messages = (props) => {
    let showInterlocutors = props.messagesPage.allInterlocutors.map(inter => <Contact name={inter.name} key={inter.id} id={inter.id}/>);
    let showMessages = props.messagesPage.allMessages.map(mess => <OnlyMessages text={mess.text} key={mess.id}/>)

    let newMessLink = React.createRef();

    let addNewMess = () => {
        props.sendMess();
    }

    let changeMessText = () => {
        let changeText = newMessLink.current.value;
        props.updateMessText(changeText);
    }

    if(!props.isAuth) return <Redirect to="/login"/>

    return(
        <div className={c.wrapper}>
            <div className={c.messages}>
                {showMessages}
                <textarea onChange={changeMessText} ref={newMessLink} value={props.messageText} type="text" />
                <button onClick={addNewMess}>Send</button>
            </div>
            <div className={c.line}></div>
            <div className={c.contacts}>
                <p className={c.interlocutors}>Interlocutors</p>
                {showInterlocutors}
            </div>
        </div>
    )
}

export default Messages;