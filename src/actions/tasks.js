import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_TASK
export const addTask = task => ({
  type: 'ADD_TASK',
  task
});

export const startAddTask = (taskData = {}) => {
  return (dispatch) => {
    const {title = '', note = '', time = 0, duration = 0, urgent = false, color = '', category = ''} = taskData;
    
    let date = new Date(time);
    date = date.getTime();

    const task = {title, note, date, duration, urgent, color, category};
    database.ref('tasks').push(task).then((ref) => {
      dispatch(addTask({
        id: ref.key,
        ...task
      }))
    });
  };
};

// REMOVE_TASK
export const removeTask = ({ id } = {}) => ({
  type: 'REMOVE_TASK',
  id
});

// EDIT_TASK
export const editTask = (id, updates) => ({
  type: 'EDIT_TASK',
  id,
  updates
});

// SET_TASKS
export const setTasks = tasks => ({
  type: 'SET_TASKS',
  tasks
});

export const startSetTasks = () => {
  return dispatch => {
    return database.ref('tasks').once('value').then(snapshot => {
      const tasks = [];

      snapshot.forEach(childSnapshot => {
        tasks.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setTasks(tasks));
    });
  };
};