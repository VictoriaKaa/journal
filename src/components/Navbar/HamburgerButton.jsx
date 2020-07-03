import React, { useContext } from 'react';
import styles from './Navbar.module.css';
import { MenuContext } from './NavState';

const HamburgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <div className={styles.menuBtn} onClick={clickHandler}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
  </div>
  );
}

export default HamburgerButton;