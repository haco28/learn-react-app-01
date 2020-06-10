import React from 'react';
import './App.scss';
import TodoList from "./TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          title: 'Edit a task',
          desc: 'Edit a task'
        },
        {
          title: 'create new task',
          desc: 'Create a new task by clicking add Todo button'
        },
        {
          title: 'Alt text',
          desc: 'If there is no task display an alternative text'
        },
        {
          title: 'Delete task',
          desc: 'Click on delete button to delete a task'
        },
        {
          title: 'Click on title',
          desc: 'Display tasks description by clicking on title'
        },
        {
          title: 'Display tasks',
          desc: 'Display tasks stored in state'
        },
        {
          title: 'My first React app',
          desc: 'Create my first react app'
        }
      ],
      formIsDisplayed: false,
      title: '',
      desc: ''
    }

    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDeleteTask(i) {
    const list = this.state.list;
    list.splice(i, 1);
    this.setState({list: list})
  }

  handleDisplayForm() {
    const opened = this.state.formIsDisplayed;
    this.setState({
      formIsDisplayed: !opened
    })
  }

  handleChangeInput(e) {
    this.setState({title: e.target.value});
  }

  handleChangeText(e) {
    this.setState({desc: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.title === '') {
      return;
    }

    const list = this.state.list;
    const task = {
      'title': this.state.title,
      'desc': this.state.desc
    };
    list.unshift(task);

    document.getElementById('desc').value = '';

    this.setState({
      list: list,
      title: '',
      desc: ''
    })
  }

  render() {
    const opened = this.state.formIsDisplayed;
    return (
      <div className="App">
        <header className="App-header">
          <h1>MYTODOAPP</h1>
        </header>

        <section>
          <button onClick={() => {this.handleDisplayForm()}}>Add Todo</button>
          {opened
            ? <form onSubmit={this.handleSubmit}>
              <label htmlFor="title">
                <span>Title:</span>
                <input type="text" id="title" value={this.state.title} onChange={this.handleChangeInput}/>
              </label>
              <label htmlFor="desc">
                <span>Description:</span>
                <textarea id="desc" cols="30" rows="10" defaultValue={this.state.desc}
                          onChange={this.handleChangeText}/>
              </label>
              <div className="actions">
                <button type="button" onClick={() => {this.handleDisplayForm()}}>Cancel</button>
                <button type="submit">Add</button>
              </div>
            </form>
            : ''
          }
        </section>

        <section>
          {this.state.list.length > 0
            ? <TodoList
              todolist={this.state.list}
              onDelete={(i) => this.handleDeleteTask(i)}
            />
            : <em>You have no tasks</em>
          }
        </section>
      </div>
    );
  }
}

export default App;
