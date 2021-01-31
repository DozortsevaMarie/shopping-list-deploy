import React, { useState } from "react";
import { Empty } from "antd";
import styles from "./CreateList.module.css";
import {
  addProduct,
  changeProductValue,
  deleteProduct,
  editContent,
  saveList,
} from "../../redux/mainPageReducer";
import { connect } from "react-redux";
import TableComponent from "../../components/Table/TableComponent";
import ModalWindow from "../../components/Modal/Modal";
import SuccessAlert from "../../components/SuccessAlert/SuccessAlert";
import AddItem from "../../components/AddItem/AddItem";

const CreateList = (props) => {
  const [alertVisible, setAlertVisible] = useState(false);
  const handleAlertClose = () => {
    setAlertVisible(false);
  };
  return (
    <div>
      <h1>Создать лист</h1>
      <div className={styles.alert}>
        {alertVisible && <SuccessAlert handleAlertClose={handleAlertClose} />}
      </div>
      <AddItem
        changeProductValue={props.changeProductValue}
        addProduct={props.addProduct}
        inputElement={props.inputElement}
      />
      <div className={styles.emptyListImage}>
        {props.shoppingList.length === 0 && (
          <Empty description={"Список пуст"} />
        )}
        {props.shoppingList.length !== 0 && (
          <div>
            <TableComponent
              shoppingList={props.shoppingList}
              deleteProduct={props.deleteProduct}
              editContent={props.editContent}
            />
            <ModalWindow
              saveList={props.saveList}
              shoppingList={props.shoppingList}
              setAlertVisible={setAlertVisible}
              isAuth={props.isAuth}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    inputElement: state.mainPageReducer.inputElement,
    shoppingList: state.mainPageReducer.shoppingList,
    isAuth: state.loginReducer.isAuth,
  };
};

export default connect(mapStateToProps, {
  changeProductValue,
  addProduct,
  deleteProduct,
  editContent,
  saveList,
})(CreateList);