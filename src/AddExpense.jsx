import { useState } from "react";

function getExpenses() {
  const expenses = localStorage.getItem("expenses");
  return expenses ? JSON.parse(expenses) : [];
}

const AddExpense = () => {
  const [expense, setExpense] = useState({
    amount: "",
    category: "",
    date: "",
  });

  const setLocalStorage = (expense) => {
    const expenses = getExpenses();
    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <form
        id="expenseForm"
        onSubmit={(e) => {
          e.preventDefault();
          setLocalStorage(expense);
          document.getElementById("expenseForm").reset();
        }}
      >
        <label htmlFor="amount">
          Amount
          <input
            name="amount"
            id="amount"
            placeholder="Amount"
            required={true}
            onChange={(e) =>
              setExpense({
                ...expense,
                amount: e.target.value,
              })
            }
          />
        </label>
        <label htmlFor="category">
          Category
          <input
            name="category"
            id="category"
            placeholder="Category"
            required={true}
            onChange={(e) =>
              setExpense({
                ...expense,
                category: e.target.value,
              })
            }
          />
        </label>
        <label htmlFor="date">
          Date
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
          />
        </label>
        <button>Add expense</button>
      </form>
    </div>
  );
};

export default AddExpense;
export { getExpenses };
