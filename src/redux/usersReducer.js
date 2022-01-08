import { usersAPI } from "../API/API";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";

let initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            }
        case SET_USERS:
            return{...state, users: action.users}
        case SET_CURRENT_PAGE:
            return{...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return{...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return{...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state, 
                followingInProgress: action.followingInProgress 
                ? [...state.followingInProgress, action.userID ]
                : state.followingInProgress.filter(id => id !== action.userID)
            }
        default:
            return state;
    }
}

export const follow = userID => ({ type: FOLLOW, userID });
export const unfollow = userID => ({ type: UNFOLLOW, userID });
export const setUsers = users => ({type: SET_USERS, users});
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = totalUsersCount => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgress = (followingInProgress, userID) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userID});

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return(dispatch) => {
        dispatch(toggleIsFetching(true));
    
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const unfollowUserThunkCreator = (userID) => {
    return dispatch => {
        
        dispatch(toggleIsFollowingProgress(true, userID));
        usersAPI.unfollowUser(userID).then(data => {
            if(data.resultCode === 0){
                dispatch(unfollow(userID))
            }
            dispatch(toggleIsFollowingProgress(false, userID));
        })
    }
}

export const followUserThunkCreator = (userID) => {
    return dispatch => {
        
        dispatch(toggleIsFollowingProgress(true, userID));
        usersAPI.followUser(userID).then(data => {
            if(data.resultCode === 0){
                dispatch(follow(userID))
            }
            dispatch(toggleIsFollowingProgress(false, userID));
        })
    }
}

export default usersReducer;