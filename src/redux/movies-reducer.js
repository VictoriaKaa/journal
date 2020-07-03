import { v4 } from "uuid";

const ADD_MOVIE = "ADD_MOVIE";
const CHANGE_PLAN = "CHANGE_PLAN";
const DELETE_MOVIE = " DELETE_MOVIE";

let initialState = {
  moviesData: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE: {
      return {
        ...state,
        moviesData: [
          ...state.moviesData,
          {
            id: action.id,
            name: action.newName,
            checked: false,
          },
        ],
      };
    }
    case CHANGE_PLAN:
      return {
        ...state,
        moviesData: state.moviesData.map((u) => {
          if (u.id === action.id) {
            return { ...u, checked: action.checked };
          }
          return u;
        }),
      };
    case DELETE_MOVIE:
      return {
        ...state,
        moviesData: state.moviesData.filter((u) => u.id !== action.id),
      };
    default:
      return state;
  }
};

export const addMovie = (newName) => ({ type: ADD_MOVIE, newName, id: v4() });
export const changeStatus = (id, checked) => ({
  type: CHANGE_PLAN,
  id,
  checked,
});
export const deleteItem = (id) => ({ type: DELETE_MOVIE, id });

export default moviesReducer;
