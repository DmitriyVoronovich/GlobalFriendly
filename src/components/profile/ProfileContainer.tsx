import React from 'react';
import Profile, {ProfilePropsType} from "./Profile";
import axios from "axios";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type ProfileContainerPropsType = {
    setUserProfile: (profile: any) => void
    profile: any
    match: any
}

class ProfileContainer extends React.Component<ProfileContainerPropsType, AppRootStateType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(res => {
                this.props.setUserProfile(res.data)
            })
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

export default connect(mapStateToProps, { setUserProfile })(withUriDataContainerComponent as React.ComponentType<any >);
