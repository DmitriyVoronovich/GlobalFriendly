import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header:React.FC<HeaderPropsType> = (props) => {

    return (
        <header className={s.header}>
            <img className={s.header_logo}
                 src={'https://www.reviewofreligions.org/wp-content/uploads/2021/01/samurai-warrior-smalll-shutterstock_1345891196-1024x1024.jpeg'}
                 alt={'logo'}/>
            <div>
                {props.isAuth
                    ? <div>
                        {props.login}
                        <button onClick={props.logout}>Logout</button>
                    </div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;