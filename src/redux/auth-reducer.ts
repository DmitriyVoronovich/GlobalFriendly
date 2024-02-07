import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: true
}

export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
};

type AuthReducerType = ReturnType<typeof setUserDataAC>

export const setUserDataAC = (id: number, email: string, login: string, isAuth: boolean) =>
    ({
        type: SET_USER_DATA,
        payload: {
            data: {
                id, email, login, isAuth
            }
        }
    } as const);

export const authReducer = (state: AuthType = initialState, action: AuthReducerType) => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {
                ...state, ...action.payload.data
            }
        }
        default:
            return state;
    }
};

export const getProfileTC = () => (dispatch: Dispatch) => {
    authAPI.me().then((res) => {
        if (res.data.resultCode === 0) {
            let {id, email, login} = res.data.data;
            dispatch(setUserDataAC(id, email, login, true))
        }
    });
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    authAPI.login(email, password, rememberMe).then((res) => {
        if (res.data.resultCode === 0) {
            authAPI.me().then((res) => {
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data;
                    dispatch(setUserDataAC(id, email, login, true))
                }
            });
        }
    })
}

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout().then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setUserDataAC(1, '', '', false))
        }
    })
}