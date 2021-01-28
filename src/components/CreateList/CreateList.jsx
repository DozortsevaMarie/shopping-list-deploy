import React, { useEffect, useState } from "react";
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
import TableComponent from "../Table/TableComponent";
import ModalWindow from "../Modal/Modal";
import SuccessAlert from "../SuccessAlert/SuccessAlert";
import AddItem from "../AddItem/AddItem";

const CreateList = (props) => {
  // const { changeProductValue } = props;
  // const [state, setActive] = useState(false);
  // const [value, setValue] = useState();
  const [alertVisible, setAlertVisible] = useState(false);
  // const [inputValue, setInputValue] = useState();

  const handleAlertClose = () => {
    setAlertVisible(false);
  };

  /*useEffect(() => {
    changeProductValue(value);
  }, [value, changeProductValue]);*/

  // useEffect(() => setInputValue(props.inputElement), [props.inputElement]);

 /* const addProductToAList = () => {
    if (value !== null && value.length > 0) {
      props.addProduct(value);
      setValue(null);
    }
  };*/

  return (
    <div>
      <h1>Создать лист</h1>
      <div className={styles.alert}>
        {alertVisible && <SuccessAlert handleAlertClose={handleAlertClose} />}
      </div>
      {/*<Form
        className={classNames(styles.input, {
          [styles.active]: state,
        })}
        onSubmit={addProductToAList}
      >
        <Input
          size={"middle"}
          placeholder={"Введите наименование товара"}
          onChange={(e) => setValue(e.target.value)}
          value={inputValue}
          autoFocus={true}
          onPressEnter={addProductToAList}
        />
        <Button type="primary" onClick={addProductToAList}>
          Добавить
        </Button>
      </Form>
      <Button
        onClick={() => setActive(true)}
        className={classNames(styles.addBtn, {
          [styles.hidden]: state,
        })}
      >
       +<span className={styles.addText}>Добавить товар</span>
      </Button>*/}
      <AddItem changeProductValue={props.changeProductValue}
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