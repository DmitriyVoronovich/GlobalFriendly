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
    posts: PostType[]
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
}

export type PostType = {
    id: number
    message: string
    like: number
}

const App:React.FC<AppPropsType> = (props) => {

    const {posts, dialog, message} = props
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <Route render={() => <Profile posts={posts}/>} path={'/profile'}/>
                <Route render={() => <Dialogs dialog={dialog} message={message}/>} path={'/dialogs'}/>
                <Route render={() => <News/>} path={'/news'}/>
                <Route render={() => <Music/>} path={'/music'}/>
                <Route render={() => <Settings/>} path={'/settings'}/>
            </div>
        </BrowserRouter>
    );
}

export default App;




