import React from "react";
import { connect } from "react-redux";
import { setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,
    getUsersThunkCreator, unfollowUserThunkCreator, followUserThunkCreator } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { authRedirect } from "../../HOC/authRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = p => {
        this.props.getUsersThunkCreator(p, this.props.pageSize);
        this.props.setCurrentPage(p);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users} 
                followingInProgress={this.props.followingInProgress}
                unfollowUserThunkCreator={this.props.unfollowUserThunkCreator}
                followUserThunkCreator={this.props.followUserThunkCreator}
                />
        </>
    }
}

let stateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose(
    connect(stateToProps, {
        setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,
        getUsersThunkCreator, unfollowUserThunkCreator, followUserThunkCreator,
    }),
    authRedirect
)(UsersContainer)