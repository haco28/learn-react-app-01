import React from 'react';
import './App.scss';
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

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
    const formIsDisplayed = this.state.formIsDisplayed;
    return (
      <div className="App">
        <header className="App-header">
          <h1>MYTODOAPP</h1>
        </header>

        <section>
          <AddTodo
            onAddClick={() => this.handleDisplayForm()}
            formIsDisplayed={formIsDisplayed}
            handleSubmit={(e) => this.handleSubmit(e)}
            handleChangeInput={(e) => this.handleChangeInput(e)}
            handleChangeText={(e) => this.handleChangeText(e)}
            handleDisplayForm={() => this.handleDisplayForm()}
            title={this.state.title}
            desc={this.state.desc}
          />
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
