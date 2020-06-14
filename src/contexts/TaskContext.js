import React, {Component, createContext} from "react";

export const TaskContext = createContext();

export default class TaskContextProvider extends Component{
  state = {
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
    desc: '',
    currentTask: null,
    editing: false
  }

  handleDisplayForm = () => {
    this.setState({
      formIsDisplayed: !this.state.formIsDisplayed
    })
  }

  handleChangeInput = (e) => {
    this.setState({title: e.target.value});
  }

  handleChangeText = (e) => {
    this.setState({desc: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.title === '' && this.state.desc === '') {
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
      desc: '',
      formIsDisplayed: false
    })
  }

  handleShowTask = (i) => {
    const currentTask = this.state.currentTask;

    this.setState({
      currentTask: i === currentTask ? null : i,
      editing: false
    })
  }

  handleDeleteTask = (i) => {
    const list = this.state.list;
    list.splice(i, 1);
    this.setState({list: list})
  }

  handleClickEdit = (i) => {
    this.setState(prevState => {
      return {
        title: !prevState.editing ? this.state.list[i].title : '',
        desc: !prevState.editing ? this.state.list[i].desc : '',
        currentTask: i,
        editing: i === prevState.currentTask ? !prevState.editing : true
      }
    });
  }

  handleUpdateTask = (i) => {
    if (this.state.title === '' && this.state.desc === '') {
      return;
    }

    const task = {
      title: this.state.title,
      desc: this.state.desc
    }

    let list = this.state.list;
    list[i] = task;

    this.setState({
      title: '',
      desc: '',
      currentTask: i,
      editing: false,
      list: list
    })
  }

  render() {
    return(
      <TaskContext.Provider value={{
        ...this.state,
        handleDisplayForm: this.handleDisplayForm,
        handleChangeInput: this.handleChangeInput,
        handleChangeText: this.handleChangeText,
        handleSubmit: this.handleSubmit,
        handleShowTask: this.handleShowTask,
        handleDeleteTask: this.handleDeleteTask,
        handleClickEdit: this.handleClickEdit,
        handleUpdateTask: this.handleUpdateTask
      }}>
        {this.props.children}
      </TaskContext.Provider>
    )
  }
}
