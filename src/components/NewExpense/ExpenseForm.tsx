import React, { useState } from "react";
import "./ExpenseForm.css";

interface ExpenseFormProps {
  onSaveExpenseData: (item: {
    title: string;
    amount: string;
    date: Date;
  }) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [shouldFormBeDisplayed, setShouldFormBeDisplayed] = useState(false);

  const titleChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setDate(event.target.value);
  };

  const clearFormHandler = () => {
    setTitle("");
    setAmount("");
    setDate("");
  };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const expenseItem = {
      title,
      amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseItem);
    clearFormHandler();
    hideFormHandler();
  };

  const showFormHandler = () => {
    setShouldFormBeDisplayed(true);
  };

  const hideFormHandler = () => {
    setShouldFormBeDisplayed(false);
  };

  if (shouldFormBeDisplayed === false) {
    return <button onClick={showFormHandler}>Add New Expense</button>;
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={hideFormHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
