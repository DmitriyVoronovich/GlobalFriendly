import React from 'react';
import {connect} from "react-redux";

import {AppRootStateType} from "../../redux/redux-store";
import {
    followsAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowsAC,
    UsersType
} from "../../redux/users-reducer";
import Users from './Users';

let mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);