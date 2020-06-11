import React from "react";

export default class TodoListItem extends React.Component {
  renderTask() {
    const isOpen = this.props.id === this.props.current;
    return (
      <div className='TodoListItem'>
        <div className="TodoListItemTitle">
          <span onClick={this.props.onClickShow}>{this.props.data.title}</span>
          <button onClick={this.props.onDelete}>DELETE</button>
          <button onClick={this.props.onClickEdit}>EDIT</button>
        </div>
        {isOpen && <div>
          <hr/>
          <p>{this.props.data.desc}</p></div>}
      </div>
    );
  }

  renderEditTask() {
    return(
      <form>
        <div className='TodoListItem'>
          <div className="TodoListItemTitle">
            <input id="input" type="text" defaultValue={this.props.title} onChange={this.props.handleChangeInput}/>
          </div>
          <hr/>
          <textarea id="text" defaultValue={this.props.desc} onChange={this.props.handleChangeText} />
          <div className="actions">
            <button type="button" onClick={this.props.onClickUpdate}>Update</button>
            <button type="button" onClick={this.props.onClickEdit}>Cancel</button>
          </div>
        </div>
      </form>
    );
  }

  render() {
    const showEditForm = this.props.editing && this.props.id === this.props.current;

    if (showEditForm) {
      return (<div>{this.renderEditTask()}</div>)
    }

    return  <div>{this.renderTask()}</div>
  }
}