import {PostType} from "../App";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export const ADD_POST = 'ADD-POST';

export type ProfilePageType = {
    posts: PostType[]
    profile: any
    status: string
};

type ProfileReducerType = ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', like: 15},
        {id: 1, message: 'It\'s my first post!', like: 20}
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerType) => {
    switch (action.type) {
        case ADD_POST:
            const post = {id: Math.random(), message: action.payload.newText, like: 0};
            return {...state, posts: [...state.posts, post]};
        case 'SET_USER_PROFILE': {
            return {...state, profile: action.payload.profile}
        }
        case "SET_USER_STATUS": {
            return {...state, status: action.payload.status}
        }
        default:
            return state;
    }
};

export const addPostAC = (newPost: string) =>
    ({
        type: ADD_POST,
        payload: {
            newText: newPost
        }
    } as const);

export const setUserProfile = (profile: any) => ({
    type: 'SET_USER_PROFILE',
    payload: {
        profile
    }
} as const)

export const setUserStatus = (status: string) => ({
    type: 'SET_USER_STATUS',
    payload: {
        status
    }
} as const)
export const getProfileTC = (id: string) => (dispatch: Dispatch) => {
    profileAPI.getProfile(id)
        .then(res => {
            dispatch(setUserProfile(res.data))
        })
}

export const getStatusTC = (id: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(id)
        .then(res => {
            dispatch(setUserStatus(res.data))
        })
}

export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}