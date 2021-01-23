import React from 'react'
import {Alert} from "antd";

const SuccessAlert = (props) => {
	return (
		<Alert message="Список успешно сохранён"
			   type="success"
			   showIcon
			   closable
			   afterClose={props.handleAlertClose}
		/>
	)
}

export default SuccessAlert;