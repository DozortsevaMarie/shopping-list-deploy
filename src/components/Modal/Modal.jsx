import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
import styles from "./Modal.module.css";
import TextArea from "antd/es/input/TextArea";
import {useHistory} from "react-router";

const ModalWindow = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  let history = useHistory();

  const showModal = () => {
    if (props.isAuth === false) {
      history.push("/profile")
      return
    }
    setIsModalVisible(true);
  };
  const saveListAction = () => {
    let list = props.shoppingList;
    props.saveList(title, description, list);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    saveListAction();
    props.setAlertVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type={"primary"} onClick={showModal} className={styles.saveBtn}>
        Сохранить
      </Button>
      <Modal
        title="Сохранить данный список?"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={"Да"}
        cancelText={"Нет"}
      >
        <span>Название списка</span>
        <Input
          placeholder={"Введите название списка"}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <span>Описание</span>
        <TextArea
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </Modal>
    </>
  );
};

export default ModalWindow;