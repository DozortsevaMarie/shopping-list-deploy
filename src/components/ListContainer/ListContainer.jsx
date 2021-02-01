import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import {
  addItemToSavedList,
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
  const { id } = useParams();
  const history = useHistory();
  const listIndex = props.savedLists.findIndex((item) => item.id === +id);
  const list = props.savedLists[listIndex];
  const items = list.items;

  const deleteListAction = () => {
    props.deleteList(list);
    history.push("/lists");
  };

  const [visible, setVisible] = React.useState(false);
  const showConfirm = () => setVisible(true);

  return (
    <div>
      <h2>{list.title}</h2>
      <p>{list.description}</p>
      <AddItem
        addProduct={props.addItemToSavedList}
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
const mapStateToProps = ({ mainPageReducer }) => ({
  savedLists: mainPageReducer.savedLists,
});

export default connect(mapStateToProps, {
  deleteItemFromSavedList,
  editItemInSavedList,
  deleteList,
  addItemToSavedList,
})(ListContainer);
