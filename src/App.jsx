import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import ErrorMessage from "./components/ErrorMessage";
import TodoItems from "./components/TodoItems";
import TodoItemsContextProvider from "./store/todo-items-store";
import styles from "./App.module.css";
import "./App.css";


function App() {
  
  return (
    <TodoItemsContextProvider >
      <section className={`${styles.mainContainer} todo-container`}>
        <article className={styles.todoContainer}>
          <AppName/>
          <AddTodo/>
          <ErrorMessage/>
          <TodoItems/>
        </article>
      </section>
    </TodoItemsContextProvider>
  );
}

export default App;
