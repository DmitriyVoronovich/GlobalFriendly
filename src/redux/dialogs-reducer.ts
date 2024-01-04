import {DialogsPageType} from "../App";

export const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialog: [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Kate'},
        {id: 4, name: 'Oly'},
        {id: 5, name: 'Igor'},
        {id: 6, name: 'Pavel'}
    ],
    message: [
        {id: 1, message: 'Восколько ты сможешь созвониться, когда будешь свободен?', you: true},
        {id: 2, message: 'Давай через полчасика', you: false},
        {id: 3, message: 'Или часик', you: false},
        {id: 4, message: 'Лучше полчасика', you: false},
        {id: 5, message: 'Давай через полчаса', you: true},
        {id: 6, message: 'В 40 минут тогда', you: true}
    ]
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: AddMessageActionCreator) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const message = {id: Math.random(), message: action.newText, you: true};
            return {...state, message: [...state.message, message]};
        default:
            return state;
    }
};

export type AddMessageActionCreator = ReturnType<typeof addMessageActionCreator>

export const addMessageActionCreator = (newMessage: string) =>
    ({type: ADD_MESSAGE, newText: newMessage});