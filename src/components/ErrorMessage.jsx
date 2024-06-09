import React from 'react'
import styles from './ErrorMessage.module.css'
import { useContext } from 'react';
import { TodoItemsContext } from '../store/todo-items-store';
function ErrorMessage() {
  const contextObj=useContext(TodoItemsContext);
  // const {todoItems}=contextObj;Either This or below line
  const todoItems=contextObj.todoItems;

  return (!todoItems.length && <h2 className={styles.errorHead}>No todo items in the List</h2>)
}

export default ErrorMessage