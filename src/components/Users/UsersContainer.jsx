import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import Users from "../Users/Users";

let stateToProps = state =>{
    return {
        users: state.usersPage.users,
    }
}

let dispatchToProps = dispatch =>{
    return{
        follow: userID => {
            dispatch(followAC(userID))
        },
        unfollow: userID => {
            dispatch(unfollowAC(userID))
        },
        setUsers: users => {
            dispatch(setUsersAC(users))
        }
    }
}

const usersContainer = connect(stateToProps, dispatchToProps)(Users);

export default usersContainer;