import { createRoot } from "react-dom/client";
import AddExpense from "./AddExpense";
import ViewExpenses from "./ViewExpenses";

const App = () => {
  return (
    <div className="p-5">
      <h1
        className="text-center text-7xl font-spicy_rice"
        // style={{ fontFamily: "'Spicy Rice', serif" }}
      >
        Personal Budget Tracker
      </h1>
      <AddExpense />
      <ViewExpenses />
      <h2>Expenses Chart</h2>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
