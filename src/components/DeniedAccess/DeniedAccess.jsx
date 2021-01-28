import React from "react";
import { FrownTwoTone } from "@ant-design/icons";
import { Button } from "antd";
import styles from "./DeniedAccess.module.css";
import { useHistory } from "react-router";

const DeniedAccess = () => {
  let history = useHistory();

  return (
    <div className={styles.wrapper}>
      <div>
        <FrownTwoTone style={{ fontSize: "50px", color: "#08c" }} />
        <span className={styles.span}>Вы ещё не вошли в свой аккаунт</span>
      </div>
      <Button type="primary" onClick={() => history.push("/login")}>
        Войти
      </Button>
    </div>
  );
};

export default DeniedAccess;