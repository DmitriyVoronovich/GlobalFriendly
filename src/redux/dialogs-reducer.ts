import {DialogsPageType} from "../App";

export const ADD_MESSAGE = 'ADD-MESSAGE';

export const dialogsReducer = (state: DialogsPageType, action: AddMessageActionCreator) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const message = {id: Math.random(), message: action.newText, you: true};
            state.message.push(message);
            return state;
        default:
            return state;
    }
};

type AddMessageActionCreator = ReturnType<typeof addMessageActionCreator>

export const addMessageActionCreator = (newMessage: string) =>
    ({type: ADD_MESSAGE, newText: newMessage});