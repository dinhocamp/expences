import React , {useState} from "react";
import "./ExpenseItem.css";
import ExpenceDate from "./ExpenceDate";
function ExpenseItem(props) {
  let [title,setTitle] = useState(props.title)
  const expenseTitle = props.title;
  const expensePrice = props.price;
  const click=()=>{ 
    setTitle("new title");
    }
    console.log(title)
  return (
    <div className="expense-item">
      <div>
        <ExpenceDate props={props.date}/>
      </div>
      <div className="expense-item__description ">
        <h2>{expenseTitle}</h2>
      </div>
      <div className="expense-item__price">{expensePrice}</div>
      <button onClick={click} >yessssss</button>
    </div>
  );
}

export default ExpenseItem;
