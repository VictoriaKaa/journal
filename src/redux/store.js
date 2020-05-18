import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from 'redux-form';
import booksReducer from "./books-reducer";
import moviesReducer from "./movies-reducer";
import plansReducer from "./plans-reducer";
import monthReducer from "./months-reducer";

const logger = store => next => action => {
    // let result;
    console.groupCollapsed("dispatching", action.type);
    console.log("prev state", store.getState());
    console.log("action", action);
    // result = 
    next(action);
    console.log("next state", store.getState());
    console.groupEnd();
  };    
  
  const saver = store => next => action => {
    let result = next(action);
    localStorage["redux-store"] = JSON.stringify(store.getState());
    return result;
  };
  
  const storeFactory = () =>
    applyMiddleware(logger, saver)(createStore)(
      combineReducers({
            form: formReducer,
            booksPage: booksReducer,
            moviesPage: moviesReducer,
            plansPage: plansReducer,
            monthPage: monthReducer
        }),
      localStorage["redux-store"]
        ? JSON.parse(localStorage["redux-store"])
        : {}
    );
 
let store = storeFactory(true);

export default store;
