import React, {ChangeEvent, useState} from 'react';
import s from "./MyPosts.module.css";
import Post from "./post/Post";
import {PostType} from "../../../App";
import {addPostActionCreator} from "../../../redux/profile-reducer";

type MyPostsPropsType ={
    posts: PostType[]
    dispatch: any
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const {posts, dispatch} = props;
    const [newPost, setNewPost] = useState<string>('')

    const changeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewPost(e.currentTarget.value)
    };

    const addedNewPost = () => {
        dispatch(addPostActionCreator(newPost));
        setNewPost('')
    }

    return (
        <div>
            My post
            <div>
                <textarea onChange={changeTextareaHandler} value={newPost} />
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