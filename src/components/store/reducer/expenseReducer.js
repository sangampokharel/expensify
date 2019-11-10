const initState = [];

export const expenseReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.payload];

    case 'REMOVE_EXPENSE':
      return state.filter(st => st.id !== action.payload);

    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.payload.id) {
          return {
            ...expense,
            ...action.payload.updated
          };
        } else {
          return state;
        }
      });
    default:
      return state;
  }
};
