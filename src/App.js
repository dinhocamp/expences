import { useState } from "react";
import Expenses from "../src/Components/Expences/Expenses";
import NewExpense from "./Components/New expences/NewExpense";
function App() {
  
  
 let expenses = [
    {id:"e1",
    title:"new pc",
    price:2500,
    date:new Date(2021,6,15)
  },
  {id:"e2",
  title:"new car",
  price:25000,
  date:new Date(2021,5,30)
},
{id:"e3",
title:"new house",
price:250000,
date:new Date(2021,7,28)
}
]
let [expences,setExps] = useState(expenses)
const getfrom =(data)=>{
   console.log(data)
  //  setExps((prev)=>{return [...prev,data]});
}

// let [input,setInput]=useState({
  //   id:Math.random(),
  //   title:"",
  //   price:0,
  //   date:""
  // })
  
  return (
    <div>
      <NewExpense get={getfrom}/>
      <Expenses props={expenses}/>
    </div>
  );
}

export default App;
