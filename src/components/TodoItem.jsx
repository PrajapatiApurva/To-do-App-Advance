import { useContext } from "react";
import styles from "./TodoItem.module.css";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({todoName, todoDate}) {
  const contextObj=useContext(TodoItemsContext);
  const todoItems=contextObj.todoItems;
  const deleteItem=contextObj.deleteItem;
  return (
    <div className="container">
      <div  className={`${styles.todoName} row kg-row`}>
        <div className={`col-6`}>{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button 
            type="button" 
            onClick={()=>deleteItem(todoItems.find((item)=>item.todoName===todoName).time)}
            className={`${styles.btn} btn btn-danger kg-button`}>
            <MdDelete 
              className={styles.icon}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
