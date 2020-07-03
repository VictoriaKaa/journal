import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import MoviesContainer from "./components/Movies/MoviesContainer";
import PlansContainer from "./components/Plans/PlansContainer";
import Calendar from "./components/Calendar/Calendar";
import TrackerContainer from "./components/MonthList/Tracker/TrackerContainer";
import BooksContainer from "./components/Books/BooksContainer";
import MonthList from "./components/MonthList/MonthListContainer";
import Months from "./components/MonthList/Month/Month";
import Week from "./components/MonthList/Week/WeekContainer";
import StartPage from "./components/StartPage/StartPage";
import "./fonts/fonts.css";
import styles from "./App.module.css";
import NavState from "./components/Navbar/NavState";

const App = (props) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className={styles.appWrapper}>
          <NavState>
            <Navbar /> 
          </NavState>
          
          <div className={styles.appWrapperContent}>
            <Switch>
              <Route exact path="/" render={() => <StartPage />} />
              <Route exact path="/books" render={() => <BooksContainer />} />
              <Route exact path="/movies" render={() => <MoviesContainer />} />
              <Route exact path="/plans" render={() => <PlansContainer />} />
              <Route exact path="/calendar" render={() => <Calendar />} />
              <Route exact path="/months" render={() => <MonthList />} />
              <Route
                exact
                path="/months/:number"
                render={(props) => <Months {...props} />}
              />
              <Route
                exact
                path="/months/:number/tracker"
                render={(props) => <TrackerContainer {...props} />}
              />
              <Route
                path="/months/:number/:days"
                render={(props) => <Week {...props} />}
              />
            </Switch>
          </div>
        </div>
      </HashRouter>
    </Provider>
  );
};

export default App;
