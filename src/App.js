import Expenses from "./Components/Expenses";
function App() {
  var expenses = [
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
  console.log("from app",expenses)
  return (
    <div>
      
      <Expenses props={expenses}/>
    </div>
  );
}

export default App;
