import React, {ChangeEvent, useState} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./dialog-item/DialogItem";
import Message from "./message/Message";
import {DialogsPageType} from "../../App";

type DialogPropsType = {
    state: DialogsPageType
    dispatch: any
}

const Dialogs: React.FC<DialogPropsType> = (props) => {
    const {state, dispatch} = props;
    const [newMessage, setNewMessage] = useState<string>('')

    const changeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessage(e.currentTarget.value)
    };

    const addedNewMessage = () => {
        dispatch({type: 'ADD_MESSAGE', newMessage:newMessage});
        setNewMessage('');
    }

    return (
        <section className={s.dialogs}>
            <h2>Dialogs</h2>
            <div className={s.dialogWrapper}>
                <div className={s.dialogsItems}>
                    {state.dialog.map((item) => {
                        return (
                            <DialogItem key={item.id} id={item.id} name={item.name}/>
                        )
                    })}
                </div>
                <div className={s.dialogMassages}>
                    {state.message.map((item) => {
                        return (
                            <Message key={item.id} message={item.message} you={item.you}/>
                        )
                    })}
                </div>
            </div>
            <div className={s.dialogInput}>
                <textarea onChange={changeTextareaHandler} value={newMessage} />
                <button onClick={addedNewMessage}>Send message</button>
            </div>
        </section>
    );
};

export default Dialogs;