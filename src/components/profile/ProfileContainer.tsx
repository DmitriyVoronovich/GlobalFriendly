import React from 'react';
import Profile from "./Profile";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getProfileTC} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type ProfileContainerPropsType = {
    setUserProfile: (profile: any) => void
    profile: any
    match: any
    getProfileTC: (userId: string) => void
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
    return {profile: state.profilePage.profile}
}

let withUriDataContainerComponent = withRouter<RouteComponentProps, any>(ProfileContainer);

export default connect(mapStateToProps, { getProfileTC })(withUriDataContainerComponent as React.ComponentType<any >);
