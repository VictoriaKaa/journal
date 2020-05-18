import { v4 } from "uuid";

const ADD_BOOK = "ADD_BOOK";
const CHANGE_READ = "CHANGE_READ";
const DELETE_BOOK = "DELETE_BOOK";

// инициализация стейта
let initialState = {
  booksData: [
    {
      id: "1",
      name: "Название книжечки",
      author: "Автор Автор",
      checked: false,
    },
    {
      id: "2",
      name: "Крутые дела крутых пацанов",
      author: "Крутой автор",
      checked: false,
    },
  ],
};

// reducer - применяет action к state
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        booksData: [
          ...state.booksData,
          {
            id: action.id,
            name: action.title,
            author: action.author,
            checked: false,
          },
        ],
      };
    case CHANGE_READ:
      return {
        ...state,
        booksData: state.booksData.map((u) => {
          if (u.id === action.id) {
            return { ...u, checked: action.isRead };
          }
          return u;
        }),
      };
    case DELETE_BOOK:
      return {
        ...state,
        booksData: state.booksData.filter((u) => u.id !== action.id),
      };
    default:
      return state;
  }
};

export const addBook = (title, author) => ({
  type: ADD_BOOK,
  title,
  author,
  id: v4(),
});
export const changeRead = (id, isRead) => ({ type: CHANGE_READ, id, isRead });
export const deleteItem = (id) => ({ type: DELETE_BOOK, id });

export default booksReducer;
