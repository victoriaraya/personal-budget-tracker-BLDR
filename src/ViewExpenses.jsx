import { use, useState } from "react";
import { getExpenses } from "./AddExpense";

const getExpenseCategories = () => {
  const expenses = getExpenses();
  const categories = expenses.map((expense) => expense.category);
  return [...new Set(categories)];
};

const ViewExpenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const displayAllExpenses = () => {
    const expenses = getExpenses();
    setExpenses(expenses);
  };

  const displayExpensesByCategory = (category) => {
    const expenses = getExpenses();
    const filteredExpenses = expenses.filter(
      (expense) => expense.category === category,
    );
    setExpenses(filteredExpenses);
  };

  const displayExpensesByDate = (startDate, endDate) => {
    const expenses = getExpenses();
    const start = new Date(startDate);
    const end = new Date(endDate);
    const filteredExpenses = expenses.filter((expense) => {
      const expenseDate = new Date(expense.date);
      return expenseDate >= start && expenseDate <= end;
    });
    setExpenses(filteredExpenses);
  };

  const categoriesList = getExpenseCategories();

  return (
    <div>
      <button onClick={displayAllExpenses}> view expenses</button>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          displayExpensesByCategory(category);
        }}
      >
        <label htmlFor="category">Choose your category: </label>
        <select
          id="category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          {categoriesList.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
        </select>
        <button>go</button>
      </form>

      <h2>choose your date range:</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          displayExpensesByDate(startDate, endDate);
        }}
      >
        <label htmlFor="startDate">
          start Date
          <input
            name="startDate"
            id="startDate"
            placeholder="YYYY-MM-DD"
            required={true}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label htmlFor="endDate">
          End Date
          <input
            name="endDate"
            id="endDate"
            placeholder="YYYY-MM-DD"
            required={true}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <button>go</button>
      </form>

      <div>
        {localStorage.getItem("expenses") ? (
          expenses.map((expense, index) => (
            <div key={index}>
              <h1>{`Expense ${index + 1}:`}</h1>
              <h1>{`Amount: ${expense.amount}`}</h1>
              <h1>{`Category: ${expense.category}`}</h1>
              <h1>{`Date: ${expense.date}`}</h1>
            </div>
          ))
        ) : (
          <p>No expenses to display</p>
        )}
      </div>
    </div>
  );
};

export default ViewExpenses;
