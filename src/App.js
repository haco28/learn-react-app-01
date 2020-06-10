import React from 'react';
import './App.scss';
import TodoList from "./TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          title: 'My first React app',
          desc: 'Create my first react app'
        },
        {
          title: 'Display tasks',
          desc: 'Display tasks stored in state'
        },
        {
          title: 'Click on title',
          desc: 'Display tasks description by clicking on title'
        },
        {
          title: 'Delete task',
          desc: 'Click on delete button to delete a task'
        },
        {
          title: 'Alt text',
          desc: 'If there is no task display an alternative text'
        },
        {
          title: 'create new task',
          desc: 'Create a new task by clicking add Todo button'
        },
        {
          title: 'Edit a task',
          desc: 'Edit a task'
        }
      ]
    }
  }

  handleDeleteTask(i) {
    const list = this.state.list;
    list.splice(i, 1);
    this.setState({list: list})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>MYTODOAPP</h1>
        </header>

        <section>
          <button>Add Todo</button>
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
