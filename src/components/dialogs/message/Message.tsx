import React from 'react';
import s from './Message.module.css'
import profileImg from "../../../assets/image/profile.webp";
import profileYou from '../../../assets/image/profileYou.webp'

type MessagePropsType = {
message: string
    you: boolean
}

const Message: React.FC<MessagePropsType> = (props) => {
    const {message, you} = props

    return (
        <div className={ you ? s.massagesItemYou : s.massagesItem}>
            <img className={s.massagesImg} src={you ? profileYou : profileImg}/>
            {message}
        </div>
    );
};

export default Message;