import React from "react";
import Expenses from "./Components/Expenses";
import ExpenseItem from "./Components/Expenses/ExpenseItem";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      title: "Car insurance",
      amount: 10,
      date: new Date(2002, 2, 12),
    },
    {
      title: "Car insurance 2",
      amount: 11,
      date: new Date(2001, 3, 12),
    },
  ];

  return (
    <div className="App">
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
