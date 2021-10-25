import { connect } from "react-redux";
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

let AuthRedirectComponent = authRedirect(Messages);

const MessagesContainer = connect(stateToProps, dispatchToProps)(AuthRedirectComponent)

export default MessagesContainer;