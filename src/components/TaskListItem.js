import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { startEditTask } from '../actions/tasks';

export default class TaskListItem extends React.Component {

  render() {
    const { id, title, date, note, urgent, completed, color, category } = this.props;
    return (
      <Link className={urgent ? "list-item--urgent" : "list-item"} to={`/edit/${id}`} style={{"borderColor": color || "black"}}>
      <div>
          <h3 className="list-item__title">{title}</h3>
          {note.length > 0 ? <span className="list-item__sub-title">{note}<br /></span> : null}
          {category.length > 0 ? <span className="list-item__sub-title">{category} - </span> : null} <span className="list-item__sub-title">{moment(date).format('MMMM Do, YYYY')}</span>
        </div>
        {completed && <h3 className="list-item__data">&#10003;</h3>}
      </Link>
    )
  };
};


// <label className="checkbox-container">
// <input
//   type="checkbox"
//   name="completed"
//   value={completed}
//   onChange={this.onCompletedChange}
//   checked={completed}
// />
// <span className="checkmark"></span>
// </label>