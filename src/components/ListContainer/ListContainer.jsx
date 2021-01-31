import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import {
  addItemToSavedList,
  changeProductValue,
  deleteItemFromSavedList,
  deleteList,
  editItemInSavedList,
} from "../../redux/mainPageReducer";
import { useHistory, useParams } from "react-router";
import TableComponent from "../Table/TableComponent";
import AddItem from "../AddItem/AddItem";
import styles from "./ListContainer.module.css";
import PopConfirm from "../Popconfirm/Popconfirm";

const ListContainer = (props) => {
  let { id } = useParams();
  let history = useHistory();
  let listIndex = props.savedLists.findIndex((item) => item.id === +id);
  let list = props.savedLists[listIndex];
  let items = list.items;

  const deleteListAction = () => {
    props.deleteList(list);
    history.push("/lists");
  };

  const [visible, setVisible] = React.useState(false);
  const showConfirm = () => {
    setVisible(true);
  };

  return (
    <div>
      <h2>{list.title}</h2>
      <p>{list.description}</p>
      <AddItem
        changeProductValue={props.changeProductValue}
        addProduct={props.addItemToSavedList}
        inputElement={props.inputElement}
        item={list}
      />
      <TableComponent
        shoppingList={items}
        item={list}
        editContent={props.editItemInSavedList}
        deleteProduct={props.deleteItemFromSavedList}
      />
      <Button onClick={showConfirm} type="primary" className={styles.DeleteBtn}>
        Удалить список
      </Button>
      <PopConfirm
        visible={visible}
        setVisible={setVisible}
        deleteListAction={deleteListAction}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    savedLists: state.mainPageReducer.savedLists,
    inputElement: state.mainPageReducer.inputElement,
  };
};

export default connect(mapStateToProps, {
  deleteItemFromSavedList,
  editItemInSavedList,
  deleteList,
  addItemToSavedList,
  changeProductValue,
})(ListContainer);
