import React from "react";
import styles from "./Tracker.module.css";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/FormsControls/FormsControls";
import Habit from "./Habit";

const Tracker = (props) => {
  const { match, history } = props;
  let date = match.params.number;
  const [month, year] = date.split("-");
  let monthData = props.monthData.find((item) => {
    return +item.month === +month && +item.year === +year;
  });
  let trackerData = [...monthData.habits];

  const addHabit = (values) => {
    let today = new Date(year, month - 1);
    let days =
      32 - new Date(today.getFullYear(), today.getMonth(), 32).getDate();
    props.addHabit(monthData.id, values.habit, days, today.getDate());
  };

  return (
    <div className={styles.habitBlock}>
      <div className={styles.habitTitle}>ТРЕКЕР ПРИВЫЧЕК</div>
      <AddHabitFormFormRedux onSubmit={addHabit} />
      <Habit
        month={month}
        year={year}
        trackerData={trackerData}
        monthData={monthData}
        changeState={props.changeState}
        deleteHabit={props.deleteHabit}
        extendHabit={props.extendHabit}
      />
      <div className={styles.backBlock}>
        <div className={styles.back} onClick={history.goBack}>
          Вернуться к неделям
        </div>
      </div>
    </div>
  );
};

const AddHabitForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.trackerFormInner}>
        <Field
          component={Input}
          name="habit"
          placeholder="Введите привычку"
          className={styles.formControl}
        />
        <button className={styles.addBtn}>Добавить</button>
      </div>
    </form>
  );
};

const AddHabitFormFormRedux = reduxForm({ form: "addHabitForm" })(AddHabitForm);

export default Tracker;
