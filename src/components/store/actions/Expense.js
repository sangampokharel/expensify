export const addExpense = data => {
  return {
    type: 'ADD_EXPENSE',
    payload: {
      id: new Date(),
      ...data
    }
  };
};
export const removeExpense = id => {
  return {
    type: 'REMOVE_EXPENSE',
    payload: id
  };
};
export const editExpense = (id, updated) => {
  return {
    type: 'EDIT_EXPENSE',
    payload: {
      id,
      updated
    }
  };
};
