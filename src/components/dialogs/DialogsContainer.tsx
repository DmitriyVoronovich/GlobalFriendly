import React from 'react';
import {addMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state: AppRootStateType) => {
    return {
        dialog: state.dialogsPage.dialog,
        message: state.dialogsPage.message,
        isAuth: state.auth.isAuth
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

let mapDispatchToProps = (dispatch: any) => {
    return {
        addedNewMessage: (newMessage: string) => {
            dispatch(addMessageActionCreator(newMessage))
        }
    }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogContainer;