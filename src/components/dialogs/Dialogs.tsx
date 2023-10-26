import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./dialog-item/DialogItem";
import Message from "./message/Message";
import {DialogType, MessageType} from "../../App";

type DialogPropsType = {
    dialog: DialogType[]
    message: MessageType[]
}

const Dialogs: React.FC<DialogPropsType> = (props) => {
    const {dialog, message} = props

    return (
        <section className={s.dialogs}>
            <h2>Dialogs</h2>
            <div className={s.dialogWrapper}>
                <div className={s.dialogsItems}>
                    {dialog.map((item) => {
                        return (
                            <DialogItem key={item.id} id={item.id} name={item.name}/>
                        )
                    })}
                </div>
                <div className={s.dialogMassages}>
                    {message.map((item) => {
                        return (
                            <Message key={item.id} message={item.message}/>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Dialogs;