import React from "react";
import styles from "./Month.module.css";
import { Link } from "react-router-dom";
import { monthNames } from "../../../constants";
import cn from "classnames";
import DaysTable from "./DaysTable";

const Months = (props) => {
  const { match, history } = props;
  let date = match.params.number;
  let [month, year] = date.split("-");
  month--;
  let numDays = 32 - new Date(year, month, 32).getDate();
  // список дней месяца
  let days = [];
  for (let i = 0; i < numDays; ) {
    days[i] = new Date(year, month, ++i);
  }
  return (
    <div className={styles.block}>
      <div className={styles.title}>
        РАЗВОРОТ НА МЕСЯЦ {monthNames[month + 1]} {year} года
      </div>
      <div className={styles.month}>
        <DaysTable days={days} url={match.url} />
      </div>
      <div className={styles.backBlock}>
        <Link
          to={`${match.url}/tracker`}
          className={cn(styles.link, styles.linkTracker)}
        >
          Трекер привычек месяца
        </Link>
      </div>
      <div className={styles.backBlock}>
        <div className={styles.back} onClick={history.goBack}>
          Вернуться к списку месяцев
        </div>
      </div>
    </div>
  );
};

export default Months;