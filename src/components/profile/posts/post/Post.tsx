import React from 'react';
import s from "./Post.module.css";

type PostPropsType = {
    message: string
    like: number
}

const Post:React.FC<PostPropsType> = (props:PostPropsType) => {
    return (
        <div className={s.item}>
            <img src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}/>
            {props.message}
            <div>
                <span>{props.like} </span><span>like</span>
            </div>
        </div>
    );
};

export default Post;