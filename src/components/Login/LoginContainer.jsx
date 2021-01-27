import React from "react";
import Login from "./Login";
import { login } from "../../redux/loginReducer";
import { connect } from "react-redux";

const LoginContainer = (props) => {
  return <Login login={props.login} />;
};
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, { login })(LoginContainer);