import React from 'react';
import MyPosts from "../MyPosts";
import {addPostActionCreator} from "../../../../redux/profile-reducer";
import {PostType} from "../../../../App";
type MyPostsPropsType ={
    posts: PostType[]
    dispatch: any
}

export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {
    const {dispatch, posts} = props

    const addedNewPost = (newPost: string) => {
        dispatch(addPostActionCreator(newPost));
    };

    return (
       <MyPosts posts={posts} addedNewPost={addedNewPost}/>
    );
};