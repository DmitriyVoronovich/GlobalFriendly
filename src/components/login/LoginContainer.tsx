import React from "react";
import { AppRootStateType } from "../../redux/redux-store";
import { connect, ConnectedProps } from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Login} from "./Login";

class LoginContainer extends React.Component<PropsFromRedux> {

    render() {
        return <Login isAuth={this.props.isAuth} login={this.props.login}/>;
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth
});


const connector = connect(mapStateToProps, {login});

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(LoginContainer);
