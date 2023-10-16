import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./posts/MyPosts";
import ProfileInfo from "./profile-info/ProfileInfo";

const postData = [
    {id: 1, message: 'Hi, how are you?', like: 15},
    {id: 1, message: 'It\'s my first post!', like: 20}
]

const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={postData}/>
        </div>
    );
};

export default Profile;