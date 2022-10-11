import React from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import  "./Expences.css"
function Expenses(props) {
    
  return (
    <Card>

    <div>
        <ExpenseItem className='expences' props={props}/>
        <ExpenseItem className='expences' props={props}/>
        <ExpenseItem className='expences' props={props}/>
    </div>


    </Card>
  )
}

export default Expenses
