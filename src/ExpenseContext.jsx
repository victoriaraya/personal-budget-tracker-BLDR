import React, { createContext, useState, useContext } from "react";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = localStorage.getItem("expenses");
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  });

  const addExpense = (expense) => {
    setExpenses((prev) => {
      const updatedExpenses = [...prev, expense];
      localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
      return updatedExpenses;
    });
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => useContext(ExpenseContext);
