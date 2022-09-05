import React, { useState } from "react";
import Expenses from "./Components/Expenses";
import ExpenseItem from "./Components/Expenses/ExpenseItem";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car insurance",
    amount: 10,
    date: new Date(2002, 2, 12),
  },
  {
    id: "e2",
    title: "Car insurance 2",
    amount: 11,
    date: new Date(2001, 3, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
