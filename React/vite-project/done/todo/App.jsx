//"Create a simple to-do list application. It should allow users to add new tasks, mark them as complete, and delete them. Please show me how you would manage the state for the tasks."
//add
//complete
//deletes
import React from "react";
import Todo from "./todo";
import { TodoProvider } from "./context";

function App() {
  return (
    <TodoProvider>
      <Todo></Todo>
    </TodoProvider>
  );
}

export default App;
