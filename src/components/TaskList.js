import React from 'react';
import { connect } from 'react-redux';
import TaskListItem from './TaskListItem';
import selectTasks from '../selectors/tasks';

export const TaskList = (props) => (
  <div>
    {props.tasks.length === 0 ? (
      <p>No tasks</p>
    ) : (
      props.tasks.map(task => {
        return <TaskListItem key={task.id} {...task} />;
      })
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    tasks: selectTasks(state.tasks, state.filters)
  };
};

export default connect(mapStateToProps)(TaskList);
