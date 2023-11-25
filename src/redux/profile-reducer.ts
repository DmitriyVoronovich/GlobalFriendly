import {ProfilePageType} from "../App";

export const ADD_POST = 'ADD-POST';

export const profileReducer = (state: ProfilePageType, action: AddPostActionCreator) => {
    switch (action.type) {
        case ADD_POST:
            const post = {id: Math.random(), message: action.payload.newText, like: 0};
            state.posts.push(post);
            return state;
        default:
            return state;
    }
};

type AddPostActionCreator = ReturnType<typeof addPostActionCreator>

export const addPostActionCreator = (newPost: string) =>
    ({
        type: ADD_POST,
        payload: {
            newText: newPost
        }
    });