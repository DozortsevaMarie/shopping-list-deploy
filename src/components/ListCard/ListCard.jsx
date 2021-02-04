import React from "react";
import { Card } from "antd";
import styles from "./ListCard.module.css";

const ListCard = (props) => (
    <div className={styles.card}>
      <Card title={props.myTitle}
            bordered={false}
            style={{ width: "100%" }}>
        <p>{props.item.description}</p>
      </Card>
    </div>
);

export default ListCard;
