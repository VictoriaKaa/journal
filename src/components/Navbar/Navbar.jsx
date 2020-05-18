import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav>
      <div className={styles.item}>
        <NavLink exact to='/' activeClassName={styles.active}>Начальная страница</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/calendar' activeClassName={styles.active}>Календарь</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink exact to='/plans' activeClassName={styles.active}>Планы и цели</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/movies' activeClassName={styles.active}>Фильмы</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/books' activeClassName={styles.active}>Книги</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/months' activeClassName={styles.active}>Развороты на месяц</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;