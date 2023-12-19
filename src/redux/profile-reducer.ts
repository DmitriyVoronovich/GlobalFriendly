import {ProfilePageType} from "../App";

export const ADD_POST = 'ADD-POST';

let initialState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', like: 15},
            {id: 1, message: 'It\'s my first post!', like: 20}
        ]
    }

export const profileReducer = (state: ProfilePageType = initialState, action: AddPostActionCreator) => {
    switch (action.type) {
        case ADD_POST:
            const post = {id: Math.random(), message: action.payload.newText, like: 0};
            state.posts.push(post);
            return state;
        default:
            return state;
    }
};

export type AddPostActionCreator = ReturnType<typeof addPostActionCreator>

export const addPostActionCreator = (newPost: string) =>
    ({
        type: ADD_POST,
        payload: {
            newText: newPost
        }
    });