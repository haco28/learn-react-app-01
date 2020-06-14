import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TaskContextProvider from "../contexts/TaskContext";

const Todo = () => {
  return (
    <TaskContextProvider>
      <div>
        <section>
          <AddTodo/>
        </section>

        <section>
          <TodoList />
        </section>
      </div>
    </TaskContextProvider>
  );
}

export default Todo;