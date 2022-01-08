import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/img/usersPhoto.jpg";
import s from "../../styles/Users.module.css";

let Users = props => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }
    pages.push(pagesCount);

    return (
        <div>
            <div className={s.pagination}>
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p ? s.active : s.nonactive}
                        onClick={() => { props.onPageChanged(p) }} >{p}</span>
                })}
            </div>

            <div className={s.allUsers}>
                {
                    props.users.map(user =>
                        <div key={user.id} className={s.userProfile}>
                            <div className="avat-btn">
                                <NavLink to={"/profile/" + user.id}>

                                    <img src={user.photos.small ? user.photos.small : userPhoto} className={s.avat}></img>
                                </NavLink>
                                <div>
                                    {
                                        user.followed ?
                                            <button className={s.btn} disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {

                                                props.unfollowUserThunkCreator(user.id);

                                                }}>Unfollow</button> :
                                            <button className={s.btn} disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {

                                                props.followUserThunkCreator(user.id);
                                            
                                            }}>Follow</button>
                                    }
                                </div>
                            </div>
                            <div className={s.content}>
                                <div className={s.nameStatus}>
                                    <div className={s.fullName}>{user.name}</div>
                                    <div className={user.status ? s.statusYes : s.statusNo}>{user.status}</div>
                                </div>
                                <div className={s.countryCity}>
                                    <div className={s.country}>{user.country}</div>
                                    <div className={s.city}>{user.city}</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className="show__more"></div>
        </div>
    )
}

export default Users;

/*         props.setUsers([
            { id: 1, userAvat: "https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg", followed: false, fullName: "Timoshenko I.", status: "Born at 0 years", country: "Belarus", city: "Korma" },
            { id: 2, userAvat: "https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg", followed: true, fullName: "Vladislav K.", status: "Perfect investor in future", country: "Belarus", city: "Rechitsa" },
            { id: 3, userAvat: "https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg", followed: false, fullName: "Alexey P.", status: "I am the best in all aspects!!", country: "Belarus", city: "Novopolotsk" },
            { id: 4, userAvat: "https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg", followed: false, fullName: "Sidorenko D.", status: "Man... Dude... Do you know who am I?!?", country: "Belarus", city: "Elsk" },
        ]); */