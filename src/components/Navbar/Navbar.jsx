import React, { useRef, useState, createContext, useContext } from 'react';
import styles from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import useOnClickOutside from '../utils/hooks/onClickOutside';
import NavState, { MenuContext } from './NavState';
import HamburgerButton from './HamburgerButton';

const Navbar = (props) => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  return (
      <nav ref={node} >
        <div className={`${isMenuOpen? styles.navMenu : styles.noMenu}`} >
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
        </div>
        <HamburgerButton />
      </nav>
  );
}

export default Navbar;