import React from "react";
import "./ExpenseItem.css";
import ExpenceDate from "./ExpenceDate";
function ExpenseItem(props) {
  console.log("from item",props.props.props[0])
  const expenseTitle = props.props.props[0].title;
  const expensePrice = props.props.props[0].price;
  console.log("exoence price",expensePrice)
  return (
    <div className="expense-item">
      <div>

        <ExpenceDate props={props.props.props[0].date}/>
                </div>
      <div className="expense-item__description ">
        <h2>{expenseTitle}</h2>
      </div>
      <div className="expense-item__price">{expensePrice}</div>
    </div>
  );
}

export default ExpenseItem;
