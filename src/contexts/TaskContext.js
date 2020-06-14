import React, {createContext, useState} from "react";

export const TaskContext = createContext();

const TaskContextProvider = (props)  => {
  const [list, setTask] = useState([
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
  ]);

  const addTask = (title, desc) => {
    setTask([{title, desc}, ...list])
  }

  const removeTask = (id) => {
    setTask(list.filter((task,index) =>  id !== index ));
  }

  const updateTask = (id, task) => {
    let tasksList = list;
    tasksList[id] = task;
    setTask([...tasksList])
  }

  const [currentTask, setCurrent] = useState(null);
  const setCurrentTask = (id) => {
    setCurrent(id);
  };
  const toggleShowTask = (id) => {
    setCurrentTask((prevState) => prevState === id ? null : id);
    setEditingValue(false);
  }

  const [formIsDisplayed, displayForm] = useState(false);
  const toggleDisplayForm = () => {
    displayForm((prevState => !prevState));
    setTitleValue('');
    setDescValue('');
  }

  const [title, setTitle] = useState('');
  const setTitleValue = (value) => {
    setTitle(value);
  }
  const onTitleChange = (event) => {
    setTitleValue(event.target.value);
  }

  const [desc, setDesc] = useState('');
  const setDescValue = (value) => {
    setDesc(value);
  }
  const onDescChange = (event) => {
    setDescValue(event.target.value);
  }

  const handleSubmitCreateTaskForm = (event) => {
    event.preventDefault();

    addTask(title, desc);
    toggleDisplayForm();
  }

  const [editing, setEditing] = useState(false);
  const setEditingValue = (value) => {
    setEditing(value);
  };

  const toggleEditTask = (id) => {
    setCurrentTask(id);
    setEditingValue((prevState => !prevState));
    setTitleValue((prevState => prevState === '' ? list[id].title : ''));
    setDescValue((prevState => prevState === '' ? list[id].desc : ''));
  }

  const handleSubmitUpdateTaskForm = (id) => {
    if (title === '' && desc === '') {
      return;
    }
    updateTask(id, {title, desc});
    toggleEditTask(id);
  }

  return(
    <TaskContext.Provider value={{
      currentTask,
      editing,
      formIsDisplayed,
      list,
      handleSubmitCreateTaskForm,
      handleSubmitUpdateTaskForm,
      onDescChange,
      onTitleChange,
      removeTask,
      toggleDisplayForm,
      toggleEditTask,
      toggleShowTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider;
