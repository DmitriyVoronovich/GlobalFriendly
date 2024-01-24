import React from "react";
import { AppRootStateType } from "../../redux/redux-store";
import Header from "./Header";
import {getProfileTC} from "../../redux/auth-reducer";
import { connect, ConnectedProps } from "react-redux";

class HeaderContainer extends React.Component<PropsFromRedux> {
    componentDidMount() {
        this.props.getProfileTC()
    }

    render() {
        return <Header isAuth={this.props.isAuth} />;
    }
}

const mapStateToProps = (state: AppRootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

const mapDispatchToProps = {
    getProfileTC,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(HeaderContainer);
