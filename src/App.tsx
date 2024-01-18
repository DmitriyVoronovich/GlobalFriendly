import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import { Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import DialogContainer from "./components/dialogs/DialogsContainer";
import NavbarContainer from "./components/navbar/NavbarContainer";
import {UsersContainer} from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";

export type SidebarType = {
    id: number
    name: string
};

export type DialogsPageType = {
    dialog: DialogType[]
    message: MessageType[]
};

export type DialogType = {
    id: number
    name: string
};

export type MessageType = {
    id: number
    message: string
    you: boolean
};

export type PostType = {
    id: number
    message: string
    like: number
};

const App = () => {

    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavbarContainer/>
                <Route render={() => <ProfileContainer/>} path={'/profile/:userId'}/>
                <Route render={() => <DialogContainer />} path={'/dialogs'} />
                <Route render={() => <News/>} path={'/news'}/>
                <Route render={() => <Music/>} path={'/music'}/>
                <Route render={() => <Settings/>} path={'/settings'}/>
                <Route render={() => <UsersContainer />} path={'/users'} />
            </div>
    );
}

export default App;




