import axios from "axios"

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "8d9ce362-21ea-49f4-9ecf-c6b8ce12e7c7",
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    unfollowUser(userID) {
        return instance.delete(`follow/${userID}`).then(response => response.data);
    },
    followUser(userID){
        return instance.post(`follow/${userID}`, {}).then(response => response.data);
    },

    setUser(userID){
        return profileAPI.getProfile(userID);
    },
}

export const profileAPI= {
    getProfile(userID){
        return instance.get(`profile/${userID}`).then(response => response.data);
    },
    getStatus(userID){
        return instance.get(`profile/status/${userID}`).then(response => response.data);
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status}).then(response => response.data);
    }
}

export const authAPI = {
    authUser(){
        return instance.get('auth/me').then(response => response.data);
    },
}