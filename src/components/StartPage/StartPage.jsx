import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./StartPage.module.css";
import { themes } from "../../constants";
import ThemeContext from "../common/ThemeContext";

const StartPage = (props) => {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div className={styles.block}>
      <div className={styles.title}>
        Добро пожаловать
        <br /> в онлайн ежедневник!
      </div>
      <div className={styles.system}>Система основана на running list.</div>
      <div>
        <span>Сменить тему: </span>
        <button
          onClick={() => toggle(themes.pastelTheme)}
          className={styles.themeBtn}
        >
          ПАСТЕЛЬ
        </button>
        <button
          onClick={() => toggle(themes.darkTheme)}
          className={styles.themeBtn}
        >
          ТЕМНАЯ
        </button>
        <button
          onClick={() => toggle(themes.lightTheme)}
          className={styles.themeBtn}
        >
          СВЕТЛАЯ
        </button>
      </div>

      <div className={styles.navTitle}>
        Здесь можно найти следующие развороты:
      </div>
      <ul className={styles.list}>
        <li>
          <Link exact to="/plans">
            Планы и цели
          </Link>
        </li>
        <li>
          <Link to="/movies">Фильмы</Link>
        </li>
        <li>
          <Link to="/books">Книги</Link>
        </li>
        <li>
          <Link to="/tracker">Трекер привычек</Link>
        </li>
        <li>
          <Link to="/months">Развороты на месяц</Link>
        </li>
      </ul>
      <div className={styles.keys}>
        Для разворотов на месяц со списком дел используются следующие
        обозначения:
      </div>
      <div className={styles.monthBlock}>
        <div className={styles.add}>добавить дело на этот день</div>
        <div className={styles.have}>есть дело на этот день</div>
        <div className={styles.done}>дело сделано</div>
        <div className={styles.moved}>дело перенесено</div>
        <div className={styles.cancel}>дело отменено</div>
      </div>
    </div>
  );
};

export default StartPage;
