import React from "react";
import "./ExpenseItem.css";
import ExpenceDate from "./ExpenceDate";
function ExpenseItem() {
  const expenseTitle = "Formation";
  const expensePrice = 1234.56;
  return (
    <div className="expense-item">
      <div>

        <ExpenceDate/>
                </div>
      <div className="expense-item__description ">
        <h2>{expenseTitle}</h2>
      </div>
      <div className="expense-item__price">{expensePrice}</div>
    </div>
  );
}

export default ExpenseItem;
