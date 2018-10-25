import React from 'react';
import TaskList from './TaskList';
import TaskListFilters from './TaskListFilters';
import TasksSummary from './TasksSummary';
// import TaskCalendar from './TaskCalendar';

const TaskDashboardPage = () => (
  <div>
    <TasksSummary />
    <TaskListFilters />
    <TaskList />
  </div>
);

export default TaskDashboardPage;
