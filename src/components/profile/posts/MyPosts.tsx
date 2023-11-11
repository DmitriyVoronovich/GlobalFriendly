import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import s from "./MyPosts.module.css";
import Post from "./post/Post";
import {PostType} from "../../../App";

type MyPostsPropsType ={
    posts: PostType[]
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const {posts} = props;
    const [newPost, setNewPost] = useState<string>('')

    const changeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewPost(e.currentTarget.value)
    };

    const addPost = (newPost: string) => {
        const post = {id: Math.random(),message: newPost, like: 0 }
    }

    return (
        <div>
            My post
            <div>
                <textarea onChange={changeTextareaHandler} value={newPost}></textarea>
                <button onClick={() => addPost(newPost)}>Add post</button>
            </div>
            <div className={s.posts}>
                {posts.map((item) => {
                    return (
                        <Post key={item.id} like={item.like} message={item.message}/>
                    )
                })}
            </div>
        </div>
    );
};

export default MyPosts;