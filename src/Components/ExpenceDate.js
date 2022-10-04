import React from 'react'
import "./ExpenceDate"
function ExpenceDate(props) {
   console.log("from date",props.props)
    const month = props.props.toLocaleString("ar-Tn", { month: "long" });
    const day = props.props.toLocaleString("ar-EG", { day: "2-digit" });
    const year = props.props.getFullYear();
  return (
    <div>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{day}</div>
        <div className='expense-date__day'>{year}</div>
    </div>
  )
}

export default ExpenceDate