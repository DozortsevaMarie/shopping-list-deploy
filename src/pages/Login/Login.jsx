import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { logIn } from "../../redux/loginReducer";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 1, span: 9 },
};

const Login = (props) => {
  const history = useHistory();

  const onFinish = (values) => {
    props.logIn(values.username, values.password, values.remember);
    history.goBack();
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Логин"
        name="username"
        rules={[{ required: true, message: "Введите логин!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: "Введите пароль!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Запомнить меня</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connect(null, { logIn })(Login);
