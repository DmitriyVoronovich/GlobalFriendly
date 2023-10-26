import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./post/Post";
import {PostType} from "../../../App";

type MyPostsPropsType ={
    posts: PostType[]
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const {posts} = props
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
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