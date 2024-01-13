import React from "react";
import s from "./users.module.css";
import ava from "../../assets/image/profile.webp";
import {Button} from "antd";
import axios from "axios";
import {AppRootStateType} from "../../redux/redux-store";
import {UsersType} from "../../redux/users-reducer";

type UsersPropsType = {
    users: UsersType[]
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

class Users extends React.Component<UsersPropsType, AppRootStateType> {

    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    };

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);

            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = [];
        for (let i = 1; i <= 10; i++) {

            pages.push(i)
        }

        return (
            <div className={s.users}>
                <div>
                    {pages.map(item => {
                        return <button className={this.props.currentPage === item ? s.selected : ''}
                        onClick={() => {this.onPageChanged(item)}}>{item}</button>
                    })
                    }
                </div>
                {this.props.users.map(item => {
                    return (
                        <div key={item.id}>
                        <span>
                            <img className={s.photo} src={item.photos.small != null ? item.photos.small : ava}
                                 alt={'User avatar'}/>
                            {item.followed ? <Button onClick={() => this.props.unfollow(item.id)}>Unfollowed</Button>
                                : <Button onClick={() => this.props.follow(item.id)}>Followed</Button>}
                        </span>
                            <span>
                            <span>
                                <div>{item.name}</div>
                                <div>{item.status}</div>
                            </span>
                            <span>
                                <div>Minsk</div>
                                <div>Belarus</div>
                            </span>
                        </span>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Users;