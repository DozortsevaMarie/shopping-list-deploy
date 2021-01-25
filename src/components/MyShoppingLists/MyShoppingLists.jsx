import React from "react";
import { Empty } from "antd";
import styles from "./MyShoppingLists.module.css";
import { NavLink } from "react-router-dom";
import ListCard from "../ListCard/ListCard";

const MyShoppingLists = (props) => {
  return (
    <div>
      <h1>Сохранённые списки покупок</h1>
      {props.savedLists.length === 0 && (
        <Empty description="Сохранённых списков нет" />
      )}
      {props.savedLists.length > 0 && (
        <div className={styles.siteCardBorderLessWrapper}>
          {props.savedLists.map((item) => {
            const myTitle = (
              <NavLink to={`/lists/${item.id}`}>{item.title}</NavLink>
            );
            return <ListCard key={item.id} item={item} myTitle={myTitle} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MyShoppingLists;