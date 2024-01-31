import React from 'react';
import Profile from "./Profile";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getProfileTC} from "../../redux/profile-reducer";
import { withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type ProfileContainerPropsType = {
    setUserProfile: (profile: any) => void
    profile: any
    match: any
    getProfileTC: (userId: string) => void
    isAuth: boolean
}

class ProfileContainer extends React.Component<ProfileContainerPropsType, AppRootStateType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
       this.props.getProfileTC(userId)
    }

    render() {

        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        );
    }
}

let mapStateToProps = (state: AppRootStateType) => {
    return {profile: state.profilePage.profile,
    isAuth: state.auth.isAuth}
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, { getProfileTC }),
    withRouter,
    withAuthRedirect
) (ProfileContainer)