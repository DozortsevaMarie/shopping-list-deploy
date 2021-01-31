import React from "react";
import { Empty } from "antd";
import styles from "./MyShoppingLists.module.css";
import { NavLink } from "react-router-dom";
import ListCard from "../../components/ListCard/ListCard";
import { connect } from "react-redux";
import {
  deleteItemFromSavedList,
  deleteList,
} from "../../redux/mainPageReducer";

const MyShoppingLists = (props) => (
    <>
      <h1>Сохранённые списки покупок</h1>
      {props.savedLists.length > 0 ? (
          <div className={styles.siteCardBorderLessWrapper}>
            {props.savedLists.map((item) => {
              const myTitle = (
                  <NavLink to={`/lists/${item.id}`}>{item.title}</NavLink>
              );
              return <ListCard key={item.id} item={item} myTitle={myTitle} />;
            })}
          </div>
      ) : (
          <Empty description="Сохранённых списков нет" />
      )}
    </>
);

const mapStateToProps = ({ mainPageReducer }) => ({
  savedLists: mainPageReducer.savedLists,
});

export default connect(mapStateToProps, {
  deleteItemFromSavedList,
  deleteList,
})(MyShoppingLists);
