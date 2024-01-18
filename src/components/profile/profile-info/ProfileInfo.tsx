import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/preloader";

export type ProfileInfoPropsType = {
    profile: any
}

const ProfileInfo:React.FC<ProfileInfoPropsType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <>
            <div>
                <img className={s.profile_img}
                     src={'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'}/>
            </div>
            <div className={s.avatar}>
                <img className={s.avatar_img}
                     src={props.profile.photos.large}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.lookingForAJob}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </>
    );
};

export default ProfileInfo;