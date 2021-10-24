import React from "react";
import { connect } from "react-redux";
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = p => {
        this.props.setCurrentPage(p);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users totalUsersCount ={this.props.totalUsersCount}
        pageSize = {this.props.pageSize}
        currentPage = {this.props.currentPage}
        onPageChanged = {this.onPageChanged}
        unfollow = {this.props.unfollow}
        follow = {this.props.follow}
        users = {this.props.users}/>
        </>
    }
}

/* export let flag = () => {
    if(this.props.isFetching === true)
        return true 
        else return false
};
 */

let stateToProps = state =>{
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

/* let dispatchToProps = dispatch =>{
    debugger
    return{
        follow: userID => {
            dispatch(followAC(userID))
        },
        unfollow: userID => {
            dispatch(unfollowAC(userID))
        },
        setUsers: users => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: currPage =>{
            dispatch(setCurrentPageAC(currPage))
        },
        setTotalUsersCount: totalUsersCount =>{
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        toggleIsFetching: isFetching =>{
            dispatch(toggleIsFetchingAC(isFetching))
        },
    }
} */

export default connect(stateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainer);

/*         props.setUsers([
            { id: 1, userAvat: "https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg", followed: false, fullName: "Timoshenko I.", status: "Born at 0 years", country: "Belarus", city: "Korma" },
            { id: 2, userAvat: "https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg", followed: true, fullName: "Vladislav K.", status: "Perfect investor in future", country: "Belarus", city: "Rechitsa" },
            { id: 3, userAvat: "https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg", followed: false, fullName: "Alexey P.", status: "I am the best in all aspects!!", country: "Belarus", city: "Novopolotsk" },
            { id: 4, userAvat: "https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg", followed: false, fullName: "Sidorenko D.", status: "Man... Dude... Do you know who am I?!?", country: "Belarus", city: "Elsk" },
        ]); */