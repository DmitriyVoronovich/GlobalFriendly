import React from 'react';
import MyPosts from "../MyPosts";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../../redux/redux-store";
import {addPostAC} from "../../../../redux/profile-reducer";

let mapStateToProps = (state: AppRootStateType) => {
    return {
        posts: state.profilePage.posts
    }
};

let mapDispatchToProps = (dispatch: any) => {
    return {
        addedNewPost: (newPost: string) => {
            dispatch(addPostAC(newPost));
        }
    }
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);