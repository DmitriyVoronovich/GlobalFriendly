import React from 'react';
import {connect} from "react-redux";
import Navbar from "./Navbar";
import {AppRootStateType} from "../../redux/redux-store";

let mapStateToProps = (state: AppRootStateType) => {
    return {
        sidebar: state.sidebar
    }
}
let mapDispatchToProps = () => {
    return {
    }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer;