import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./dialog-item/DialogItem";
import Message from "./message/Message";

const dialogData = [
    {id: 1, name: 'Dmitriy'},
    {id: 2, name: 'Oleg'},
    {id: 3, name: 'Kate'},
    {id: 4, name: 'Oly'},
    {id: 5, name: 'Igor'},
    {id: 6, name: 'Pavel'}
]

const messageData = [
    {id: 1, message: ' Hi, how are you?'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'GG'}
]

const Dialogs = () => {
    return (
        <section className={s.dialogs}>
            <h2>Dialogs</h2>
            <div className={s.dialogWrapper}>
                <div className={s.dialogsItems}>
                    {dialogData.map((item) => {
                        return (
                            <DialogItem key={item.id} id={item.id} name={item.name}/>
                        )
                    })}
                </div>
                <div className={s.dialogMassages}>
                    {messageData.map((item) => {
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