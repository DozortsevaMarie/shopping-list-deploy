import React from "react";
import { Card } from "antd";

const ListCard = (props) => (
  <Card
    title={props.myTitle}
    bordered={false}
    style={{ width: "30%", margin: "10px" }}
  >
    <p>{props.item.description}</p>
  </Card>
);

export default ListCard;
