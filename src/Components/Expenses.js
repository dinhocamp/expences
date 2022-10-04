import React from 'react'
import ExpenseItem from './ExpenseItem'
import  "./Expences.css"
function Expenses(props) {
    
  return (
    <div>
        <ExpenseItem className='expences' props={props}/>

    </div>
  )
}

export default Expenses
