import moment from 'moment';

// Get visible tasks

export default (tasks, { text, sortBy, startDate, endDate }) => {
  return tasks.filter(task => {
    const timeMoment = moment(task.time);
    const startDateMatch = startDate ? startDate.isSameOrBefore(timeMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(timeMoment, 'day') : true;
    const textMatch = task.title.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') return a.time < b.time ? 1 : -1;
    if (sortBy === 'urgent') return a.urgent === 'yes' ? -1 : 1;
  });
};
