import React from "react";
import styles from "./Week.module.css";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/FormsControls/FormsControls";
import { notDone, done, moved, cancel } from "../../../constants";
import cn from "classnames";

const WeekTable = ({
  days,
  week,
  fullData,
  monthData,
  addColor,
  addDoingAtDay,
  deleteDoing,
  addDoing,
  extendDoing,
  addMonthWithDoing
}) => {
  let _color = "#eb4034";

  let table = [
    <th>
      <input
        ref={(input) => (_color = input)}
        type="color"
        required
        className={styles.colorInput}
      />
    </th>,
  ];
  table.push(
    days.map((el) => {
      return (
        <th className={styles.day} key={el.id}>
          {el}
        </th>
      );
    })
  );
  const addDoingForm = (values) => {
    addDoing(monthData.id, values.doing, week);
  };
  const extendDoingOnWeek = (id, doingId, week) => {
    let today = new Date(
      monthData.year,
      monthData.month - 1,
      days[days.length - 1] + 1
    );
    let doingItem = monthData.doings.find(value => value.doingId === doingId)
    if (today.getMonth() !== monthData.month - 1) {
      let monthItem = fullData.find((item) => {
        return +item.month === +today.getMonth()+1 && +item.year === +today.getFullYear();
      });
      if (monthItem === undefined) addMonthWithDoing(today.getMonth()+1, today.getFullYear(), doingItem.doing);
      else addDoing(monthItem.id, doingItem.doing, 0)
    }
    else extendDoing(id, doingId, week);
  };
  // список дел
  let toDoList = [];
  if (monthData.doings) {
    toDoList = monthData.doings
      .filter((el) => el.week.includes(+week))
      .map((el) => {
        let tableRow = [];
        tableRow.push(
          <th
            onClick={() => addColor(monthData.id, el.doingId, _color.value)}
            style={{ backgroundColor: el.color }}
          ></th>
        );
        for (let i = +days[0]; i <= days[days.length - 1]; i++) {
          let stateClassName = "add";
          let currentDay = el.days.find((item) => item.day === i) || false;
          if (currentDay.state === notDone) {
            stateClassName = "have";
          } else if (currentDay.state === done) {
            stateClassName = "done";
          } else if (currentDay.state === moved) {
            stateClassName = "moved";
          } else if (currentDay.state === cancel) {
            stateClassName = "cancel";
          }
          tableRow.push(
            <th
              onClick={() => addDoingAtDay(monthData.id, el.doingId, i)}
              className={cn(styles.workDay, styles[stateClassName])}
            ></th>
          );
        }
        tableRow.push(
          <th className={cn(styles.day, styles.todo)}>
            {el.doing}
            <span>
              <span
                onClick={() =>
                  extendDoingOnWeek(monthData.id, el.doingId, +week + 1)
                }
                className={styles.extend}
              ></span>
              <span
                className={styles.deleteBtn}
                onClick={() => deleteDoing(monthData.id, el.doingId)}
              ></span>
            </span>
          </th>
        );
        return <tr>{tableRow}</tr>;
      });
  }

  return (
    <table>
      <tr>
        {table}
        <th className={styles.list}>
          <div>СПИСОК ДЕЛ</div>
          <AddDoingFormRedux onSubmit={addDoingForm} />
        </th>
      </tr>
      {toDoList}
    </table>
  );
};

const AddDoingForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.form}>
      <div className={styles.formInner}>
        <Field
          component={Input}
          name="doing"
          placeholder="Добавить новое дело"
          className={styles.formControl}
        />
        <button className={styles.addBtn}>Добавить</button>
      </div>
    </form>
  );
};
const AddDoingFormRedux = reduxForm({ form: "addDoingForm" })(AddDoingForm);

export default WeekTable;
