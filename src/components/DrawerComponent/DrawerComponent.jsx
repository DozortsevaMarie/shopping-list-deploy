import React, { useState } from "react";
import { Button, Drawer } from "antd";
import NavBar from "../NavBar/NavBar";
import { MenuOutlined } from "@ant-design/icons";
import styles from "./DrawerComponent.module.css";

const DrawerComponent = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const showDrawer = () => {
    setIsVisible(true);
  };
  const onClose = () => {
    setIsVisible(false);
  };
  return (
    <div className={styles.drawer}>
      <Button type="default"
			  style={{width: "50px"}}
			  onClick={showDrawer}>
        <MenuOutlined />
      </Button>
      <Drawer
        title="Меню"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={isVisible}
		drawerStyle={{backgroundColor: `#F5F5F7`}}
      >
        <NavBar />
      </Drawer>
    </div>
  );
};

export default DrawerComponent;
