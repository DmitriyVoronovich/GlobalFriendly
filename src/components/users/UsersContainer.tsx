import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    followAC, getUsersTC,
    setCurrentPage,
    toggleIsFollowingInProgress,
    unFollowAC,
    UsersType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/preloader";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    users: UsersType[]
    followAC: (id: string) => void
    unFollowAC: (id: string) => void
    setCurrentPage: (currentPage: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
    toggleIsFollowingInProgress: (id: string, isFetching: boolean) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
}

export class UsersApiComponent extends React.Component<UsersPropsType, AppRootStateType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/>
                    : <Users totalUsersCount={this.props.totalUsersCount}
                             pageSize={this.props.pageSize}
                             users={this.props.users}
                             onPageChanged={this.onPageChanged}
                             currentPage={this.props.currentPage}
                             followAC={this.props.followAC}
                             toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}
                             unFollowAC={this.props.unFollowAC}
                             followingInProgress={this.props.followingInProgress}/>}

            </>

        )
    }
}


let mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export const UsersContainer = connect(mapStateToProps, {
    followAC,
    unFollowAC,
    setCurrentPage,
    toggleIsFollowingInProgress,
    getUsersTC
})(UsersApiComponent);