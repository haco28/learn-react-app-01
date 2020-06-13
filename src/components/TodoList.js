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
        <TodoListItem
          data={item}
          key={index}
          id={index}
          onClickShow={() => this.props.onClickShow(index)}
          onDelete={() => this.props.onDelete(index)}
          onClickEdit={() => this.props.onClickEdit(index)}
          onClickUpdate={() => this.props.onClickUpdate(index)}
          title={this.props.title}
          desc={this.props.desc}
          handleChangeInput={this.props.handleChangeInput}
          handleChangeText={this.props.handleChangeText}
          current={this.props.current}
          editing={this.props.editing}
        />
      )
    );
  }
}