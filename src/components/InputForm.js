import React, { useState } from 'react';
import '../CSS/App.css';
import Form from 'react-bootstrap/Form';
import ExpenseList from '../components/ExpenseList';

const InputForm = (props) => {
  const [dollarAmount, setDollarAmount] = useState(0);
  const [location, setLocation] = useState('');
  const [expenseType, setExpenseType] = useState('none');
  const [expenseDate, setExpenseDate] = useState('');
  const [item, setItem] = useState('');

  const getTodaysDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
  };

  //Expense Type
  const selectExpenseTypeHandler = (e) => {
    setExpenseType(e.target.value);
  };
  //Location
  const inputLocationHandler = (e) => {
    setLocation(e.target.value);
  };

  //Item
  const inputItemHandler = (e) => {
    setItem(e.target.value);
  };
  //Expense Date
  const inputExpenseDateHandler = (e) => {
    setExpenseDate(e.target.value);
  };
  //Dollar Amount
  const inputDollarAmountHandler = (e) => {
    setDollarAmount(e.target.value);
  };

  const submitExpenseHandler = (e) => {
    e.preventDefault();

    if (expenseDate === '') {
      setExpenseDate(getTodaysDate);
    }
    props.setExpenses([
      ...props.expenses,
      {
        expenseType: expenseType,
        location: location,
        item: item,
        expenseDate: expenseDate,
        dollarAmount: dollarAmount,
        id: Math.random()
      }
    ]);
  };

  return (
    <div>
      <Form onSubmit={submitExpenseHandler}>
        <div id='form-row-one'>
          <Form.Group md='6'>
            {/* ------------------------------------------------- Type ------------------------------------------------- */}
            <select
              onChange={selectExpenseTypeHandler}
              className='input-expense form-select'
            >
              <option value='none'>Payment Type</option>
              <option value='credit'>Credit</option>
              <option value='debit'>Debit</option>
              <option value='cash'>Cash</option>
            </select>
          </Form.Group>
          <Form.Group md='6'>
            {/* ------------------------------------------------- Vendor ------------------------------------------------- */}
            <input
              onChange={inputItemHandler}
              className='input-expense form-control'
              placeholder='Item'
              required
            />
          </Form.Group>
          <Form.Group md='6'>
            {/* ------------------------------------------------- Vendor ------------------------------------------------- */}
            <input
              onChange={inputLocationHandler}
              className='input-expense form-control'
              placeholder='Location'
              required
            />
          </Form.Group>
        </div>
        <div id='form-row-two'>
          <Form.Group md='6'>
            {/* ------------------------------------------------- Date ------------------------------------------------- */}
            <input
              type='date'
              onChange={inputExpenseDateHandler}
              className='input-expense form-control'
            />
          </Form.Group>
          <Form.Group md='6'>
            {/* ------------------------------------------------- Dollar Amount ------------------------------------------------- */}
            <input
              type='number'
              onChange={inputDollarAmountHandler}
              className='input-expense form-control'
              placeholder='Dollar Amount'
              required
            />
          </Form.Group>
        </div>
        <button
          id='addExpenseButton'
          className='btn addExpense-button myButtons'
          type='submit'
        >
          <i>Add Expense</i>
        </button>
      </Form>
      <ExpenseList expenses={props.expenses} setExpenses={props.setExpenses} />
    </div>
  );
};

export default InputForm;
