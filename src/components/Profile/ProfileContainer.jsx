import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import DeniedAccess from "../DeniedAccess/DeniedAccess";

const ProfileContainer = (props) => {
  return props.isAuth === false ? (
    <DeniedAccess/>
  ) : (
    <Profile login={props.login} />
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.loginReducer.isAuth,
    login: state.loginReducer.login,
  };
};

export default connect(mapStateToProps)(ProfileContainer);