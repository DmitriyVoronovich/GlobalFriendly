import React from 'react';

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img className='content_img'
                     src={'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'}/>
            </div>
            <div className='avatar'>
                <img className='avatar_img'
                     src={'https://img.freepik.com/premium-photo/illustration-samurai-with-sword-sketch-style-generative-ai_7023-144725.jpg'}/>
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;