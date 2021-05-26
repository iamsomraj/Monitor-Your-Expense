import ExpenseItem from "./ExpenseItem";
import "./ExpenseDate";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

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

  const yearChangeHandler = (year: string) => {
    setSelectedYear(year);
    console.log({ year });
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter year={selectedYear} onYearChange={yearChangeHandler} />
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            amount={expense.amount}
            date={expense.date}
            title={expense.title}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
