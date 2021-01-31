import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => (
  <nav className={styles.nav}>
    <ul className={styles.list}>
      <li>
        <NavLink to="/create-list" className={styles.item}>
          Создать лист
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" className={styles.item}>
          Профиль
        </NavLink>
      </li>
      <li>
        <NavLink to="/lists" className={styles.item}>
          Мои списки
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={styles.item}>
          О нас
        </NavLink>
      </li>
      <li>
        <NavLink to="/settings" className={styles.item}>
          Настройки
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
