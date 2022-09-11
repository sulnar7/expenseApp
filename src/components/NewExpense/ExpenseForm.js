import React, { useState } from 'react'
import "./ExpenseForm.css"
function ExpenseForm(props) {
    const [title,setTitle]=useState("");
    const [amount,setAmount]=useState("");
    const [date,setDate]=useState("");
    const [display,setDisplay]=useState(false);

    
    const titleHandleChange=(event)=>{
        setTitle(event.target.value)
        console.log(title)
    }

    const amountHandleChange=(event)=>{
        setAmount(event.target.value)
        console.log(amount)
    }

    const dateHandleChange=(event)=>{
        setDate(event.target.value)
        console.log(date)
    }

    const formSubmitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
            title,
            amount,
            date:new Date(date)
        }
        console.log(expenseData)
        setTitle("");
        setAmount("");
        setDate("")

        props.onSaveExpenseData(expenseData)
    }

    const clickHandler=()=>{
        setDisplay(!display)
    }
    return (
        <div>
             {!display && <div className='new-expense__new'>
                        <button type='submit' onClick={clickHandler}>Add New Expense</button>
                    </div>}
            
            {display &&<form onSubmit={formSubmitHandler} >
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label >Title</label>
                        <input type="text" name="" id="" value={title} onChange={titleHandleChange}/>
                    </div>
                    <div className='new-expense__control'>
                        <label >Amount</label>
                        <input type="text" name="" id="" value={amount} onChange={amountHandleChange}/>
                    </div>
                    <div className='new-expense__control'>
                        <label >Date</label>
                        <input type="date" min="2019-01-01" max="2022-12-31" value={date} onChange={dateHandleChange}/>
                    </div>
                   
                </div>
                <div className='new-expense__actions'>
                        <button type='submit'>Add Expense</button>
                        <button type='submit' onClick={clickHandler}>Cancel</button>

                    </div>
                   
            </form>}
        </div>
    )
}

export default ExpenseForm