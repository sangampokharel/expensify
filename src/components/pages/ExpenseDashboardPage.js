import React, { Component } from 'react';
import ExpenseList from '../ExpenseList';
export class ExpenseDashboardPage extends Component {
  render() {
    return (
      <div>
        <ExpenseList />
      </div>
    );
  }
}

export default ExpenseDashboardPage;
