import {applyMiddleware, combineReducers, createStore} from "redux";
import messagesReducer from "./messagesReducer";
import mainReducer from "./mainReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    mainPage: mainReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store;