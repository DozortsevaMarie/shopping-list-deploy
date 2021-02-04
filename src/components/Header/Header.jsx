import React from "react";
import styles from "./Header.module.css";
import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/logo.png";
import { connect } from "react-redux";
import { logOut } from "../../redux/loginReducer";

const Header = (props) => {
    const history = useHistory();
    return (
        <header className={styles.header}>
            <img className={styles.logo} alt="logo" src={logo} />
            <h1 className={styles.title}>Мой список покупок</h1>
            <div className={styles.login}>
                <Button type="link"
                        shape="circle"
                        size="large"
                        onClick={() => history.push("/profile")}>
                    <Avatar size="large" icon={<UserOutlined />} />
                </Button>
                {props.isAuth ? (
                    <div>
                        <NavLink to={"/profile"} className={styles.text}>
                            {props.login}
                        </NavLink>
                        <Button className={styles.btn} size="small" onClick={props.logOut}>
                            Выйти
                        </Button>
                    </div>
                ) : (
                    <Button onClick={() => history.push("/login")}>Войти</Button>
                )}
            </div>
        </header>
    );
};

const mapStateToProps = ({ loginReducer }) => ({
    isAuth: loginReducer.isAuth,
    login: loginReducer.login,
});

export default connect(mapStateToProps, { logOut })(Header);
