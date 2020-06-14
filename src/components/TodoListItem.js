import React, {useContext} from "react";
import {TaskContext} from "../contexts/TaskContext";

const TodoListItem = ({id, data}) => {
  const {
    handleShowTask,
    handleDeleteTask,
    handleClickEdit,
    handleUpdateTask,
    handleChangeInput,
    handleChangeText,
    editing,
    currentTask
  } = useContext(TaskContext);
  const showEditForm = editing && id === currentTask;
  const {title, desc} = data;
  const isOpen = id === currentTask;

  const renderTask = () => {
    return (
      <div className='TodoListItem'>
        <div className="TodoListItemTitle">
          <span onClick={() => handleShowTask(id)}>{title}</span>
          <button onClick={() => handleDeleteTask(id)}>DELETE</button>
          <button onClick={() => handleClickEdit(id)}>EDIT</button>
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
            <input id="input" type="text" defaultValue={title} onChange={handleChangeInput}/>
          </div>
          <hr/>
          <textarea id="text" defaultValue={desc} onChange={handleChangeText}/>
          <div className="actions">
            <button type="button" onClick={() => handleUpdateTask(id)}>Update</button>
            <button type="button" onClick={() => handleClickEdit(id)}>Cancel</button>
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
