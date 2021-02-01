import React from "react";
import {Button, Input, Modal} from "antd";
import styles from "./Modal.module.css";
import TextArea from "antd/es/input/TextArea";

class ModalWindowClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		isModalVisible: false,
	}
  }

  showModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  saveListAction = () => {
    let list = this.props.shoppingList;
    this.props.saveList(this.state.title, this.state.description, list);
  };

  handleOk = () => {
    this.setState({
		isModalVisible: false,
	});
    this.saveListAction();
    this.props.setAlertVisible(true);
  };

  handleCancel = () => {
    this.setState({
      isModalVisible: false,
    });
  };
  handleClick = (e) => {
	  this.setState({
		  title: e.target.value
	  })
  }

  render = () => {
  	const { isModalVisible, title, description} = this.state;
		return (
			<div>
				<Button type={"primary"} onClick={this.showModal} className={styles.saveBtn}>
					Сохранить
				</Button>
				<Modal
					title="Сохранить данный список?"
					visible={isModalVisible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
					okText={"Да"}
					cancelText={"Нет"}
				>
					<span>Название списка</span>
					<Input
						type="text"
						placeholder={"Введите название списка"}
						value={title}
						onChange={this.handleClick}
					/>
					<span>Описание</span>
					<TextArea
						onChange={(e) => {
							this.setState({
								description: e.target.value
							})}}
							/>
				</Modal>
			</div>
		);
	}
}

export default ModalWindowClass;