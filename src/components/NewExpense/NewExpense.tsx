import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

interface NewExpenseProps {
  onAddExpense: (expenseItem: {
    id: string;
    title: string;
    amount: string;
    date: Date;
  }) => void;
}

const NewExpense: React.FC<NewExpenseProps> = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData: {
    title: string;
    amount: string;
    date: Date;
  }) => {
    const expenseItem = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseItem);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
