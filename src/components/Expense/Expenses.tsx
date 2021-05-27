import "./ExpenseDate";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

interface ExpensesProp {
  expenses: {
    id: string;
    title: string;
    amount: number;
    date: Date;
  }[];
}

const Expenses: React.FC<ExpensesProp> = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === parseInt(selectedYear)
  );

  const yearChangeHandler = (year: string) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter year={selectedYear} onYearChange={yearChangeHandler} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
