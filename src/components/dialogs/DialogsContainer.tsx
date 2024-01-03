import React from 'react';
import {addMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../App";

let mapStateToProps = (state: StateType) => {
    return {
        dialog: state.dialogsPage.dialog,
        message: state.dialogsPage.message
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addedNewMessage: (newMessage: string) => {
            dispatch(addMessageActionCreator(newMessage))
        }
    }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogContainer;