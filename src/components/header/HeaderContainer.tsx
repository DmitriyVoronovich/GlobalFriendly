import React from "react";
import { AppRootStateType } from "../../redux/redux-store";
import axios from "axios";
import Header from "./Header";
import { setUserDataAC } from "../../redux/auth-reducer";
import { connect, ConnectedProps } from "react-redux";

class HeaderContainer extends React.Component<PropsFromRedux> {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true,
            })
            .then((res) => {
                if (res.data.resultCode === 0) {
                    let { id, email, login } = res.data.data;
                    if (this.props.setUserDataAC) {
                        this.props.setUserDataAC(id, email, login);
                    }
                }
            });
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
    setUserDataAC,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(HeaderContainer);
