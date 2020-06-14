import React from "react";
import TodoListItem from "./TodoListItem";
import {TaskContext} from "../contexts/TaskContext";

export default class TodoList extends React.Component {
  static contextType = TaskContext;

  render() {
    return (
      <div className="TodoList">
        <h2>List of todos</h2>
        { this.renderTaskItems() }
      </div>
    )
  }

  renderTaskItems() {
    const {list} = this.context;
    return(
      list.length > 0
      ? list.map((item, index) =>
          <TodoListItem
            data={item}
            key={index}
            id={index}
          />
        )
    : <em>You have no tasks</em>
    );
  }
}
