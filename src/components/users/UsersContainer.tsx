import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    toggleIsFollowingInProgress,
    unFollow,
    UsersType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/preloader";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    users: UsersType[]
    follow: (id: string) => void
    unFollow: (id: string) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingInProgress: (id: string, isFetching: boolean) => void
}

export class UsersApiComponent extends React.Component<UsersPropsType, AppRootStateType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(res => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(res.items)
            this.props.setTotalUsersCount(res.totalCount)
        })
    };

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(res => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(res.items);
        })
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
                             follow={this.props.follow}
                             toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}
                             unfollow={this.props.unFollow}
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
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowingInProgress
})(UsersApiComponent);