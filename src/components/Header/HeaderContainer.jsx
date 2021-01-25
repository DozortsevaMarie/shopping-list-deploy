import React from "react";
import Header from "./Header";
import { connect } from "react-redux";

const HeaderContainer = (props) => {
  return <Header isAuth={props.isAuth} login={props.login}/>;
};
const mapStateToProps = (state) => ({
  isAuth: state.loginReducer.isAuth,
  login: state.loginReducer.login,
});

export default connect(mapStateToProps)(HeaderContainer);