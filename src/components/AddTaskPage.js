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
        <div className="page-header">
          <div className="content-container">
            <h2 className="page-header__title">Add Task</h2>
          </div>
        </div>
        <div className="content-container">
          <TaskForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddTask: task => dispatch(startAddTask(task))
});

export default connect(undefined, mapDispatchToProps)(AddTaskPage);
