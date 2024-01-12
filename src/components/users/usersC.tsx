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
}

class Users extends React.Component<UsersPropsType, AppRootStateType>{

    constructor(props: UsersPropsType | Readonly<UsersPropsType>) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                this.props.setUsers(res.data.items)
        })
    }

    render() {
        return (
        <div className={s.users}>
            {this.props.users.map(item => {
                return (
                    <div key={item.id}>
                        <span>
                            <img className={s.photo} src={item.photos.small != null? item.photos.small : ava} alt={'User avatar'}/>
                            {item.followed? <Button onClick={() => this.props.unfollow(item.id)}>Unfollowed</Button>
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