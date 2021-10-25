import {combineReducers, createStore} from "redux";
import messagesReducer from "./messagesReducer";
import mainReducer from "./mainReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    mainPage: mainReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

let store = createStore(reducers);
let obj = store.getState();

export default store;