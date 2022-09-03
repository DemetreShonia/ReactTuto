import ExpenseItem from "./Components/ExpenseItem";
import Expenses from "./Components/Expenses";

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
      <h2>Let's get started!</h2>
      <Expenses expense={expenses[0]} />
      <Expenses expense={expenses[1]} />
    </div>
  );
}

export default App;
