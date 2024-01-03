import React, {ChangeEvent, useState} from 'react';
import s from "./MyPosts.module.css";
import Post from "./post/Post";
import {PostType} from "../../../App";
import {addPostActionCreator} from "../../../redux/profile-reducer";

type MyPostsPropsType ={
    posts: PostType[]
    addedNewPost: (newPost: string) => void
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const {posts, addedNewPost} = props;
    const [newPost, setNewPost] = useState<string>('')

    const changeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewPost(e.currentTarget.value)
    };

    const addNewPost = () => {
        addedNewPost(newPost);
        setNewPost('')
    };

    const post = posts.map((item) => {
        return (
            <Post key={item.id} like={item.like} message={item.message}/>
        )
    })

    return (
        <div>
            My post
            <div>
                <textarea onChange={changeTextareaHandler} value={newPost} />
                <button onClick={addNewPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    );
};

export default MyPosts;