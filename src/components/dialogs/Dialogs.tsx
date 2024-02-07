import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./dialog-item/DialogItem";
import Message from "./message/Message";
import {DialogType, MessageType} from "../../App";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type DialogPropsType = {
    dialog: DialogType[]
    addedNewMessage: (newMessage: string) => void
    message: MessageType[]
    isAuth: boolean
}

const Dialogs: React.FC<DialogPropsType> = (props) => {
    const {dialog, addedNewMessage, message} = props;

    const onSubmitMessage = (formData: FormDataMessageType) => {
        addedNewMessage(formData.newMessageBody);
    }

    const dialogs = dialog.map((item) => {
        return (
            <DialogItem key={item.id} id={item.id} name={item.name}/>
        )
    });

    const messages = message.map((item) => {
        return (
            <Message key={item.id} message={item.message} you={item.you}/>
        )
    });

    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <section className={s.dialogs}>
            <h2>Dialogs</h2>
            <div className={s.dialogWrapper}>
                <div className={s.dialogsItems}>
                    {dialogs}
                </div>
                <div className={s.dialogMassages}>
                    {messages}
                </div>
            </div>
            <AddMessageReduxForm onSubmit={onSubmitMessage}/>

        </section>
    );
};

export type FormDataMessageType = {
    newMessageBody: string
}

export const AddMessageForm: React.FC<InjectedFormProps<FormDataMessageType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.dialogInput}>
                <Field placeholder={'Enter your message'} name={'newMessageBody'} component={'textarea'}/>
                <button>Send message</button>
            </div>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm<FormDataMessageType>({
    form: 'addMessage'
})(AddMessageForm)

export default Dialogs;