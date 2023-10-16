import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./post/Post";

type MyPostsPropsType = {
    posts: PostType[]
}

type PostType = {
    id: number
    message: string
    like: number
}

const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {props.posts.map((item) => {
                    return (
                        <Post key={item.id} like={item.like} message={item.message}/>
                    )
                })}
            </div>
        </div>
    );
};

export default MyPosts;