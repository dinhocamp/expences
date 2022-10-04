import React from "react";
import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 9, 29);
  const month = expenseDate.toLocaleString("ar-Tn", { month: "long" });
  const day = expenseDate.toLocaleString("ar-EG", { day: "2-digit" });
  const year = expenseDate.getFullYear();
  const expenseTitle = "Formation";
  const expensePrice = 1234.56;
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description ">
        <h2>{expenseTitle}</h2>
      </div>
      <div className="expense-item__price">{expensePrice}</div>
    </div>
  );
}

export default ExpenseItem;
