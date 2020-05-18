import React from "react";
import styles from "./MonthList.module.css";
import { Link } from "react-router-dom";
import { monthNames } from "../../constants";

const MonthItem = ({element, deleteMonth, ...props}) => {
  return (
    <span  className={styles.monthLink}>
      <Link
        to={`/months/${element.month}-${element.year}`}
        className={styles.link}
      >
        <span>{monthNames[+element.month]}&nbsp;</span>
        <span>{element.year}</span>
      </Link>
      <span
        className={styles.delete}
        onClick={() => deleteMonth(element.id)}
      ></span>
    </span>
  );
};

export default MonthItem;
