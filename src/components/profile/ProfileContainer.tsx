import React from 'react';
import Profile from "./Profile";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getProfileTC} from "../../redux/profile-reducer";
import { RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state: AppRootStateType) => {
    return {profile: state.profilePage.profile,
    isAuth: state.auth.isAuth}
}

let withUriDataContainerComponent = withRouter<RouteComponentProps, any>(AuthRedirectComponent);

export default connect(mapStateToProps, { getProfileTC })(withUriDataContainerComponent as React.ComponentType<any >);
