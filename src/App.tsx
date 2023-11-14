import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/profile/Profile";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";

type AppPropsType = {
    state: StateType
    addPost: (postMessage: string) => void
    addMessage: (newMessage: string) => void
}

type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidbar: SidebarType[]
}

export type SidebarType = {
    id: number
    name: string
}

export type ProfilePageType = {
    posts: PostType[]
}

export type DialogsPageType = {
    dialog: DialogType[]
    message: MessageType[]
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
    you: boolean
}

export type PostType = {
    id: number
    message: string
    like: number
}

const App:React.FC<AppPropsType> = (props) => {
    const {state, addPost, addMessage} = props



    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={state.sidbar}/>
                <Route render={() => <Profile state={state.profilePage} addPost={addPost}/>} path={'/profile'}/>
                <Route render={() => <Dialogs state={state.dialogsPage} addMessage={addMessage}/>} path={'/dialogs'} />
                <Route render={() => <News/>} path={'/news'}/>
                <Route render={() => <Music/>} path={'/music'}/>
                <Route render={() => <Settings/>} path={'/settings'}/>
            </div>
        </BrowserRouter>
    );
}

export default App;




