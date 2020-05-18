import React from "react";
import styles from "./MonthList.module.css";
import { reduxForm, Field } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required, month, year2000 } from "../utils/validators/validators";
import MonthItem from "./MonthItem";

const MonthList = (props) => {
  const addMonth = (values) => {
    let isHave = props.monthData.every((el) => {
      if (+el.month === +values.month && +el.year === +values.year)
        return false;
      return true;
    });
    if (isHave) props.addMonth(values.month, values.year);
    else alert("Такой месяц уже есть.");
  };
  let num = 1;
  return (
    <div className={styles.monthListBlock}>
      <div className={styles.monthListTitle}>РАЗВОРОТЫ НА МЕСЯЦ</div>
      <AddMonthFormRedux onSubmit={addMonth} />
      <div className={styles.months}>Месяцы:</div>
      {props.monthData.map((element) => (
        <div className={styles.monthItem} key={element.id} >
          <span>{num++}.&nbsp;</span>{" "}
          <MonthItem deleteMonth={props.deleteMonth} element={element} />
        </div>
      ))}
    </div>
  );
};

const AddMonthForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.monthForm}>
        <div className={styles.formText}>Месяц: </div>
        <Field
          component={Input}
          name="month"
          placeholder="Месяц"
          type="number"
          validate={[required, month]}
          className={styles.formControl}
        />
        <div className={styles.formText}>Год: </div>
        <Field
          component={Input}
          name="year"
          type="number"
          placeholder="Год"
          validate={[required, year2000]}
          className={styles.formControl}
        />
        <button className={styles.addBtn}>Добавить</button>
      </div>
    </form>
  );
};

const AddMonthFormRedux = reduxForm({ form: "addMonthForm" })(AddMonthForm);

export default MonthList;
