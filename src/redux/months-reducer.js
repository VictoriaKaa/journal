import { v4 } from "uuid";
import { notDone, done, moved, cancel } from "../constants";

const ADD_MONTH = "ADD_MONTH";
// const CHANGE_MONTH_STATE = "CHANGE_MONTH_STATE";
const DELETE_MONTH = "DELETE_MONTH";
const ADD_DOING = "ADD_DOING";
const ADD_DOING_DAY = "ADD_DOING_DAY";
const DELETE_DOING = "DELETE_DOING";
const ADD_COLOR = "ADD_COLOR";
const ADD_HABIT = "ADD_HABIT";
const CHANGE_HABIT_STATE = "CHANGE_HABIT_STATE";
const DELETE_HABIT = "DELETE_HABIT";
const ADD_MONTH_HABIT = "ADD_MONTH_HABIT";
const EXTEND_DOING = "EXTEND_DOING";
const ADD_MONTH_DOING = "ADD_MONTH_DOING";

// state: delete => notDone => have => done => cancel => moved => => delete

// инициализация стейта
export let initialState = {
  monthData: [
    {
      id: "dkjghskdfjg",
      month: 3,
      year: 2020,
      doings: [
        {
          doingId: "qweqwe",
          doing: "сходить в магазин",
          color: "none",
          week: [0],
          days: [
            { day: 1, state: done },
            { day: 2, state: moved },
          ],
        },
      ],
      habits: [
        {
          habitId: "dkjghskdfjg",
          habit: "Привычка чистить зубы",
          days: [false, false, false, true],
          start: 2,
        },
      ],
    },
  ],
};

const monthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MONTH:
      return {
        ...state,
        monthData: [
          ...state.monthData,
          {
            id: action.id,
            month: action.month,
            year: action.year,
            doings: [],
            habits: [],
          },
        ],
      };
    case ADD_MONTH_HABIT:
      return {
        ...state,
        monthData: [
          ...state.monthData,
          {
            id: action.id,
            month: action.month,
            year: action.year,
            doings: [],
            habits: [
              {
                habitId: action.habitId,
                habit: action.habit,
                days: [...action.arrDays],
                start: 1,
              },
            ],
          },
        ],
      };
    case ADD_MONTH_DOING:
      return {
        ...state,
        monthData: [
          ...state.monthData,
          {
            id: action.id,
            month: action.month,
            year: action.year,
            doings: [
              {
                doingId: action.doingId,
                doing: action.doing,
                color: "none",
                week: [0],
                days: [],
              }
            ],
            habits: [],
          },
        ],
      };
    case DELETE_MONTH:
      return {
        ...state,
        monthData: state.monthData.filter((u) => u.id !== action.id),
      };
    case ADD_DOING: {
      return {
        ...state,
        monthData: state.monthData.map((u) => {
          if (u.id === action.id) {
            return {
              ...u,
              doings: [
                ...u.doings,
                {
                  doingId: action.doingId,
                  doing: action.doing,
                  week: [+action.week],
                  color: "none",
                  days: [],
                },
              ],
            };
          }
          return u;
        }),
      };
    }
    case ADD_DOING_DAY: {
      return {
        ...state,
        monthData: state.monthData.map((u) => {
          if (u.id === action.id) {
            return {
              ...u,
              doings: u.doings.map((el) => {
                if (el.doingId === action.doingId) {
                  let stateOfDay =
                    el.days.find((item) => item.day === action.day) || false;
                  let newState = notDone;
                  if (stateOfDay.state === moved) {
                    return {
                      ...el,
                      days: el.days.filter(
                        (item) => item.day !== stateOfDay.day
                      ),
                    };
                  } else if (
                    stateOfDay.state === notDone ||
                    stateOfDay.state === done ||
                    stateOfDay.state === cancel
                  ) {
                    if (stateOfDay.state === notDone) newState = done;
                    if (stateOfDay.state === done) newState = cancel;
                    if (stateOfDay.state === cancel) newState = moved;
                    return {
                      ...el,
                      days: el.days.map((item) => {
                        if (item.day === stateOfDay.day)
                          return { ...item, state: newState };
                        return item;
                      }),
                    };
                  }
                  return {
                    ...el,
                    days: [...el.days, { day: action.day, state: newState }],
                  };
                }
                return el;
              }),
            };
          }
          return u;
        }),
      };
    }
    case EXTEND_DOING:
      return {
        ...state,
        monthData: state.monthData.map((u) => {
          if (u.id === action.id) {
            return {
              ...u,
              doings: u.doings.map((el) => {
                if (el.doingId === action.doingId) {
                  let arr = el.week.slice();
                  arr.push(action.week);
                  return { ...el, week: arr };
                }
                return el;
              }),
            };
          }
          return u;
        }),
      };
    case DELETE_DOING:
      return {
        ...state,
        monthData: state.monthData.map((u) => {
          if (u.id === action.id) {
            return {
              ...u,
              doings: u.doings.filter((el) => el.doingId !== action.doingId),
            };
          }
          return u;
        }),
      };
    case ADD_COLOR:
      return {
        ...state,
        monthData: state.monthData.map((u) => {
          if (u.id === action.id) {
            return {
              ...u,
              doings: u.doings.map((el) => {
                if (el.doingId === action.doingId) {
                  return { ...el, color: action.color };
                }
                return el;
              }),
            };
          }
          return u;
        }),
      };
    case ADD_HABIT:
      return {
        ...state,
        monthData: state.monthData.map((u) => {
          let arrDays = new Array(action.newDays);
          arrDays.fill(false);
          if (u.id === action.id) {
            return {
              ...u,
              habits: [
                ...u.habits,
                {
                  habitId: action.habitId,
                  habit: action.habit,
                  days: [...arrDays],
                  start: action.today,
                },
              ],
            };
          }
          return u;
        }),
      };
    case CHANGE_HABIT_STATE: {
      return {
        ...state,
        monthData: state.monthData.map((u) => {
          if (u.id === action.id) {
            return {
              ...u,
              habits: u.habits.map((el) => {
                if (el.habitId === action.habitId) {
                  el.days.splice(action.dayNum, 1, action.checked);
                  return el;
                }
                return el;
              }),
            };
          }
          return u;
        }),
      };
    }
    case DELETE_HABIT:
      return {
        ...state,
        monthData: state.monthData.map((u) => {
          if (u.id === action.id) {
            return {
              ...u,
              habits: u.habits.filter((el) => el.habitId !== action.habitId),
            };
          }
          return u;
        }),
      };
    default:
      return state;
  }
};

