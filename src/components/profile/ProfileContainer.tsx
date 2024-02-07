import React from 'react';
import Profile from "./Profile";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getProfileTC, getStatusTC, updateStatusTC} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type ProfileContainerPropsType = {
    setUserProfile: (profile: any) => void
    profile: any
    match: any
    getProfileTC: (userId: string) => void
    getStatusTC: (userId: string) => void
    updateStatusTC: (status: string) => void
    isAuth: boolean
    status: string
}

class ProfileContainer extends React.Component<ProfileContainerPropsType, AppRootStateType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 30364;
        }

        this.props.getProfileTC(userId);
        this.props.getStatusTC(userId);
    }


    render() {

        return (
            <div>
                <Profile profile={this.props.profile}
                         status={this.props.status}
                         updateStatusTC={this.props.updateStatusTC}/>
            </div>
        );
    }
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {getProfileTC, getStatusTC, updateStatusTC}),
    withAuthRedirect,
)(ProfileContainer)