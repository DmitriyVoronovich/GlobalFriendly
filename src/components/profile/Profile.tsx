import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./profile-info/ProfileInfo";
import {MyPostsContainer} from "./posts/post/MyPostsContainer";

const Profile = () => {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;