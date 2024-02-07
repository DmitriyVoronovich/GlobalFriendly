import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormControls/FormControl";
import {required} from '../../utils/validators/validators'

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'}
                       name={'login'}
                       component={Input}
                validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'password'}
                       name={'password'}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={'rememberMe'} component={'input'}/> remember me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'Login'
})(LoginForm)