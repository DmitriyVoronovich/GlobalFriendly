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
    follow(id: string) {
        return instance.delete(`follow/${id}`)
    },
    unFollow(id: string) {
        return instance.post(`follow/${id}`)
    }
}

export const authAPI = {
    getAuth() {
        instance.get(`auth/me`).then(response => response.data)
    }
}