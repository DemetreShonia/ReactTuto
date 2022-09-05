import ExpenseItem from "../Components/Expenses/ExpenseItem";
import "./Expenses.css";
import Card from "../Components/UI/Card";
import ExpensesFilter from "./Expenses/ExpensesFilter";
import ExpensesList from "./Expenses/ExpensesList";
import { useState } from "react";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(
    (e) => e.date.getFullYear() == filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
