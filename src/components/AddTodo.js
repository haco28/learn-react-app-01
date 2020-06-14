import React, { useContext } from "react";

import {TaskContext} from "../contexts/TaskContext";

const AddTodo = () => {
  const {
    desc,
    formIsDisplayed,
    title,
    handleSubmitCreateTaskForm,
    onTitleChange,
    onDescChange,
    toggleDisplayForm
  } = useContext(TaskContext);
  return (
    <div>
      <button onClick={toggleDisplayForm}>
        {!formIsDisplayed ? 'Add Todo' : 'Cancel'}
      </button>

      {formIsDisplayed
        ? <form onSubmit={handleSubmitCreateTaskForm}>
          <label htmlFor="title">
            <span>Title:</span>
            <input type="text" id="title" value={title} onChange={onTitleChange}/>
          </label>
          <label htmlFor="desc">
            <span>Description:</span>
            <textarea id="desc" cols="30" rows="10" defaultValue={desc}
                      onChange={onDescChange}/>
          </label>
          <div className="actions">
            <button type="button" onClick={toggleDisplayForm}>Cancel</button>
            <button type="submit">Add</button>
          </div>
        </form>
        : ''
      }
    </div>
  )
}

export default AddTodo;