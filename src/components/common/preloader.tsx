import React from 'react';
import loader from "../../assets/image/Spin-1s-200px.svg";

export const Preloader = () => {
    return (
        <div>
            <img src={loader} alt={'preloader'}/>
        </div>
    );
};