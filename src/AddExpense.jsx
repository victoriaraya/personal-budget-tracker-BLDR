import { useState } from "react";
import { GrMoney } from "react-icons/gr";
import { useExpenses } from "./ExpenseContext";

const AddExpense = () => {
  const { addExpense } = useExpenses();

  const [expense, setExpense] = useState({
    amount: "",
    category: "",
    date: "",
  });
  const [amountError, setAmountError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [dateError, setDateError] = useState("");
  const [formError, setFormError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(expense);
    document.getElementById("expenseForm").reset();
  };

  return (
    <div className="bg-[#F4D4D4] h-full rounded-sm border-solid border-2 border-[#800f2f]">
      <h2 className="justify-center text-3xl flex gap-2 p-3 border-solid border-b-2 border-[#5B0B22]">
        Add an Expense <GrMoney />
      </h2>
      <form
        id="expenseForm"
        onSubmit={handleSubmit}
        className="grid grid-rows-4"
      >
        <label htmlFor="amount" className="block p-4 text-2xl">
          <span className="block mb-2">Amount</span>
          <input
            name="amount"
            id="amount"
            placeholder="e.g., 50"
            required={true}
            onChange={(e) =>
              setExpense({
                ...expense,
                amount: e.target.value,
              })
            }
            onBlur={() => {
              if (
                parseInt(expense.amount, 10) < 0 ||
                !/^(\d+(\.\d{0,2})?)?$/.test(expense.amount)
              ) {
                setAmountError("Please enter a valid positive number.");
                setFormError(true);
              } else {
                setAmountError("");
                setFormError(false);
              }
            }}
            className="w-1/2 p-1 border-solid border-2 border-[#800f2f] rounded-sm bg-[#fff0f3] text-xl"
          />
          {amountError && (
            <p className="text-[#800F2F] text-lg mt-1">{amountError}</p>
          )}
        </label>
        <label htmlFor="category" className="block p-4 text-2xl">
          <span className="block mb-2">Category</span>
          <input
            name="category"
            id="category"
            placeholder="e.g., Food"
            required={true}
            onChange={(e) =>
              setExpense({
                ...expense,
                category: e.target.value.toUpperCase(),
              })
            }
            onBlur={() => {
              if (!/^[a-zA-Z\s]*$/.test(expense.category)) {
                setCategoryError(
                  "Only alphabetic characters and spaces are allowed.",
                );
                setFormError(true);
                return;
              } else {
                setCategoryError("");
                setFormError(false);
              }
            }}
            className="w-1/2 p-1 border-solid border-2 border-[#800f2f] rounded-sm bg-[#fff0f3] text-xl"
          />
          {categoryError && (
            <p className="text-[#800F2F] text-lg mt-1">{categoryError}</p>
          )}
        </label>
        <label htmlFor="date" className="block p-4 text-2xl">
          <span className="block mb-2"> Date</span>
          <input
            name="date"
            id="date"
            placeholder="YYYY-MM-DD"
            required={true}
            onChange={(e) =>
              setExpense({
                ...expense,
                date: e.target.value,
              })
            }
            onBlur={() => {
              if (!/^\d{4}-\d{2}-\d{2}$/.test(expense.date)) {
                setDateError("Please enter date in format YYYY-MM-DD.");
                setFormError(true);
                return;
              } else {
                setDateError("");
                setFormError(false);
              }
            }}
            className="w-1/2 p-1 border-solid border-2 border-[#800f2f] rounded-sm bg-[#fff0f3] text-xl"
          />
          {dateError && (
            <p className="text-[#800F2F] text-lg mt-1">{dateError}</p>
          )}
        </label>

        <div className="items-center flex justify-center">
          <button
            type="submit"
            className={`mt-5 text-2xl border-solid border-2 border-[#800f2f] rounded-sm bg-[#fff0f3] hover:bg-[#EFBDBD] cursor-pointer sm:w-1/3 h-1/2 ${
              formError ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={formError}
          >
            Add expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
