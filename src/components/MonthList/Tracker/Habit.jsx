import React from "react";
import styles from "./Tracker.module.css";

const Habit = ({ month, year, trackerData, monthData, ...props }) => {
  const changeState = (e, dayId, elemId) => {
    props.changeState(monthData.id, elemId, e.target.checked, dayId);
  };

  const deleteHabit = (habitId) => {
    props.deleteHabit(monthData.id, habitId);
  };
  const extendHabit = (habit) => {
    let date = new Date(year, month - 1);
    date.setMonth(date.getMonth() + 1);
    let days = 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
    props.extendHabit(
      date.getFullYear(),
      date.getMonth() + 1,
      habit,
      days,
      monthData
    );
  };
  let num = 1;
  let habits = trackerData.map((element) => {
    let done = element.days.map((day, num) => {
      return <label key={element.habitId + num} className={styles.done}>
        <input
          type="checkbox"
          id={element.habitId + num}
          defaultChecked={day}
          onChange={(e) => changeState(e, num, element.habitId)}
        />
        <span className={styles.checkmark}>{num + 1}</span>
      </label>
    });
    return (
      <div className={styles.habit}>
        <div>
          <div className={styles.id}>
            {num++}.&nbsp;
            <span className={styles.name}>{element.habit}</span>
            <span
              onClick={() => extendHabit(element.habit)}
              className={styles.extend}
            ></span>
            <span
              onClick={() => deleteHabit(element.habitId)}
              className={styles.delete}
            ></span>
            <div className={styles.dayList}>{done}</div>
          </div>
        </div>
      </div>
    );
  });

  return <div>{habits}</div>;
};

export default Habit;
