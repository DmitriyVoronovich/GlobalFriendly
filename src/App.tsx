import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Dialogs from "./components/dialogs/Dialogs";
import { Route} from "react-router-dom";
import Profile from "./components/profile/Profile";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import DialogContainer from "./components/dialogs/DialogsContainer";

type AppPropsType = {
    state: StateType
    dispatch: any
};

type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType[]
};

export type SidebarType = {
    id: number
    name: string
};

export type ProfilePageType = {
    posts: PostType[]
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

const App:React.FC<AppPropsType> = (props) => {
    const {state, dispatch} = props;



    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={state.sidebar}/>
                <Route render={() => <Profile state={state.profilePage} dispatch={dispatch}/>} path={'/profile'}/>
                <Route render={() => <DialogContainer state={state.dialogsPage} dispatch={dispatch}/>} path={'/dialogs'} />
                <Route render={() => <News/>} path={'/news'}/>
                <Route render={() => <Music/>} path={'/music'}/>
                <Route render={() => <Settings/>} path={'/settings'}/>
            </div>
    );
}

export default App;




