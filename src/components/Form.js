import React from 'react'

function Form({setinputtext}) {
     const inputtextHandler = (e) => {
         console.log(e.target.value);
         setinputtext(e.target.value)
     };

    return (
        <div>
    <form>
      <input onClick={inputtextHandler} type="text" className="todo-input" />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
        </div>
    )
}

export default Form
