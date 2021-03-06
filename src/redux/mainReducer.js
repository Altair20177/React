import { authAPI, profileAPI, usersAPI } from "../API/API";

const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";

let initialState = {
    allPosts: [
        {id: 1, likes: 3, text: "Happy New Year! And Merry Christmas!", image: "https://www.blast.hk/attachments/64805/" },
        {id: 2, likes: 1, text: "It was a good day, honey :)", image: "https://i.imgur.com/gqJvKwW.png" },
        {id: 3, likes: 7, text: "Why are you running, man?!", image: "https://krasivosti.pro/uploads/posts/2021-07/1625877530_26-krasivosti-pro-p-kot-v-adidase-koti-krasivo-foto-29.jpg" },
    ],
    postText: "",
    profile: null,
    status: "",
}

const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 4,
                likes: 0,
                text: state.postText,
                image: "https://www.blast.hk/attachments/64805/"
            };
            if (state.postText !== "") {
                state.allPosts.push(newPost);
            }
            return {
                ...state,
                postText: "",
                allPosts: [...state.allPosts],
            }

        case CHANGE_POST_TEXT:
            return {
                ...state,
                postText: action.newText,
            }

        case SET_USER_PROFILE:
            return{
                ...state,
                profile: action.profile,
            }
        case SET_USER_STATUS:
            return{
                ...state,
                status: action.status,
            }
        default:
            return state;
    }
}

export const addPostAction = () => ({type: ADD_POST});
export const changePostTextAction = (updateText) => ({type: CHANGE_POST_TEXT, newText: updateText});
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = status => ({type: SET_USER_STATUS, status});

export const setUserThunkCreator = (userID) => {
    return dispatch => {
        if(!userID){
            authAPI.authUser().then(response => {
                usersAPI.setUser(response.data.id).then(data => dispatch(setUserProfile(data)));
            });
        } 
        else {
            usersAPI.setUser(userID).then(data => dispatch(setUserProfile(data)));
        }
    }
}

export const getUserStatusThunkCreator = (userID) => {
    return dispatch => {
        if(!userID){
            authAPI.authUser().then(response => {
                profileAPI.getStatus(response.data.id).then(data => {dispatch(setUserStatus(data))});
            });
        }
        else {
            profileAPI.getStatus(userID).then(data => {dispatch(setUserStatus(data))});
        }
    }
}

export const updateUserStatusThunkCreator = (status) => {
    return dispatch => {
        debugger
        profileAPI.updateStatus(status).then(response => {
            if(response.resultCode === 0){
                dispatch(setUserStatus(status))
            }
        })
    }
}

export default mainReducer;