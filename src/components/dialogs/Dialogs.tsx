import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./dialog-item/DialogItem";
import Message from "./message/Message";
import {DialogsPageType} from "../../App";

type DialogPropsType = {
    state: DialogsPageType
}

const Dialogs: React.FC<DialogPropsType> = (props) => {
    const {state} = props

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
        </section>
    );
};

export default Dialogs;