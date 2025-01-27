import { createRoot } from "react-dom/client";
import { ExpenseProvider } from "./ExpenseContext";
import AddExpense from "./AddExpense";
import ViewExpenses from "./ViewExpenses";
import Chart from "./Chart";
import { HiOutlineSparkles } from "react-icons/hi2";

const App = () => {
  return (
    <ExpenseProvider>
      <div className="p-5 bg-[#FFC2CD] min-h-screen">
        <h1
          className="justify-center text-6xl pb-10 text-[#800f2f] flex gap-2 text-center"
          style={{ fontFamily: "Spicy Rice, serif" }}
        >
          <HiOutlineSparkles />
          Personal Budget Tracker
          <HiOutlineSparkles />
        </h1>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 min-h-screen text-[#5B0B22]"
          style={{ fontFamily: "Sulphur Point, serif" }}
        >
          <div className="">
            <AddExpense />
          </div>
          <div className="">
            <Chart />
          </div>
          <div className="sm:col-span-2 align-bottom">
            <ViewExpenses />
          </div>
        </div>
      </div>
    </ExpenseProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
