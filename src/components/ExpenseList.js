import React from 'react';
import Expense from './Expense';

const ExpenseList = (props) => {
  return (
    <div className='expense-container'>
      <table className='table' id='expense-table'>
        <thead>
          <th>Date</th>
          <th>Amount</th>
          <th>Item</th>
          <th>Location</th>
          <th>Type</th>
          <th>Remove</th>
        </thead>
        <tbody>
          {props.expenses.map((expense) => (
            <Expense
              expense={expense}
              expenses={props.expenses}
              setExpenses={props.setExpenses}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
