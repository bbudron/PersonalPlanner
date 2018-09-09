import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const TaskListItem = ({ id, title, date, duration, urgent, color, category }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{title}</h3>
      <span className="list-item__sub-title">{moment(date).format('MMMM Do, YYYY')}</span>
    </div>
    <h3 className="list-item__data">Urgent: {urgent}</h3>
  </Link>
);

export default TaskListItem;