import React from 'react';
import { connect } from 'react-redux';
import TaskListItem from './TaskListItem';
import selectTasks from '../selectors/tasks';
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

const arrangeEvents = tasks => {
  let arrangedTasks = tasks.map(task => {
    return {
      id: task.id,
      title: task.title,
      start: task.date,
      end: task.end,
      desc: task.note,
      allDay: false
    }
  });
  console.log(arrangedTasks)

  return [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2018, 8, 0),
    end: new Date(2018, 8, 1),
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2018, 8, 7),
    end: new Date(2018, 8, 10),
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2018, 8, 13, 0, 0, 0),
    end: new Date(2018, 8, 20, 0, 0, 0),
  }]
}

export const TaskCalendar = props => (
  <div>
    <BigCalendar
      popup
      events={arrangeEvents(props.tasks)}
      defaultDate={new Date()}
    />
  </div>
);

const mapStateToProps = state => {
  return {
    tasks: selectTasks(state.tasks, state.filters)
  };
};

export default connect(mapStateToProps)(TaskCalendar);
