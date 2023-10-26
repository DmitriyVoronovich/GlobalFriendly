import React from 'react';
import s from './ProfileInfo.module.css'
import profileYou from '../../../assets/image/profileYou.webp'

const ProfileInfo = () => {
    return (
        <>
            <div>
                <img className={s.profile_img}
                     src={'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'}/>
            </div>
            <div className={s.avatar}>
                <img className={s.avatar_img}
                     src={profileYou}/>
            </div>
        </>
    );
};

export default ProfileInfo;