import profileReducer from "./mainReducer";
import messagesReducer from "./messagesReducer";

let store = {
    _rerenderTree() { },
    _state: {
        messagesPage: {
            allInterlocutors: [
                { name: "Maksim", id: "1" },
                { name: "Dmitriy", id: "2" },
                { name: "Kirill", id: "3" },
                { name: "Alexey", id: "4" },
                { name: "Vladislav", id: "5" },
                { name: "Ilya", id: "6" },
            ],
            allMessages: [
                { text: "hghkjhjlkjl" },
                { text: "hghkjhjlkjl" },
                { text: "hghkjhjlkjl" },
                { text: "hghkjhjlkjl" },
                { text: "hghkjhjlkjl" },
            ],
            messageText: "",
        },
        mainPage: {
            allPosts: [
                { likes: 3, text: "Happy New Year! And Merry Christmas!", image: "https://www.blast.hk/attachments/64805/" },
                { likes: 1, text: "It was a good day, honey :)", image: "https://i.imgur.com/gqJvKwW.png" },
                { likes: 7, text: "Why are you running, man?!", image: "https://krasivosti.pro/uploads/posts/2021-07/1625877530_26-krasivosti-pro-p-kot-v-adidase-koti-krasivo-foto-29.jpg" },
            ],
            postText: "",
        }
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderTree = observer;
    },
    dispatch(action){
        this._state.mainPage = profileReducer(this._state.mainPage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

        this._rerenderTree(this._state);
    },
};

export default store;