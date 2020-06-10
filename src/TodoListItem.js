import React from "react";

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  handleClick () {
    const isOpen = !this.state.isOpen;
    this.setState({isOpen: isOpen})
  }

  render() {
    const isOpen = this.state.isOpen;
    return (
      <div className='TodoListItem'>
        <div className="TodoListItemTitle">
          <span onClick={() => this.handleClick()}>{this.props.data.title}</span>
          <button onClick={() => this.props.onDelete()}>DELETE IT</button>
        </div>
        {isOpen && <div><hr/><p>{this.props.data.desc}</p></div>}
      </div>
    );
  }
}