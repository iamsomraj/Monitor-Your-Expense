import ExpenseItem from "./ExpenseItem";
import "./ExpenseDate";

interface ExpensesProp {
  expenses: {
    id: string;
    title: string;
    amount: number;
    date: Date;
  }[];
}

const Expenses: React.FC<ExpensesProp> = (props) => {
  return (
    <div className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          amount={expense.amount}
          date={expense.date}
          title={expense.title}
        />
      ))}
    </div>
  );
};

export default Expenses;
