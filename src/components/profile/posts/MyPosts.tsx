import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={'Hi, how are you?'} like={15}/>
                <Post message={`It's my first post!`} like={20}/>
            </div>
        </div>
    );
};

export default MyPosts;