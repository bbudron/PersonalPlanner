import React from 'react';
import { connect } from 'react-redux';
import TaskForm from './TaskForm';
import { startEditTask, startRemoveTask } from '../actions/tasks';

export class EditTaskPage extends React.Component {

  onSubmit = task => {
    this.props.startEditTask(this.props.task.id, task);
    this.props.history.push('/');
  };

  onRemove = () => {
    this.props.startRemoveTask({ id: this.props.task.id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
      <div className="page-header">
        <div className="content-container">
          <h2 className="page-header__title">Editing <span>{this.props.task.title}</span></h2>
        </div>
      </div>
      <div className="content-container">
        <TaskForm
          task={this.props.task}
          onSubmit={this.onSubmit}
        />
        <button className="button button--secondary" onClick={this.onRemove}>Remove Task</button>
      </div>
    </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  task: state.tasks.find(task => task.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditTask: (id, task) => dispatch(startEditTask(id, task)),
  startRemoveTask: data => dispatch(startRemoveTask(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskPage);
