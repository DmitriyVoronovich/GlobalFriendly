import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <section className={s.dialogs}>
            <h2>Dialogs</h2>
            <div className={s.dialogWrapper}>
                <div className={s.dialogsItems}>
                    <div className={s.item + ' ' + s.active}>
                        <NavLink to={''}>Dmitriy</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to={''}>Oleg</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to={''}>Kate</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to={''}>Oly</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to={''}>Igor</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to={''}>Pavel</NavLink>
                    </div>
                </div>
                <div className={s.dialogMassages}>
                    <div className={s.massagesItem}>
                        Hi, how are you?
                    </div>
                    <div className={s.massagesItem}>
                        Hi, how are you?
                    </div>
                    <div className={s.massagesItem}>
                        Hi, how are you?
                    </div>
                    <div className={s.massagesItem}>
                        Hi, how are you?
                    </div>
                    <div className={s.massagesItem}>
                        Hi, how are you?
                    </div>
                    <div className={s.massagesItem}>
                        Hi, how are you?
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dialogs;