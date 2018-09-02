import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectTasks from '../selectors/tasks';
import selectTasksTotal from '../selectors/tasks-total';

const TasksSummary = (({taskCount, tasksTotal}) => {
    const taskWord = taskCount === 1 ? 'task' : 'tasks';
    const formattedTasksTotal = numeral(tasksTotal / 100).format('$0,0.00')
    return (
        <div>
            <h1>Viewing {taskCount} {taskWord} totalling {formattedTasksTotal}</h1>
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