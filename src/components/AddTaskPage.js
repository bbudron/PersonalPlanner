import React from 'react';
import { connect } from 'react-redux';
import TaskForm from './TaskForm';
import { startAddTask } from '../actions/tasks';

export class AddTaskPage extends React.Component {
  
  onSubmit = task => {
    this.props.startAddTask(task);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Add Task</h1>
        <TaskForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddTask: task => dispatch(startAddTask(task))
});

export default connect(undefined, mapDispatchToProps)(AddTaskPage);
