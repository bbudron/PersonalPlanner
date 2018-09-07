import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const TaskListItem = ({ id, title, time, duration, urgent, color, category }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{title}</h3>
    </Link>
    <p>
      {moment(time).format('MMMM Do, YYYY')} - 
      {duration} - {urgent} - {color} - {category}
    </p>
  </div>
);

export default TaskListItem;
