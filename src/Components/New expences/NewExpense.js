import React from 'react'
import Form from './Form'
import "./NewExpense.css"
function NewExpense(props) {
  const getdata = (data)=>{
    console.log(data);
    props.get(data);
    return "la chose" ;
  } 
  return (

    <div className='new-expence'>
        <Form onGetData={getdata} ></Form>
    </div>
  
    )
}

export default NewExpense