import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div className="p-5">
      <h1 className="text-center text-7xl">Personal Budget Tracker</h1>
      <h2>Add Expense</h2>
      <h2>Search Expenses</h2>
      <h2>Expenses Chart</h2>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
