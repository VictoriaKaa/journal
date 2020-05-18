import { v4 } from "uuid";

const ADD_PLAN = "ADD_PLAN";
const CHANGE_STATUS = "CHANGE_STATUS";
const DELETE_PLAN = "DELETE_PLAN";

let initialState = {
  plansData: [
    {
      id: "12312",
      name: "Сходить к врачу",
      checked: false,
    },
    {
      id: "adsada13",
      name: "Сходить в магазин",
      checked: true,
    },
  ],
};

const plansReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAN:
      return {
        ...state,
        plansData: [
          ...state.plansData,
          {
            id: action.id,
            name: action.newName,
            checked: false,
          },
        ],
      };
    case CHANGE_STATUS:
      return {
        ...state,
        plansData: state.plansData.map((u) => {
          if (u.id === action.id) {
            return { ...u, checked: action.checked };
          }
          return u;
        }),
      };
    case DELETE_PLAN:
      return {
        ...state,
        plansData: state.plansData.filter((u) => u.id !== action.id),
      };
    default:
      return state;
  }
};

export const addPlan = (newName) => ({ type: ADD_PLAN, newName, id: v4() });
export const changeStatus = (id, checked) => ({
  type: CHANGE_STATUS,
  id,
  checked,
});
export const deleteItem = (id) => ({ type: DELETE_PLAN, id });

export default plansReducer;
