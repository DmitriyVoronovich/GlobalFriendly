import {ProfilePageType} from "../App";

export const ADD_POST = 'ADD-POST';

export const profileReducer = (state: ProfilePageType, action: any) => {
    switch (action.type) {
        case ADD_POST:
            const post = {id: Math.random(),message: action.newText, like: 0 };
            state.posts.push(post);
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = (newPost: string) =>
    ({type: ADD_POST, newText: newPost});