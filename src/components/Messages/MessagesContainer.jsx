import { connect } from "react-redux";
import { compose } from "redux";
import { authRedirect } from "../../HOC/authRedirect";
import { changeMessTextAction, sendMessAction } from "../../redux/messagesReducer";
import Messages from "../Messages/Messages"

let stateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        messageText: state.messagesPage.messageText,
    }
}

let dispatchToProps = (dispatch) => {
    return {
        sendMess: () => {
            dispatch(sendMessAction())
        },
        updateMessText: (changeText) => {
            dispatch(changeMessTextAction(changeText))
        }
    }
}

export default compose(
    connect(stateToProps, dispatchToProps),
    authRedirect
)(Messages);;