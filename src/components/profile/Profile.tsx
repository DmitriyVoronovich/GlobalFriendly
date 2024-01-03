import React from 'react';
import s from './Profile.module.css'
import MyPosts  from "./posts/MyPosts";
import ProfileInfo from "./profile-info/ProfileInfo";
import {ProfilePageType} from "../../App";
import {MyPostsContainer} from "./posts/post/MyPostsContainer";

type ProfilePropsType = {
    state: ProfilePageType
    dispatch: any
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    const {state, dispatch} = props

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer posts={state.posts} dispatch={dispatch}/>
        </div>
    );
};

export default Profile;