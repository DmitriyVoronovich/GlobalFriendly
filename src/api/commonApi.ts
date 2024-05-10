import axios from 'axios'
import { ResultCode } from 'api/profileApi'

export const instance = axios.create({
    withCredentials: true,
    headers: { 'API-KEY': '70000ace-a569-4dfb-a311-f8d6e3694d6a' },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export type BaseResponse<T = {}, R = ResultCode> = {
    data: T
    messages: string[]
    resultCode: R
}