import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Car insurance",
      id: 10,
      date: new Date(2002, 2, 12),
    },
    {
      title: "Car insurance 2",
      id: 11,
      date: new Date(2001, 3, 12),
    },
  ];
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
