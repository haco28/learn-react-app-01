import React, {useContext} from "react";
import {TaskContext} from "../contexts/TaskContext";

const TodoListItem = ({id, data}) => {
  const {
    currentTask,
    editing,
    handleRemoveTask,
    handleSubmitUpdateTaskForm,
    onTitleChange,
    onDescChange,
    toggleEditTask,
    toggleShowTask
  } = useContext(TaskContext);

  const showEditForm = editing && id === currentTask;
  const {title, desc} = data;
  const isOpen = id === currentTask;

  const renderTask = () => {
    return (
      <div className='TodoListItem'>
        <div className="TodoListItemTitle">
          <span onClick={() => toggleShowTask(id)}>{title}</span>
          <button onClick={() => handleRemoveTask(id)}>DELETE</button>
          <button onClick={() => toggleEditTask(id)}>EDIT</button>
        </div>
        {isOpen && <div>
          <hr/>
          <p>{desc}</p></div>}
      </div>
    );
  }

  const renderEditTask = () => {
    return (
      <form onSubmit={(event) => handleSubmitUpdateTaskForm(event, id)}>
        <div className='TodoListItem'>
          <div className="TodoListItemTitle">
            <input id="input" type="text" defaultValue={title} onChange={onTitleChange}/>
          </div>
          <hr/>
          <textarea id="text" defaultValue={desc} onChange={onDescChange}/>
          <div className="actions">
            <button type="submit">Update</button>
            <button type="button" onClick={() => toggleEditTask(id)}>Cancel</button>
          </div>
        </div>
      </form>
    );
  }

  return (
    showEditForm
      ? <div>{renderEditTask()}</div>
      : <div>{renderTask()}</div>
  );
}

export default TodoListItem;