export const addMonth = (month, year) => ({
  id: v4(),
  type: ADD_MONTH,
  month,
  year,
});
export const addMonthWithHabit = (month, year, habit, arrDays) => ({
  id: v4(),
  type: ADD_MONTH_HABIT,
  month,
  year,
  habit,
  habitId: v4(),
  arrDays,
});
export const addMonthWithDoing = (month, year, doing) => ({
  id: v4(),
  type: ADD_MONTH_DOING,
  month,
  year,
  doing,
  doingId: v4()
});
export const deleteMonth = (id) => ({ type: DELETE_MONTH, id });

export const addDoing = (id, doing, week) => ({
  type: ADD_DOING,
  id,
  doing,
  week,
  doingId: v4(),
});
export const addDoingAtDay = (id, doingId, day) => ({
  type: ADD_DOING_DAY,
  id,
  doingId,
  day,
});
export const extendDoing = (id, doingId, week) => ({
  type: EXTEND_DOING,
  id,
  doingId,
  week,
});
export const deleteDoing = (id, doingId) => ({
  type: DELETE_DOING,
  id,
  doingId,
});

export const addColor = (id, doingId, color) => ({
  type: ADD_COLOR,
  id,
  doingId,
  color,
});

export const addHabit = (id, habit, days, today) => ({
  id,
  habitId: v4(),
  type: ADD_HABIT,
  habit,
  newDays: days,
  today,
});
export const changeHabitState = (id, habitId, checked, dayNum) => ({
  type: CHANGE_HABIT_STATE,
  id,
  habitId,
  checked,
  dayNum,
});
export const deleteHabit = (id, habitId) => ({
  type: DELETE_HABIT,
  id,
  habitId,
});

export default monthReducer;
