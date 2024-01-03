import React, {ChangeEvent, useState} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./dialog-item/DialogItem";
import Message from "./message/Message";
import {DialogType, MessageType} from "../../App";

type DialogPropsType = {
    dialog: DialogType[]
    addedNewMessage: (newMessage: string) => void
    message: MessageType[]
}

const Dialogs: React.FC<DialogPropsType> = (props) => {
    const {dialog, addedNewMessage, message} = props;
    const [newMessage, setNewMessage] = useState<string>('');

    const changeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessage(e.currentTarget.value)
    };

    const addNewMessage = () => {
        addedNewMessage(newMessage);
        setNewMessage('');
    };

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
            <div className={s.dialogInput}>
                <textarea onChange={changeTextareaHandler} value={newMessage} />
                <button onClick={addNewMessage}>Send message</button>
            </div>
        </section>
    );
};

export default Dialogs;