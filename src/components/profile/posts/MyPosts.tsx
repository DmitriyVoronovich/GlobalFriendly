import React, {ChangeEvent, useState} from 'react';
import s from "./MyPosts.module.css";
import Post from "./post/Post";
import {PostType} from "../../../App";

type MyPostsPropsType ={
    posts: PostType[]
    addPost: (postMessage: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const {posts, addPost} = props;
    const [newPost, setNewPost] = useState<string>('')

    const changeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewPost(e.currentTarget.value)
    };

    const addedNewPost = () => {
        addPost(newPost);
        setNewPost('')
    }

    return (
        <div>
            My post
            <div>
                <textarea onChange={changeTextareaHandler} value={newPost}></textarea>
                <button onClick={addedNewPost}>Add post</button>
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