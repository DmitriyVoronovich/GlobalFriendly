import React from 'react';
import {connect} from "react-redux";

import {AppRootStateType} from "../../redux/redux-store";
import {followsAC, setUsersAC, unFollowsAC, UsersType} from "../../redux/users-reducer";
import Users from './usersC';

let mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (id: string) => {
            dispatch(followsAC(id))
        },
        unfollow: (id: string) => {
            dispatch(unFollowsAC(id))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        }
    }
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);