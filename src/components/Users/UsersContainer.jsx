import React from "react";
import { connect } from "react-redux";
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../API/API";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onPageChanged = p => {
        this.props.setCurrentPage(p);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(p, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                users={this.props.users} />
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
    }
}

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