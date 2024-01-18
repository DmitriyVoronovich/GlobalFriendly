import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unFollow,
    UsersType
} from "../../redux/users-reducer";
import axios from "axios";
import { Users } from "./Users";
import {Preloader} from "../common/preloader";

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
    toggleIsFetching: (isFetching: boolean) => void
}

export class UsersApiComponent extends React.Component<UsersPropsType, AppRootStateType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true})
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    };

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true})
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items);
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/>
                    :  <Users totalUsersCount={this.props.totalUsersCount}
                                                                 pageSize={this.props.pageSize}
                                                                 users={this.props.users}
                                                                 onPageChanged={this.onPageChanged}
                                                                 currentPage={this.props.currentPage}
                                                                 follow={this.props.follow}
                                                                 unfollow={this.props.unFollow}/>}

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
        isFetching: state.usersPage.isFetching
    }
};

// let mapDispatchToProps = (dispatch: any) => {
//     return {
//         follow: (id: string) => {
//             dispatch(followsAC(id))
//         },
//         unfollow: (id: string) => {
//             dispatch(unFollowsAC(id))
//         },
//         setUsers: (users: UsersType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalUsersCount: number) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// };

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersApiComponent);