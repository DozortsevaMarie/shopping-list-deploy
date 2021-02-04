import React from "react";
import styles from "./Profile.module.css";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const Profile = ({ login }) => (
    <>
        <h1>Мой профиль</h1>
        <div className={styles.wrapper}>
            <Avatar size={100} icon={<UserOutlined />} />
            <span className={styles.text}>Мой Логин:</span>
            <span className={styles.login}>{login}</span>
        </div>
    </>
);

export default Profile;
