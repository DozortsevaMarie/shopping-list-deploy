import React from "react";
import styles from "./Profile.module.css";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const Profile = (props) => {
  return (
    <div>
      <h1>Мой профиль</h1>
      <div className={styles.wrapper}>
        <Avatar size={200} icon={<UserOutlined />} />
        <div>
          <span className={styles.text}>Мой Логин:</span>
          <span className={styles.login}>{props.login}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
