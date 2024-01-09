import React, {useEffect} from 'react';
import {UsersType} from "../../redux/users-reducer";
import {Button} from "antd";
import s from './users.module.css'
import {v1} from "uuid";
import ava from "../../assets/image/profile.webp";

type UsersPropsType = {
    users: UsersType[]
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: UsersType[]) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {
    useEffect(() => props.setUsers([
        {
            id: v1(),
            photo: ava,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'},
            followed: true
        },
        {
            id: v1(),
            photo: ava,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {city: 'Grodno', country: 'Belarus'},
            followed: false
        },
        {
            id: v1(),
            photo: ava,
            fullName: 'Sveta',
            status: 'I am a boss',
            location: {city: 'Moscow', country: 'Russia'},
            followed: false
        },
        {
            id: v1(),
            photo: ava,
            fullName: 'Igor',
            status: 'I am a boss',
            location: {city: 'Kiev', country: 'Ukraine'},
            followed: true
        }
    ]), [])

    return (
        <div className={s.users}>
            {props.users.map(item => {
                return (
                    <div key={item.id}>
                        <span>
                            <img className={s.photo} src={item.photo} alt={'User avatar'}/>
                            {item.followed? <Button onClick={() => props.unfollow(item.id)}>Unfollowed</Button>
                                : <Button onClick={() => props.follow(item.id)}>Followed</Button>}
                        </span>
                        <span>
                            <span>
                                <div>{item.fullName}</div>
                                <div>{item.status}</div>
                            </span>
                            <span>
                                <div>{item.location.city}</div>
                                <div>{item.location.country}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    );
};