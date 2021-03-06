import { authAPI } from "../API/API";

const SET_AUTH_USER_DATA = "SET-USER-DATA";

let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_AUTH_USER_DATA:
            return{
                ...state,
                ...action.data,
                isAuth: true,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userID, email, login) => ({type: SET_AUTH_USER_DATA, data: {userID, email, login}})

export const authThunkCreator = () => {
    return dispatch => {
        authAPI.authUser().then(response => {
            if(response.resultCode === 0){
                dispatch(setAuthUserData(response.data.id, response.data.email, response.data.login));
            }
        })
    }
}

export default authReducer;