import React from 'react';
import {DialogsPageType} from "../../App";
import {addMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type DialogContainerPropsType = {
    state: DialogsPageType
    dispatch: any
}

const DialogContainer: React.FC<DialogContainerPropsType> = (props) => {
    const {state, dispatch} = props;

    const addedNewMessage = (newMessage: string) => {
        dispatch(addMessageActionCreator(newMessage));
    };

    return (
        <Dialogs dialog={state.dialog}
                 addedNewMessage={addedNewMessage}
                 message={state.message}/>
    );
};

export default DialogContainer;