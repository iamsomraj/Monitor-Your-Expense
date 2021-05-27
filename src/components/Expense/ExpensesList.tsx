import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
interface ExpensesListProp {
  items: {
    id: string;
    title: string;
    amount: number;
    date: Date;
  }[];
}

const ExpensesList: React.FC<ExpensesListProp> = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </ul>
  );
};

export default ExpensesList;
