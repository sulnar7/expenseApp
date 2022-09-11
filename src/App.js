import React, { useState } from "react";

import Expense from "./components/Expenses/Expense";
import ExpensesChart from "./components/Expenses/ExpensesChart";
import ExpensesFilter from "./components/NewExpense/ExpensesFIlter";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMPY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
 
function App() {
  const [expense,setExpense]=useState(DUMPY_DATA)
    const addExpenseData=(expenseData)=>{
        setExpense((prevState)=>{
         return [...prevState,expenseData]
        })
    }
    console.log(expense)
    return (
      <div >
        <NewExpense addExpenseData={addExpenseData}></NewExpense>
       
        <Expense expense={expense.reverse()}></Expense>
      </div>
    );
  }


export default App;
