import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {SidebarType} from "../../App";
import profileImg from "../../assets/image/profile.webp";

type NavbarPropsType = {
    sidebar: SidebarType[]
}

const Navbar: React.FC<NavbarPropsType> = (props) => {
    const {sidebar} = props

    return (
        <div className={s.navBar}>
            <nav className={s.nav}>
                <div className={s.item}><NavLink to={'/profile'} activeClassName={s.active}>Profile</NavLink></div>
                <div className={s.item}><NavLink to={'/dialogs'} activeClassName={s.active}>Messages</NavLink></div>
                <div className={s.item}><NavLink to={'/news'} activeClassName={s.active}>News</NavLink></div>
                <div className={s.item}><NavLink to={'/music'} activeClassName={s.active}>Music</NavLink></div>
                <div className={s.item}><NavLink to={'/settings'} activeClassName={s.active}>Settings</NavLink></div>
                <div className={s.sidebar}>
                    <span className={s.sidebarTitle}>Friends</span>
                    <div className={s.sidebarWrapper}>
                        {sidebar.map(item => {
                            return (
                                <div className={s.sidebarItem} key={item.id}>
                                    <img className={s.sidebarImg} src={profileImg} alt={'Users avatar'}/>
                                    <span className={s.sidebarName}>{item.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;