import React from 'react';
import {UsersType} from "../../redux/users-reducer";
import {Button} from "antd";
import s from './users.module.css'
import axios from 'axios';
import ava from '../../assets/image/profile.webp'

type UsersPropsType = {
    users: UsersType[]
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: UsersType[]) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {
   if (props.users.length === 0) {
       axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
           props.setUsers(res.data.items)
       })
   }

    return (
        <div className={s.users}>
            {props.users.map(item => {
                return (
                    <div key={item.id}>
                        <span>
                            <img className={s.photo} src={item.photos.small != null? item.photos.small : ava} alt={'User avatar'}/>
                            {item.followed? <Button onClick={() => props.unfollow(item.id)}>Unfollowed</Button>
                                : <Button onClick={() => props.follow(item.id)}>Followed</Button>}
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
    );
};