import React from 'react';

function ExpenseItem({ description, createdAt, amount }) {
  return (
    <div>
      <h3>description- {description}</h3>
      <p>at-{createdAt}</p>
      <p>totalAMount-{amount}</p>
    </div>
  );
}

export default ExpenseItem;
