import React from 'react'
import "./NewExpense.css"
import ExpenseForm from './ExpenseForm'
function NewExpense(props) {

    const saveExpenseData=(enteredExpense)=>{
            const expenseData={
                ...enteredExpense,
                id:Math.random().toString()
            }
            props.addExpenseData(expenseData)
    }
  return (
    <div>
   <div className='new-expense'>
    <ExpenseForm onSaveExpenseData={saveExpenseData}/>
   </div>
    </div>
  )
}

export default NewExpense