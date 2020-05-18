import React from "react";
import Calendar from "react-calendar";
import styles from "./Calendar.css";

class CalendarPage extends React.Component {
  state = {
    date: new Date(),
  };

  onChange = (date) => this.setState({ date });

  render() {
    return (
      <div className={styles.booksBlock}>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          className="reactCalendar"
        />
      </div>
    );
  }
}

export default CalendarPage;
