import moment from 'moment';

// Get visible tasks

export default (tasks, { text, sortBy, startDate, endDate }) => {
  return tasks.filter(task => {
    const createdAtMoment = moment(task.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = task.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date')
      return a.createdAt < b.createdAt ? 1 : -1;
    else if (sortBy === 'amount')
      return a.amount < b.amount ? 1 : -1;
  });
};
