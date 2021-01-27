import React from "react";
import styles from "./Header.module.css";
import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();
  return (
    <div className={styles.head}>
      <div className={styles.header}>
        <h1 className={styles.title}>Мой список покупок</h1>
        <div className={styles.login}>
          <Avatar size="large" icon={<UserOutlined />} />
          {props.isAuth ? (
            <NavLink to={"/profile"} className={styles.text}>
              {props.login}
            </NavLink>
          ) : (
            <Button onClick={() => history.push("/login")}>Войти</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;