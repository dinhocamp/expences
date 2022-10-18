import "./Form.css"
import React, { useState } from 'react'

function Form() {
    // let [input,setInput]=useState({
    //     title:"",
    //     price:0,
    //     date:""
    // })
    let [title, setTitle] = useState("");
    let titleChangeHandler = (e) => {
        setTitle(e.target.value)
        // setInput({...input,title:e.target.value})
        // setInput((prev)=>{return {...prev,title:e.target.value}})
    }
    let [price, setPrice] = useState(0);
    let priceChangeHandler = (e) => {
        setPrice(e.target.value)
        // setInput({...input,price:e.target.value})
        // setInput((prev)=>{return {...prev,price:e.target.value}})
    }
    let [date, setDate] = useState("");
    let dateChangeHandler = (e) => {
        setDate(e.target.value)
        // setInput({...input,date:e.target.value})
        // setInput((prev)=>{return {...prev,date:e.target.value}})
    }
    let i = 0
    // setTitle("");
    // setPrice("");
    // setTitle("");
    return (
        <form onSubmit={(e) => {
            //   const expenceDta={...input}
            console.log(++i)
            e.preventDefault()
        }
        }>
            {/* {console.log(input,"from")} */}
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>
                        title
                    </label>
                    <input type="text" placeholder="title" value={title} onChange={titleChangeHandler} />

                </div>
            </div>
            <div className="new-expense__control">
                <label>
                    price
                </label>
                <input type="number" placeholder="price" min="0" value={price} onChange={priceChangeHandler} />

            </div>
            <div className="new-expense__control">
                <label>
                    date
                </label>
                <input type="date" placeholder="title" min="2020-01-01" max="2023-12-31" value={date} onChange={dateChangeHandler} />

            </div>
            <div className="new-expense__control">
                <button  >
                    cancel
                </button>
                <button type="submit">
                    add expence
                </button>
            </div>
        </form>
    )
}

export default Form