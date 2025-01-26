import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { getExpenseCategories } from "./ViewExpenses";
import { getExpenses } from "./AddExpense";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  BarElement,
);

const getExpenseAmounts = () => {
  const expenses = getExpenses();
  const amounts = expenses.map((expense) => expense.amount);
  return [...amounts];
};

const Chart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: getExpenseCategories(),
          datasets: [
            {
              label: "Expense",
              data: getExpenseAmounts(),
            },
          ],
        }}
      />
    </div>
  );
};

export default Chart;
