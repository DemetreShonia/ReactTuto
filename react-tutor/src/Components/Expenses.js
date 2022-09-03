import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.expense.title}
        date={props.expense.date}
        amount={props.expense.amount}
      />
    </div>
  );
}

export default Expenses;
