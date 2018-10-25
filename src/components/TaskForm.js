import React from 'react';
import { SingleDatePicker } from 'react-dates';
import { CirclePicker } from 'react-color';
import moment from 'moment';


export default class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.task ? props.task.title : '',
      note: props.task ? props.task.note : '',
      date: props.task ? moment(this.props.task.date) : moment(),
      urgent: props.task ? props.task.urgent : false,
      color: props.task ? props.task.color : '',
      category: props.task ? props.task.category : '',
      completed: props.task ? props.task.completed : false,
      calendarFocused: false,
      focused: false,
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

  onUrgentChange = () => {
    const urgent =  !this.state.urgent;
    this.setState({ urgent });
  };

  onCompletedChange = () => {
    const completed =  !this.state.completed;
    this.setState({ completed });
  };

  onColorChange = ({hex}) => {
    this.setState({ color: hex });
  };

  onCategoryChange = e => {
    const category = e.target.value;
    this.setState({ category });
  };
  
  onSubmit = e => {
    e.preventDefault();

    if (!this.state.title || !this.state.date)
      this.setState({ error: 'please provide a title and time' });
    else {
      this.setState({ error: '' });

      let date = new Date(this.state.date);
      date = date.getTime();

      this.props.onSubmit({
        title: this.state.title,
        date: date,
        note: this.state.note,
        urgent: this.state.urgent,
        completed: this.state.completed,
        category: this.state.category,
        color: this.state.color
      });
    }
  };

  render() {



    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <div className="input-row">
          <input
            type="text"
            placeholder="Title"
            autoFocus
            className="text-input"
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <SingleDatePicker
            date={this.state.date}
            onDateChange={date => this.setState({ date })}
            focused={this.state.focused}
            onFocusChange={({ focused }) => this.setState({ focused })}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        </div>

      
        <div className="input-row">
          <input
            type="text"
            placeholder="Category"
            className="text-input--category"
            value={this.state.category}
            onChange={this.onCategoryChange}
          />

          <CirclePicker 
            colors={["#ffbb44", "#44ff70", "#0006ff", "#b400ff"]}
            className="color-input"
            color={this.state.color}
            onChange={this.onColorChange}
          />
        </div>
        

        
        <textarea
          placeholder="Note"
          className="textarea"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>

        <div className="input-row--checkbox">
          <div className="input-group__checkbox">
            <label className="checkbox-container">Urgent
              <input
                type="checkbox"
                name="urgent"
                value={this.state.urgent}
                onChange={this.onUrgentChange}
                checked={this.state.urgent}
              />
              <span className="checkmark"></span>
            </label>

            <label className="checkbox-container">Complete
              <input
                type="checkbox"
                name="completed"
                value={this.state.completed}
                onChange={this.onCompletedChange}
                checked={this.state.completed}
              />
              <span className="checkmark"></span>
            </label>
        </div>
          
      </div>
      <button className="button"><div className="button--submit">{this.props.task ? "Update" : "Add"}</div></button>
        
      </form>
    );
  };
};
