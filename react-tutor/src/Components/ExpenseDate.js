import "./ExpenseDate.css";
function ExpenseDate(props) {
  const event = props.date;

  const month = event.toLocaleString("en-US", { month: "long" });
  const day = event.toLocaleString("en-US", { day: "2-digit" });
  const year = event.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
export default ExpenseDate;
