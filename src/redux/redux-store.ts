import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>;


export default store