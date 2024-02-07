import React from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm";
import {Redirect} from "react-router-dom";

export type LoginProps = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

export const Login: React.FC<LoginProps> = (props) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile/'}/>
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
