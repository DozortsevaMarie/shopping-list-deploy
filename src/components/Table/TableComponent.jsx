import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Form, Input, message, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import styles from "./Table.module.css";

const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          { required: true, message: `${title} продукта необходимо добавить.` },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className={styles.editableCellValueWrap}
        style={{ paddingRight: 24 }}
        onClick={toggleEdit}
      >
        {children}{" "}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

const TableComponent = (props) => {
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const aliquotToEight = Math.ceil(props.shoppingList.length / 8);
    if (page !== aliquotToEight) {
      setPage(aliquotToEight);
    }
  }, [props.shoppingList]);

  const columns = [
    {
      title: "№",
      key: "index",
      width: "5%",
      render: (value, item, index) => (currentPage - 1) * 8 + index + 1,
    },
    {
      title: "Название",
      dataIndex: "name",
      key: "name",
      width: "80%",
      editable: true,
    },
    {
      title: "Удалить",
      key: "delete",
      width: "10%",
      render: (text) => (
        <Button
          onClick={() => {
            let aliquotToNine = Math.ceil(props.shoppingList.length / 9);
            if (
              page !== aliquotToNine && currentPage === page
            ) {
                props.shoppingList.length > 9 &&
                props.shoppingList.length % 9 === 0
              ?
                setCurrentPage(currentPage)
              :
                setCurrentPage(aliquotToNine);
            }
            props.deleteProduct(props.item, text.id);
            message.success(`${text.name} удалён`);
          }}
        >
          <DeleteOutlined />
        </Button>
      ),
    },
  ];

  const selectionType = "checkbox";
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const handleSave = (row) => props.editContent(props.item, row);


  const newColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: handleSave,
      }),
    };
  });

  return (
    <>
      <Table
        components={components}
        dataSource={props.shoppingList}
        columns={newColumns}
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        rowClassName={() => styles.editableRow}
        pagination={{
          hideOnSinglePage: true,
          pageSize: 8,
          current: currentPage,
          onChange(current) {
            setCurrentPage(current);
            setPage(current);
          },
        }}
      />
    </>
  );
};

export default TableComponent;
