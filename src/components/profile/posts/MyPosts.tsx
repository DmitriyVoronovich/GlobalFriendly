import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./post/Post";

const postData = [
    {id: 1, message: 'Hi, how are you?', like: 15},
    {id: 1, message: 'It\'s my first post!', like: 20}
]

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postData.map((item) => {
                    return (
                        <Post key={item.id} like={item.like} message={item.message}/>
                    )
                })}
            </div>
        </div>
    );
};

export default MyPosts;