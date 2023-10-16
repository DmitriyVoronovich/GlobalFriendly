import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <>
            <div>
                <img className={s.profile_img}
                     src={'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'}/>
            </div>
            <div className={s.avatar}>
                <img className={s.avatar_img}
                     src={'https://img.freepik.com/premium-photo/illustration-samurai-with-sword-sketch-style-generative-ai_7023-144725.jpg'}/>
            </div>
        </>
    );
};

export default ProfileInfo;