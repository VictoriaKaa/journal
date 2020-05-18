import { connect } from "react-redux";
import Tracker from "./Tracker";
import {
  addHabit,
  changeHabitState,
  deleteHabit,
  addMonth,
  addMonthWithHabit
} from "../../../redux/months-reducer";

let mapStatetoProps = (state) => ({
  monthData: state.monthPage.monthData,
});

let mapDispatchToProps = (dispatch) => {
  return {
    addHabit: (id, habit, days, today) => {
      dispatch(addHabit(id, habit, days, today));
    },
    changeState: (id, habitId, checked, dayNum) => {
      dispatch(changeHabitState(id, habitId, checked, dayNum));
    },
    deleteHabit: (id, habitId) => {
      dispatch(deleteHabit(id, habitId));
    },
    addMonth: (year, month) => {
      dispatch(addMonth(month, year));
    },
    extendHabit: (year, month, habit, days, monthData) => {
      let monthItem = monthData.find((item) => {
        return +item.month === +month && +item.year === +year;
      });
      if (monthItem === undefined) {     
        let arrDays = new Array(days);
        arrDays.fill(false);
        dispatch(addMonthWithHabit(month, year, habit, arrDays));
      } else dispatch(addHabit(monthItem.id, habit, days, 1));
    },
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Tracker);
