import ExpenseItem from "./ExpenseItem";
import "./ExpenseDate";
import Card from "../UI/Card";

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
    <Card className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          amount={expense.amount}
          date={expense.date}
          title={expense.title}
        />
      ))}
    </Card>
  );
};

export default Expenses;
