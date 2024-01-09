import React from 'react';
import MyPosts from "../MyPosts";
import {addPostActionCreator} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";
import {AppRootStateType} from "../../../../redux/redux-store";

let mapStateToProps = (state: AppRootStateType) => {
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