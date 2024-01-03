import React from 'react';
import MyPosts from "../MyPosts";
import {addPostActionCreator} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
import {StateType} from "../../../../App";

let mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts
    }
};

let mapDispatchToProps = (dispatch: any) => {
    return {
        addedNewPost: (newPost: string) => {
            dispatch(addPostActionCreator(newPost));
        }
    }
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);