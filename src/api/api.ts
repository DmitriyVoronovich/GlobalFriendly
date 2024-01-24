import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    data: null,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '70000ace-a569-4dfb-a311-f8d6e3694d6a'
    }
});

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}

export const followAPI = {
    unFollow(id: string) {
        return instance.delete(`follow/${id}`)
    },
    follow(id: string) {
        return instance.post(`follow/${id}`)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

export const profileAPI = {
    getProfile(id: string) {
        return instance.get('profile/' + id)
    }
}