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
import { useExpenses } from "./ExpenseContext";
import { RiBarChart2Line } from "react-icons/ri";

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

const Chart = () => {
  const { expenses } = useExpenses();

  const getExpenseAmounts = () => {
    const categoryTotals = expenses.reduce((totals, expense) => {
      if (!totals[expense.category]) {
        totals[expense.category] = 0;
      }
      totals[expense.category] += Number(expense.amount);
      return totals;
    }, {});

    return Object.values(categoryTotals);
  };

  const getExpenseCategories = () => {
    const categories = expenses.map((expense) => expense.category);
    return [...new Set(categories)];
  };

  return (
    <div className="bg-[#F4D4D4] h-full rounded-sm border-solid border-2 border-[#800f2f] sm:relative">
      <h2 className="justify-center text-3xl flex gap-2 p-3 border-solid border-b-2 border-[#5B0B22]">
        Total Spending <RiBarChart2Line />
      </h2>
      <div className="bg-[#fff0f3] items-center rounded-b-sm flex sm:absolute bottom-0 top-15.5 right-0 left-0 px-2">
        <Bar
          data={{
            labels: getExpenseCategories(),
            datasets: [
              {
                label: "Expenses",
                data: getExpenseAmounts(),
                backgroundColor: "rgba(91, 11, 34, .8)",
                borderColor: "rgba(91, 11, 34, 1)",
                borderWidth: 1,
              },
            ],
          }}
          options={{
            responsive: true,
            scales: {
              x: {
                ticks: {
                  color: "rgba(91, 11, 34, 1)",
                  font: {
                    size: 20,
                    family: "Sulphur Point, serif",
                  },
                },
              },
              y: {
                ticks: {
                  color: "rgba(91, 11, 34, 1)",
                  font: {
                    size: 15,
                    family: "Sulphur Point, serif",
                  },
                },
              },
            },
            plugins: {
              legend: {
                labels: {
                  color: "rgba(91, 11, 34, 1)",
                  font: {
                    size: 25,
                    family: "Sulphur Point, serif",
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Chart;
