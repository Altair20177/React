const SEND_MESS = "SEND-MESS";
const CHANGE_MESS_TEXT = "CHANGE-MESS-TEXT";

let initialState = {
    allInterlocutors: [
        { name: "Maksim", id: 1},
        { name: "Dmitriy", id: 2},
        { name: "Kirill", id: 3},
        { name: "Alexey", id: 4},
        { name: "Vladislav", id: 5},
        { name: "Ilya", id: 6},
    ],
    allMessages: [
        { text: "hghkjhjlkjl", id: 1},
        { text: "hghkjhjlkjl", id: 2 },
        { text: "hghkjhjlkjl", id: 3 },
        { text: "hghkjhjlkjl", id: 4 },
        { text: "hghkjhjlkjl", id: 5 },
    ],
    messageText: "",
}

const messagesReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_MESS_TEXT:
            return {
                ...state,
                messageText: action.newMess,
            }
        case SEND_MESS:
            return {
                ...state,
                messageText: "",
                allMessages: [...state.allMessages, {text: state.messageText, id: 6}],
            };

        default: 
            return state;
    }
}

export const sendMessAction = () => ({type: SEND_MESS});
export const changeMessTextAction = (updateText) => ({type: CHANGE_MESS_TEXT, newMess: updateText});

export default messagesReducer;