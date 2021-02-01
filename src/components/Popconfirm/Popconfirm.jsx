import React from "react";
import { Popconfirm, message } from 'antd';


const PopConfirm = (props) => {

	const confirm = (e) => {
		message.success('Список удалён');
		props.setVisible(false);
		props.deleteListAction();
	}

	const cancel = (e) => {
		message.error('Список не удалён');
		props.setVisible(false)
	}
  return (
    <Popconfirm
      title="Вы хотите удалить список?"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Да"
      cancelText="Нет"
	  visible={props.visible}
    >
    </Popconfirm>
  );
};

export default PopConfirm;
