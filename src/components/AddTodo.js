import React from "react";

import {TaskContext} from "../contexts/TaskContext";

export default class AddTodo extends React.Component {
  static contextType = TaskContext;

  render() {
    return (
      <TaskContext.Consumer>{(context) => {
        const {formIsDisplayed, handleDisplayForm, title, desc, handleChangeInput, handleChangeText, handleSubmit} = context;
        return(
          <div>
            <button onClick={handleDisplayForm}>
              {!formIsDisplayed ? 'Add Todo' : 'Cancel'}
            </button>

            {formIsDisplayed
              ? <form onSubmit={handleSubmit}>
                <label htmlFor="title">
                  <span>Title:</span>
                  <input type="text" id="title" value={title} onChange={handleChangeInput}/>
                </label>
                <label htmlFor="desc">
                  <span>Description:</span>
                  <textarea id="desc" cols="30" rows="10" defaultValue={desc}
                            onChange={handleChangeText}/>
                </label>
                <div className="actions">
                  <button type="button" onClick={handleDisplayForm}>Cancel</button>
                  <button type="submit">Add</button>
                </div>
              </form>
              : ''
            }
          </div>
        );
      }}
      </TaskContext.Consumer>
    );
  }
}
