import moment from 'moment';

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: null,
  endDate: null
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {...state, text: action.text};
    case 'SORT_BY_URGENT' :
      return {...state, sortBy: 'urgent'}
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date'};
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate};
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate};
    default:
      return state;
  }
};
