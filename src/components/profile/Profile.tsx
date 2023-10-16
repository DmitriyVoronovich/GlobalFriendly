import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./posts/MyPosts";
import ProfileInfo from "./profile-info/ProfileInfo";

const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};

export default Profile;