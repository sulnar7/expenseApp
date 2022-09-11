import React, { useState } from 'react'
import ExpensesFilter from '../NewExpense/ExpensesFIlter'
import Card from '../UI/Card'
import "./Expense.css"
import ExpenseItem from './ExpenseItem'
import ExpensesChart from './ExpensesChart'
function Expense(props) {
   const [value,setValue]=useState()
   const getValue=(value)=>{
         setValue(value)
   }
   const filteredExpenses = props.expense.filter((expense) => {
      return expense.date.getFullYear().toString() === value;
    });
   const filterE=props.expense.filter((e)=>e.date.getFullYear()==value);

  return (
     <Card className='expenses'>
        <ExpensesFilter getValue={getValue} selected={value}/>
    <ExpensesChart expense={filteredExpenses}/>

   {filterE.map((e)=>{
      
   return <ExpenseItem title={e.title}  amount={e.amount} date={e.date} />

   })}

   </Card>)
}

export default Expense