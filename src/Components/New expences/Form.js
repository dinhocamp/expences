import "./Form.css"
import React from 'react'

function Form() {
  return (
    <form>Form
        <div className="new-expense__controls">
            <div className="new-expense__control">
        <label>
            title
        </label>
        <input type="text" placeholder="title" onChange={(e)=>console.log (e.target.value)}  />

            </div>
        </div>
        <div className="new-expense__control">
        <label>
            price
        </label>
        <input type="number" placeholder="price" min="0"  />

            </div>
            <div className="new-expense__control">
        <label>
            date
        </label>
        <input type="date" placeholder="title" min="2020-01-01" max="2023-12-31" />

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