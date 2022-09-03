import "./ExpenseItem.css";
function ExpenseItem(props) {
  const expenseDate = new Date(2021, 2, 28);

  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-item">
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
      <div>{props.title}</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$200</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
