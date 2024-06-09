import React, { useState,useRef, useContext } from "react";
import styles from "./AddTodo.module.css";
import { IoIosAddCircle } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";
function AddTodo() {
  // ->Either these two line or the below 3rd line
  // const contextObj=useContext(TodoItemsContext);
  // const addNewItem=contextObj.addNewItem;
  const {addNewItem} = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const todoDateELement = useRef();

  const handleNewTodoItem=(event)=>{
    event.preventDefault();

    const todoName = todoNameElement.current.value;
    const dueDate = todoDateELement.current.value;
    
    if(todoName!=="" && dueDate!==""){
      addNewItem(todoName,dueDate)
      todoNameElement.current.value='';
      todoDateELement.current.value='';
    }
    
  }


  return (
    <div className={`container text-center`}>
      <form onSubmit={handleNewTodoItem}>
        <div className="row kg-row">
          <div className="col-6">
            <input
              className={styles.first} 
              ref={todoNameElement}
              type="text"
              placeholder="Enter Todo Here" 
            />
          </div>
          <div className="col-4">
            <input
              className={styles.second} 
              type="date" 
              ref={todoDateELement}
            />
          </div>
          <div className="col-2">
            <button 
              type="submit"
              className={` btn btn-success kg-button ${styles.btn} ${styles.third}`}
            >
              <IoIosAddCircle 
                className={styles.icon} 
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
