import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseItem from './ExpenseItem';
export class ExpenseList extends Component {
  render() {
    return (
      <div>
        {this.props.expenses.map(({ id, ...otherProps }) => (
          <ExpenseItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expenses: state.expense
  };
};

export default connect(
  mapStateToProps,
  null
)(ExpenseList);
