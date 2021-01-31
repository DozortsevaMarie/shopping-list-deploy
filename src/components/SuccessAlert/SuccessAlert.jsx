import React from "react";
import { Alert } from "antd";

const SuccessAlert = ({ handleAlertClose }) => (
  <Alert
    message="Список успешно сохранён"
    type="success"
    showIcon
    closable
    afterClose={handleAlertClose}
  />
);

export default SuccessAlert;
