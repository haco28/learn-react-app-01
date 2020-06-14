import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TaskContextProvider from "../contexts/TaskContext";

export default class Todo extends React.Component {
  render() {
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
}