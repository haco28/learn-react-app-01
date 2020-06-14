import React, {useContext} from "react";
import {TaskContext} from "../contexts/TaskContext";

const TodoListItem = ({id, data}) => {
  const {
    currentTask,
    editing,
    handleSubmitUpdateTaskForm,
    onTitleChange,
    onDescChange,
    removeTask,
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
          <button onClick={() => removeTask(id)}>DELETE</button>
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
      <form>
        <div className='TodoListItem'>
          <div className="TodoListItemTitle">
            <input id="input" type="text" defaultValue={title} onChange={onTitleChange}/>
          </div>
          <hr/>
          <textarea id="text" defaultValue={desc} onChange={onDescChange}/>
          <div className="actions">
            <button type="button" onClick={() => handleSubmitUpdateTaskForm(id)}>Update</button>
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
