import React from 'react';
import s from "./users.module.css";
import ava from "../../assets/image/profile.webp";
import {Button} from "antd";
import {UsersType} from "../../redux/users-reducer";

export type UsersComponentPropsType = {
    totalUsersCount: number
    pageSize: number
    users: UsersType[]
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    follow: (id: string) => void
    unfollow: (id: string) => void
}

export const Users: React.FC<UsersComponentPropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= 10; i++) {

        pages.push(i)
    }

    return (
        <div className={s.users}>
            {props.users.map(item => {
                return (
                    <div key={item.id} className={s.user}>
                        <div className={s.photo_container}>
                            <img className={s.photo} src={item.photos.small != null ? item.photos.small : ava}
                                 alt={'User avatar'}/>
                            {item.followed ?
                                <Button onClick={() => props.unfollow(item.id)}>Unfollowed</Button>
                                : <Button onClick={() => props.follow(item.id)}>Followed</Button>}
                        </div>
                        <div>
                            <div className={s.name_container}>
                                <span>{item.name}</span>
                                <span>{item.status}</span>
                            </div>
                            <div className={s.location_container}>
                                <span>Minsk</span>
                                <span>Belarus</span>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div>
                {pages.map(item => {
                    return <button className={props.currentPage === item ? s.selected : ''}
                                   onClick={() => {props.onPageChanged(item)}}>{item}</button>
                })
                }
            </div>
        </div>
    );
};