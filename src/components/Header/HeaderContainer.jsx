import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/loginReducer";

const HeaderContainer = (props) => {
  return (
    <Header logout={props.logout}
            isAuth={props.isAuth}
            login={props.login} />
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.loginReducer.isAuth,
  login: state.loginReducer.login,
});

export default connect(mapStateToProps, { logout })(HeaderContainer);