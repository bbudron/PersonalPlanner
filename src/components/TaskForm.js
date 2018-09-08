import React from 'react';
import Calendar from 'react-calendar';

export default class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.task ? props.task.title : '',
      note: props.task ? props.task.note : '',
      time: props.task ? new Date(this.props.task.date) : new Date(),
      duration: props.task ? props.task.duration : '',
      urgent: props.task ? props.task.urgent : '',
      color: props.task ? props.task.color : '',
      category: props.task ? props.task.category : '',
      calendarFocused: false,
      error: ''
    };
  };

  onTitleChange = e => {
    const title = e.target.value;
    this.setState({ title });
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState({ note });
  };

  onCalendarChange = time => {
    this.setState({ time })}

  onDurationChange = e => {
    const duration = e.target.value;
    this.setState({ duration });
  };

  onUrgentChange = e => {
    const urgent = e.target.value;
    this.setState({ urgent });
  };

  onColorChange = e => {
    const color = e.target.value;
    this.setState({ color });
  };

  onCategoryChange = e => {
    const category = e.target.value;
    this.setState({ category });
  };
  
  onSubmit = e => {
    e.preventDefault();

    if (!this.state.title)
      this.setState({ error: 'please provide a title' });
    else {
      this.setState({ error: '' });

      let date = new Date(this.state.time);
      date = date.getTime();

      this.props.onSubmit({
        title: this.state.title,
        date: date,
        duration: this.state.duration,
        note: this.state.note,
        urgent: this.state.urgent,
        category: this.state.category,
        color: this.state.color
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Title"
            autoFocus
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <Calendar
            onChange={this.onCalendarChange}
            value={this.state.time}
            calendarType="US"
          />
          <input
            type="text"
            placeholder="Duration"
            value={this.state.duration}
            onChange={this.onDurationChange}
          />
          <input
            type="text"
            placeholder="Urgent"
            value={this.state.urgent}
            onChange={this.onUrgentChange}
          />
          <input
            type="text"
            placeholder="Color"
            value={this.state.color}
            onChange={this.onColorChange}
          />
          <input
            type="text"
            placeholder="Category"
            value={this.state.category}
            onChange={this.onCategoryChange}
          />
          <textarea
            placeholder="Add a note for your task (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Task</button>
        </form>
      </div>
    );
  };
};
