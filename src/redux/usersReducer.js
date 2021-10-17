const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SHOW_MORE = "SHOW-MORE";
const SET_USERS = "SET-USERS";

let initialState = {
    users: [
        { id: 1, userAvat: "https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg", followed: false, fullName: "Timoshenko I.", status: "Born at 0 years", country: "Belarus", city: "Korma" },
        { id: 2, userAvat: "https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg", followed: true, fullName: "Vladislav K.", status: "Perfect investor in future", country: "Belarus", city: "Rechitsa" },
        { id: 3, userAvat: "https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg", followed: false, fullName: "Alexey P.", status: "I am the best in all aspects!!", country: "Belarus", city: "Novopolotsk" },
        { id: 4, userAvat: "https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg", followed: false, fullName: "Sidorenko D.", status: "Man... Dude... Do you know who am I?!?", country: "Belarus", city: "Elsk" },
    ]
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
            return{...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = userID => ({ type: FOLLOW, userID });
export const unfollowAC = userID => ({ type: UNFOLLOW, userID });
export const setUsersAC = users => ({type: SET_USERS, users});
export const showMore = () => ({ type: SHOW_MORE })

export default usersReducer;