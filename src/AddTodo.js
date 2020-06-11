import React from "react";

export default class AddTodo extends React.Component {
  render() {
    const formIsDisplayed = this.props.formIsDisplayed;
    return (
      <div>
        <button onClick={this.props.onAddClick}>Add Todo</button>

        {formIsDisplayed
          ? <form onSubmit={this.props.handleSubmit}>
            <label htmlFor="title">
              <span>Title:</span>
              <input type="text" id="title" value={this.props.title} onChange={this.props.handleChangeInput}/>
            </label>
            <label htmlFor="desc">
              <span>Description:</span>
              <textarea id="desc" cols="30" rows="10" defaultValue={this.props.desc}
                        onChange={this.props.handleChangeText}/>
            </label>
            <div className="actions">
              <button type="button" onClick={this.props.handleDisplayForm}>Cancel</button>
              <button type="submit">Add</button>
            </div>
          </form>
          : ''
        }
      </div>
    );
  }
}