import React from "react";
import { connect } from "react-redux";
import styles from "../ListCard/ListCard.module.css";
import { Button } from "antd";
import {
  deleteItemFromSavedList,
  deleteList,
  editItemInSavedList,
} from "../../redux/mainPageReducer";
import { useHistory, useParams } from "react-router";
import TableComponent from "../Table/TableComponent";

const ListContainer = (props) => {
  let { id } = useParams();
  let history = useHistory();
  let listIndex = props.savedLists.findIndex((item) => item.id === +id);
  let list = props.savedLists[listIndex];
  let items = props.savedLists[listIndex].items;
  const deleteListAction = () => {
    props.deleteList(list);
    history.push("/lists");
  };

  return (
    <div>
      <h2>{list.title}</h2>
      <p>{list.description}</p>
      <TableComponent
        shoppingList={items}
        item={list}
        editContent={props.editItemInSavedList}
        deleteProduct={props.deleteItemFromSavedList}
      />
      <Button
        onClick={deleteListAction}
        type="primary"
        className={styles.DeleteBtn}
      >
        Удалить список
      </Button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    savedLists: state.mainPageReducer.savedLists,
  };
};

export default connect(mapStateToProps, {
  deleteItemFromSavedList,
  editItemInSavedList,
  deleteList,
})(ListContainer);
