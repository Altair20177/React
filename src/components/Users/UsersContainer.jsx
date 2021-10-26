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

/* export let flag = () => {
    if(this.props.isFetching === true)
        return true 
        else return false
};
 */

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

/*         props.setUsers([
            { id: 1, userAvat: "https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg", followed: false, fullName: "Timoshenko I.", status: "Born at 0 years", country: "Belarus", city: "Korma" },
            { id: 2, userAvat: "https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg", followed: true, fullName: "Vladislav K.", status: "Perfect investor in future", country: "Belarus", city: "Rechitsa" },
            { id: 3, userAvat: "https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg", followed: false, fullName: "Alexey P.", status: "I am the best in all aspects!!", country: "Belarus", city: "Novopolotsk" },
            { id: 4, userAvat: "https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg", followed: false, fullName: "Sidorenko D.", status: "Man... Dude... Do you know who am I?!?", country: "Belarus", city: "Elsk" },
        ]); */