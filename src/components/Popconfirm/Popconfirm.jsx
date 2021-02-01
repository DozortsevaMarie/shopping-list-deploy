import React from "react";
import { Popconfirm, message } from "antd";

const PopConfirm = (props) => {
  const handleConfirm = () => {
    message.success("Список удалён");
    props.setVisible(false);
    props.deleteListAction();
  };
  const handleCancel = () => {
    message.error("Список не удалён");
    props.setVisible(false);
  };

  return (
    <Popconfirm
      title="Вы хотите удалить список?"
      onConfirm={handleConfirm}
      onCancel={handleCancel}
      okText="Да"
      cancelText="Нет"
      visible={props.visible}
   />
  );
};

export default PopConfirm;
