import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import  "./Expences.css"
import ExpensesFilter from './ExpensesFilter'
function Expenses(props) {
    console.log("la chose de la chose",props.props)
  const [filter , setfilter] = useState("2022");
  const filt = (data)=>{setfilter(data)}
    return (
    <Card>
      <ExpensesFilter selected={filter} filt={filt} />

    <div>
        {props.props.map((exp)=>{
          if(filter == exp.date.getFullYear() ){
            return (
                
                <ExpenseItem
                key={exp.id}
                date={exp.date}
                title={exp.title}
                price={exp.price}>
                </ExpenseItem>
              
            )
  
          }

        }
        )
        }
    </div>


    </Card>
  )
}

export default Expenses
