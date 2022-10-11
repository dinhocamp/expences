import React , {useState} from "react";
import "./ExpenseItem.css";
import ExpenceDate from "./ExpenceDate";
function ExpenseItem(props) {
  let [title,setTitle] = useState(props.props.props[0].title)
  const expenseTitle = props.props.props[0].title;
  const expensePrice = props.props.props[0].price;
  console.log("exoence price",expensePrice)
  const click=()=>{ 
    setTitle("new title");
    }
    console.log(title)
  return (
    <div className="expense-item">
      <div>
        <ExpenceDate props={props.props.props[0].date}/>
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
