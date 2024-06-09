import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {
  const contextObj=useContext(TodoItemsContext);
  const todoItems=contextObj.todoItems;
  const onDeleteItem=contextObj.deleteItem;
  
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem 
          key={item.time}
          todoDate={item.dueDate} 
          todoName={item.todoName}
        />
      ))}
    </div>
  );
};

export default TodoItems;
