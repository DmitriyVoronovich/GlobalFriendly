import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {combineReducers, createStore} from "redux";
import {usersReducer} from "./users-reducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;

export default store