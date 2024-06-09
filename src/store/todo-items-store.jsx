import React,{ createContext,useReducer } from "react";

/*
    ->To get the context object in the component, we need to use the useContext hook. 
    ->This hook is used to get the context object in the component. 
    ->The useContext hook takes the context object as an argument 
    and returns the value of the context object.
*/  

// When we want to get auto comlete Suggestions we have to declare the Structure of the Context Object.
export const TodoItemsContext = createContext(
    {
        todoItems:[],
        addNewItem:()=>{},
        deleteItem:()=>{}
      }
);


const todoItemsReducer=(currTodoItems,action)=>{
    let newTodoItems=currTodoItems;
    if (action.type==="NEW_ITEM"){
      newTodoItems=[
        ...currTodoItems,
        {
        todoName:action.payload.todoName,
        dueDate:action.payload.dueDate,
        time:action.payload.time
        }
      ];
    }
    else if(action.type==="DELETE_ITEM"){
      newTodoItems=currTodoItems.filter((item)=>item.time!==action.payload.time);
    }
    return newTodoItems;
  }
  

const TodoItemsContextProvider = ({children}) => {
    // const [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem=(todoName,dueDate)=>{
    const newItemAction={
      type:"NEW_ITEM",
      payload:{
        todoName,
        dueDate,
        time:new Date().toLocaleTimeString()
      }
    }
    dispatchTodoItems(newItemAction); 
  }

  const deleteItem=(key)=>{
    const deleteItemAction={
      type:"DELETE_ITEM",
      payload:{
        time:key
      }
    }
    dispatchTodoItems(deleteItemAction);
  }


  // When Key and Value are same, we can use only one of them in the object.
  // This is the shortcut functionality of ES6 and JavaScript
  // --->Either this
        // value={{
        //   todoItems:todoItems,
        //   addNewItem:addNewItem,
        //   deleteItem:deleteItem
        // }}
  // --->Or this
        // value={{
        //   todoItems,
        //   addNewItem,
        //   deleteItem
        // }}
    
    return (
        <TodoItemsContext.Provider 
            value={{
                todoItems,
                addNewItem,
                deleteItem
            }}
        >
            {children}
        </TodoItemsContext.Provider>
    )
    
}

export default TodoItemsContextProvider;