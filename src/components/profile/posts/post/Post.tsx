import React from 'react';
import s from "./Post.module.css";
import profileImg from '../../../../assets/image/profile.webp'

type PostPropsType = {
    message: string
    like: number
}

const Post:React.FC<PostPropsType> = (props:PostPropsType) => {
    return (
        <div className={s.item}>
            <img src={profileImg}/>
            {props.message}
            <div>
                <span>{props.like} </span><span>like</span>
            </div>
        </div>
    );
};

export default Post;