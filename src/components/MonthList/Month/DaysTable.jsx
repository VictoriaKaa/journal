import React from "react";
import styles from "./Month.module.css";
import { Link } from "react-router-dom";

const DaysTable = ({ days, url }) => {
  let weeks = [];
  let numWeeks = 0;
  weeks[0] = new Array(7);
  weeks[0].fill(" ");
  days.forEach((e) => {
    weeks[numWeeks][e.getDay()] = e;
    if (e.getDay() === 6 && days[days.length-1] !== e) {
      numWeeks++;
      weeks[numWeeks] = [];
    }
  });
  numWeeks = 0;
  let sortWeeks = weeks.map((e) => {
    let daysArr = [];
    daysArr.push(
      ...e.map((day) => {
        if (day instanceof Date)
          return <span className={styles.day} >{day.getDate()}</span>;
        return <span className={styles.day} ></span>;
      })
    );
    let firstDay = e.find((item) => item instanceof Date).getDate();
    daysArr.unshift(
      <span className={styles.day}>
        <Link
          to={{
            pathname: `${url}/${numWeeks}days${firstDay}-${e[e.length - 1].getDate()}`,
            state: {}
          }}
          className={styles.link}
        >
          {++numWeeks}
        </Link>
      </span>
    );
    return <div className={styles.week}>{daysArr}</div>;
  });

  let dayNames = ["№", "ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  let dayNamesList = dayNames.map((name) => (
    <span className={styles.day}>{name}</span>
  ));

  return (
    <div>
      <div className={styles.week}>{dayNamesList}</div>
      <div>{sortWeeks}</div>
    </div>
  );
};

export default DaysTable;
