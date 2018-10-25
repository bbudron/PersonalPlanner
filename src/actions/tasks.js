import uuid from 'uuid';
import database from '../firebase/firebase';
import { auth } from 'firebase';

// ADD_TASK
export const addTask = task => ({
  type: 'ADD_TASK',
  task
});

export const startAddTask = (taskData = {}) => {
  return (dispatch, getState) => {

    const uid = getState().auth.uid;
    const {title = '', note = '', date = 0, urgent = false, color = '', category = '', completed = false} = taskData;
    const task = {title, note, date, urgent, color, category, completed};

    database.ref(`users/${uid}/tasks`).push(task).then((ref) => {
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

export const startRemoveTask = ({id} = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/tasks/${id}/`).remove().then(() => {
      dispatch(removeTask({id}));
    });
  };
} ;

// EDIT_TASK
export const editTask = (id, updates) => ({
  type: 'EDIT_TASK',
  id,
  updates
});

export const startEditTask = (id, updates) => {

  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/tasks/${id}`).update(updates).then(() => {
      dispatch(editTask(id, updates));
    });
  };
} ;

// SET_TASKS
export const setTasks = tasks => ({
  type: 'SET_TASKS',
  tasks
});

export const startSetTasks = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/tasks`).once('value').then(snapshot => {
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