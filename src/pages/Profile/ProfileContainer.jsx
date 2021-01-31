import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import DeniedAccess from "../../components/DeniedAccess/DeniedAccess";

const ProfileContainer = (props) =>
  props.isAuth === false ? <DeniedAccess /> : <Profile login={props.login} />;

const mapStateToProps = ({ loginReducer }) => ({
  isAuth: loginReducer.isAuth,
  login: loginReducer.login,
});

export default connect(mapStateToProps)(ProfileContainer);
