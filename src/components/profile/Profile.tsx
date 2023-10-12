import React from 'react';
import s from './profile.module.css'

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img className={s.profile_img}
                     src={'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'}/>
            </div>
            <div className={s.avatar}>
                <img className={s.avatar_img}
                     src={'https://img.freepik.com/premium-photo/illustration-samurai-with-sword-sketch-style-generative-ai_7023-144725.jpg'}/>
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;