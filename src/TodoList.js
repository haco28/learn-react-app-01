import React from "react";

import TodoListItem from "./TodoListItem";
export default class TodoList extends React.Component {
  render() {
    return (
      <div className="TodoList">
        <h2>List of todos</h2>
        { this.renderTaskItems() }
      </div>
    )
  }

  renderTaskItems() {
    return (
      this.props.todolist.map((item, index) =>
        <TodoListItem data={item} key={index} onDelete={() => this.props.onDelete(index)}/>
      )
    );
  }
}