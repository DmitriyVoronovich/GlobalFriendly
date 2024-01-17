import React from 'react';
import Profile, {ProfilePropsType} from "./Profile";
import axios from "axios";
import {AppRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";

type ProfileContainerPropsType = {
    setUserProfile: (profile: any) => void
    profile: any
}

class ProfileContainer extends React.Component<ProfileContainerPropsType, AppRootStateType> {

    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer as React.ComponentType<ProfileContainerPropsType >);
