import React from "react";
import {TaskContext} from "../contexts/TaskContext";

export default class TodoListItem extends React.Component {
  static contextType = TaskContext;

  handleShowTask () {
    const {handleShowTask} = this.context;
    return handleShowTask(this.props.id);
  }

  handleDeleteTask () {
    const {handleDeleteTask} = this.context;
    return handleDeleteTask(this.props.id);
  }

  handleClickEdit () {
    const {handleClickEdit} = this.context;
    return handleClickEdit(this.props.id);
  }

  handleUpdateTask () {
    const {handleUpdateTask} = this.context;
    return handleUpdateTask(this.props.id);
  }

  renderTask() {
    const {currentTask} = this.context;
    const {title, desc} = this.props.data;
    const isOpen = this.props.id === currentTask;

    return (
      <div className='TodoListItem'>
        <div className="TodoListItemTitle">
          <span onClick={() => this.handleShowTask()}>{title}</span>
          <button onClick={() => this.handleDeleteTask()}>DELETE</button>
          <button onClick={() => this.handleClickEdit()}>EDIT</button>
        </div>
        {isOpen && <div>
          <hr/>
          <p>{desc}</p></div>}
      </div>
    );
  }

  renderEditTask() {
    const {handleChangeInput, handleChangeText} = this.context;
    const {title, desc} = this.props.data;
    return(
      <form>
        <div className='TodoListItem'>
          <div className="TodoListItemTitle">
            <input id="input" type="text" defaultValue={title} onChange={handleChangeInput}/>
          </div>
          <hr/>
          <textarea id="text" defaultValue={desc} onChange={handleChangeText} />
          <div className="actions">
            <button type="button" onClick={() => this.handleUpdateTask()}>Update</button>
            <button type="button" onClick={() => this.handleClickEdit()}>Cancel</button>
          </div>
        </div>
      </form>
    );
  }

  render() {
    const {editing, currentTask} = this.context;
    const showEditForm = editing && this.props.id === currentTask;

    if (showEditForm) {
      return (<div>{this.renderEditTask()}</div>)
    }

    return  (<div>{this.renderTask()}</div>)
  }
}