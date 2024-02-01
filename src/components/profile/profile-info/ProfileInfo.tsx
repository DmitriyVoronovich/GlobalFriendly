import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/preloader";
import {ProfileStatus} from "../profile-status/ProfileStatus";

export type ProfileInfoPropsType = {
    profile: any
    status: string
    updateStatusTC: (status: string) => void
}

const ProfileInfo:React.FC<ProfileInfoPropsType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <>
            <div className={s.avatar}>
                <img className={s.avatar_img}
                     src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatusTC={props.updateStatusTC}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.lookingForAJob}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </>
    );
};

export default ProfileInfo;