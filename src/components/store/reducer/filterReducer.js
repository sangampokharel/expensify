const initState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

export const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.payload
      };

    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };

    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.payload
      };

    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.payload
      };
    default:
      return state;
  }
};
