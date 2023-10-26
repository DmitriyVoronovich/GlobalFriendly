import React from 'react';
import s from './Profile.module.css'
import MyPosts  from "./posts/MyPosts";
import ProfileInfo from "./profile-info/ProfileInfo";
import {PostType} from "../../App";

type ProfilePropsType = {
    posts: PostType[]
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    const {posts} = props

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
};

export default Profile;