import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
import styles from "./ModalWindow.module.css";
import TextArea from "antd/es/input/TextArea";
import { useHistory } from "react-router";

const ModalWindow = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const history = useHistory();

  const showModal = () => {
    if (props.isAuth === false) {
      history.push("/login");
      return;
    }
    setIsModalVisible(true);
  };

  const saveListAction = () => {
    const list = props.shoppingList;
    props.saveList(title, description, list);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    saveListAction();
    props.setAlertVisible(true);
  };

  const handleCancel = () => setIsModalVisible(false);

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
          type="text"
          placeholder={"Введите название списка"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <span>Описание</span>
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Modal>
    </>
  );
};

export default ModalWindow;
