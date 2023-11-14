import React from 'react';
import s from './Profile.module.css'
import MyPosts  from "./posts/MyPosts";
import ProfileInfo from "./profile-info/ProfileInfo";
import {ProfilePageType} from "../../App";

type ProfilePropsType = {
    state: ProfilePageType
    addPost: (postMessage: string) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    const {state, addPost} = props

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={state.posts} addPost={addPost}/>
        </div>
    );
};

export default Profile;