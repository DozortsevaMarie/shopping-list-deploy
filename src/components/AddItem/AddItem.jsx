import React, {useEffect, useState} from "react";
import { Button, Form, Input } from "antd";
import classNames from "classnames";
import styles from "./AddItem.module.css";

const AddItem = (props) => {
    const { changeProductValue } = props;
    const [state, setActive] = useState(false);
    const [inputValue, setInputValue] = useState();
    const [value, setValue] = useState();

    useEffect(() => {
        changeProductValue(value);
    }, [value, changeProductValue]);

    useEffect(() => setInputValue(props.inputElement), [props.inputElement]);

    const addProductToAList = () => {
        if (value !== null && value !== undefined && value.length > 0) {
            props.addProduct(props.item, value);
            setValue(null);
        }
    };
  return (
    <div className={styles.wrapper}>
      <Form
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
      </Button>
    </div>
  );
};

export default AddItem;
