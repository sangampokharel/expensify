export const setTextFilter = text => {
  return {
    type: 'SET_TEXT_FILTER',
    payload: text
  };
};
export const sortByDate = () => {
  return {
    type: 'SET_TEXT_FILTER'
  };
};
export const sortByAmount = () => {
  return {
    type: 'SORT_BY_DATE'
  };
};
export const setStartDate = startDate => {
  return {
    type: 'SET_START_DATE',
    payload: startDate
  };
};
export const setEndDate = endDate => {
  return {
    type: 'SET_END_DATE',
    payload: endDate
  };
};
