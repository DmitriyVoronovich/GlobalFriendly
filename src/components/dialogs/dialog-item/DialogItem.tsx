import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: number
    name: string
}
const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    return (
        <div className={s.item }>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;