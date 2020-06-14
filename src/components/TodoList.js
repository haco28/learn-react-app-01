import React, {useContext} from "react";
import TodoListItem from "./TodoListItem";
import {TaskContext} from "../contexts/TaskContext";

const TodoList = () => {
  const {list} = useContext(TaskContext);
  return (
    <div className="TodoList">
      <h2>List of todos</h2>
      {
        list.length > 0
          ? list.map((item, index) =>
            <TodoListItem
              data={item}
              key={index}
              id={index}
            />
          )
          : <em>You have no tasks</em>
      }
    </div>
  );
}

export default TodoList;
