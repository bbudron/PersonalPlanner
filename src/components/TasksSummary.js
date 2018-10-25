import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import selectTasks from '../selectors/tasks';
import selectTasksTotal from '../selectors/tasks-total';

const TasksSummary = (({taskCount, tasksTotal}) => {
    const taskWord = taskCount === 1 ? 'task' : 'tasks';
    return (
        <div className="page-header">
            <div className="content-container">
                <h2 className="page-header__title">Showing <span>{taskCount}</span> {taskWord}</h2>
            </div>
        </div>
    );
});

const mapStateToProps = state => {
    const visibleTasks = selectTasks(state.tasks, state.filters);
    
    return {
        taskCount: visibleTasks.length,
        tasksTotal: selectTasksTotal(visibleTasks)
    }
};

export default connect(mapStateToProps)(TasksSummary);