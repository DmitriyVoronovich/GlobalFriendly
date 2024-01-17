import {PostType} from "../App";

export const ADD_POST = 'ADD-POST';

export type ProfilePageType = {
    posts: PostType[]
    profile: any
};

type ProfileReducerType = ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfile>

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', like: 15},
        {id: 1, message: 'It\'s my first post!', like: 20}
    ],
    profile: null
}

export const profileReducer = (state: ProfilePageType = initialState, action: ProfileReducerType) => {
    switch (action.type) {
        case ADD_POST:
            const post = {id: Math.random(), message: action.payload.newText, like: 0};
            return {...state, posts: [...state.posts, post]};
        case 'SET_USER_PROFILE': {
            return {...state, profile: action.payload.profile}
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