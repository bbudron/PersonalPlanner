import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addTask } from './actions/tasks';
import { setTextFilter } from './actions/filters';
import getVisibleTasks from './selectors/tasks';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// store.dispatch(addTask({ description: 'Water bill', amount: 4500 }));
// store.dispatch(addTask({ description: 'Gas bill', createdAt: 1000 }));
// store.dispatch(addTask({ description: 'Rent', amount: 109500 }));

const state = store.getState();
const visibleTasks = getVisibleTasks(state.tasks, state.filters);
console.log(visibleTasks);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));