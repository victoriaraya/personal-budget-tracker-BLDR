import { useState } from "react";
import { TbEyeSpark } from "react-icons/tb";
import { useExpenses } from "./ExpenseContext";

const ViewExpenses = () => {
  const { expenses } = useExpenses();
  const [searchExpenses, setSearchExpenses] = useState([]);
  const [category, setCategory] = useState("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startDateError, setStartDateError] = useState(false);
  const [endDateError, setEndDateError] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const getExpenseCategories = () => {
    const categories = expenses.map((expense) => expense.category);
    return [...new Set(categories)];
  };

  const categoriesList = getExpenseCategories();

  const displayFilteredExpenses = () => {
    const categoryFiltered =
      category === "All"
        ? expenses
        : expenses.filter((expense) => expense.category === category);

    const dateFiltered = categoryFiltered.filter((expense) => {
      const expenseDate = new Date(expense.date);
      const start = startDate ? new Date(startDate) : new Date(0);
      const end = endDate ? new Date(endDate) : new Date();
      return expenseDate >= start && expenseDate <= end;
    });

    setSearchExpenses(dateFiltered);
    setHasSearched(true);
  };

  const clearDates = () => {
    setStartDate("");
    setEndDate("");
  };

  return (
    <div className="bg-[#F4D4D4] rounded-sm border-solid border-2 border-[#800f2f]">
      <h2 className="justify-center text-3xl flex gap-2 p-3 border-solid border-b-2 border-[#5B0B22]">
        View Expenses <TbEyeSpark />
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-5 self-center">
        <div className="flex flex-col px-4 sm:border-r-2 border-[#800f2f] border-solid pb-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              displayFilteredExpenses();
            }}
            className="mt-5 text-2xl h-1/2"
          >
            <div className="pb-8">
              <label htmlFor="category">
                <span>Filter by category: </span>
              </label>
              <select
                id="category"
                onChange={(e) => setCategory(e.target.value)}
                className="bg-[#fff0f3] rounded-sm p-1"
              >
                <option value="All">ALL</option>
                {categoriesList.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="pb-5">
              <h2 className="pb-2">Filter by date range:</h2>
              <div className="flex items-center space-x-4 text-lg justify-center">
                <label htmlFor="startDate" className="flex items-center">
                  <input
                    name="startDate"
                    id="startDate"
                    placeholder="YYYY-MM-DD"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    onBlur={() => {
                      if (!/^\d{4}-\d{2}-\d{2}$/.test(startDate)) {
                        setStartDateError(true);
                        return;
                      } else {
                        setStartDateError(false);
                      }
                    }}
                    className="p-2 border-solid border-2 border-[#800f2f] rounded-sm bg-[#fff0f3] w-32"
                  />
                </label>
                <span>-</span>
                <label htmlFor="endDate" className="flex items-center">
                  <input
                    name="endDate"
                    id="endDate"
                    placeholder="YYYY-MM-DD"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    onBlur={() => {
                      if (!/^\d{4}-\d{2}-\d{2}$/.test(endDate)) {
                        setEndDateError(true);
                        return;
                      } else {
                        setEndDateError(false);
                      }
                    }}
                    className="ml-2 p-2 border-solid border-2 border-[#800f2f] rounded-sm bg-[#fff0f3] w-32"
                  />
                </label>
                <button
                  className="p-1 px-2 border-solid border-2 border-[#800f2f] rounded-sm bg-[#fff0f3] hover:bg-[#EFBDBD] cursor-pointer"
                  onClick={clearDates}
                >
                  clear
                </button>
              </div>
            </div>
            {(startDateError || endDateError) && (
              <p className="text-[#800F2F] text-lg -mt-3">
                Please enter date in format YYYY-MM-DD.
              </p>
            )}

            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className={`p-1 text-2xl border-solid border-2 border-[#800f2f] rounded-sm bg-[#fff0f3] hover:bg-[#EFBDBD] cursor-pointer sm:w-1/3 ${
                  startDateError || endDateError
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={startDateError || endDateError}
              >
                View expenses
              </button>
            </div>
          </form>
        </div>

        <div className="overflow-x-auto p-3 self-center">
          {hasSearched ? (
            searchExpenses.length > 0 ? (
              <table className="min-w-full table-auto bg-[#fff0f3] border-collapse border border-[#800f2f]">
                <thead>
                  <tr>
                    <th className="border border-[#800f2f] px-4 py-2 text-2xl">
                      Amount
                    </th>
                    <th className="border border-[#800f2f] px-4 py-2 text-2xl">
                      Category
                    </th>
                    <th className="border border-[#800f2f] px-4 py-2 text-2xl">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {searchExpenses.map((expense, index) => (
                    <tr key={index}>
                      <td className="border border-[#800f2f] px-4 py-2 text-lg">
                        ${expense.amount}
                      </td>
                      <td className="border border-[#800f2f] px-4 py-2 text-lg">
                        {expense.category}
                      </td>
                      <td className="border border-[#800f2f] px-4 py-2 text-lg">
                        {expense.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-2xl text-center">No expenses to display</p>
            )
          ) : (
            <p className="text-2xl text-center">
              Click 'View expenses' to see results
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewExpenses;
