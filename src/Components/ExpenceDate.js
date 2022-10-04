import React from 'react'
import "./ExpenceDate"
function ExpenceDate() {
    const expenseDate = new Date(2022, 9, 29);
    const month = expenseDate.toLocaleString("ar-Tn", { month: "long" });
    const day = expenseDate.toLocaleString("ar-EG", { day: "2-digit" });
    const year = expenseDate.getFullYear();
  return (
    <div>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{day}</div>
        <div className='expense-date__day'>{year}</div>
    </div>
  )
}

export default ExpenceDate