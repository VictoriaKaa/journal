import React from "react";
import styles from "./Week.module.css";
import { monthNames } from "../../../constants"
import WeekTable from "./WeekTable";

const Week = (props) => {
  const { match, history } = props;
  let date = match.params.number;
  const [month, year] = date.split("-");
  let monthData = props.monthData.find((item) => {return (+item.month === +month && +item.year === +year)});
  let [numWeeks, week] = match.params.days.split("days");
  const [firstDay, endDay] = week.split("-");
  // получаемые дни
  let days = [];
  let numberOfDays = endDay - firstDay + 1;
  let day = firstDay;
  for (let i = 0; i < numberOfDays; i++) {
    days[i] = day++;
  }
  return (
    <div className={styles.weekBlock}>
      <div className={styles.title}>
        НЕДЕЛЯ С {firstDay} ПО {endDay} <br/> {monthNames[month]} {year} года
      </div>
      <div className={styles.block}>
         <WeekTable days={days} week={numWeeks} fullData={props.monthData} monthData={monthData} addColor={props.addColor} addDoingAtDay={props.addDoingAtDay}
         deleteDoing={props.deleteDoing} addDoing={props.addDoing} extendDoing={props.extendDoing}
         addMonthWithDoing={props.addMonthWithDoing} />
      </div>
      <div className={styles.backBlock}>
        <div className={styles.back} onClick={history.goBack}>
          Вернуться к неделям
        </div>
      </div>
    </div>
  );
};


export default Week;
