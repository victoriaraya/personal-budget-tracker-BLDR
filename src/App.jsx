import { createRoot } from "react-dom/client";
import AddExpense from "./AddExpense";
import ViewExpenses from "./ViewExpenses";
import Chart from "./Chart";

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
      <Chart />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
