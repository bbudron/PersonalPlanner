import React from 'react';
import { connect } from 'react-redux';
import TaskForm from './TaskForm';
import { addTask } from '../actions/tasks';

export class AddTaskPage extends React.Component {
  
  onSubmit = task => {
    this.props.addTask(task);
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
  addTask: task => dispatch(addTask(task))
});

export default connect(undefined, mapDispatchToProps)(AddTaskPage);
