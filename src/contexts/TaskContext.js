import React, {createContext, useReducer} from "react";
import taskReducer from "../reducers/taskReducer";

export const TaskContext = createContext();

const TaskContextProvider = (props)  => {
  const [state, dispatch] = useReducer(taskReducer, {
      list: [{
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
        }],
      title: '',
      desc: '',
      editing: false,
      currentTask: null,
      formIsDisplayed: false
    }
  );

  const onTitleChange = (event) => {
    dispatch({type: 'SET_TITLE', title: event.target.value});
  }
  const onDescChange = (event) => {
    dispatch({type: 'SET_DESC', desc: event.target.value});
  }

  const handleRemoveTask = (id) => {
    dispatch({type: 'REMOVE_TASK', id})
  }

  const toggleShowTask = (id) => {
    dispatch({type: 'SET_CURRENT_TASK', id: state.currentTask === id ? null : id});
    dispatch({type: 'EDITING', value: false});
  }

  const toggleDisplayForm = () => {
    dispatch({type: 'TOGGLE_DISPLAY_FORM'});
    dispatch({type: 'SET_TITLE', title: ''});
    dispatch({type: 'SET_DESC', desc: ''});
  }

  const toggleEditTask = (id) => {
    dispatch({type: 'SET_CURRENT_TASK', id});
    dispatch({type: 'EDITING', value: true});
    dispatch({type: 'SET_TITLE', title: state.editing ? state.list[id].title : ''});
    dispatch({type: 'SET_DESC', desc: state.editing ? state.list[id].desc : ''});
  }

  const handleSubmitCreateTaskForm = (event) => {
    event.preventDefault();

    if (state.title === '' && state.desc === '') {
      return;
    }

    dispatch({type: 'ADD_TASK', title: state.title, desc: state.desc})
    toggleDisplayForm();
  }

  const handleSubmitUpdateTaskForm = (event, id) => {
    event.preventDefault();

    if (state.title === '' && state.desc === '') {
      return;
    }
    dispatch({type: 'UPDATE_TASK', id, title: state.title, desc: state.desc})
    toggleEditTask(id);
  }

  return(
    <TaskContext.Provider value={{
      ...state,
      handleSubmitCreateTaskForm,
      handleSubmitUpdateTaskForm,
      handleRemoveTask,
      onDescChange,
      onTitleChange,
      toggleDisplayForm,
      toggleEditTask,
      toggleShowTask
    }}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider;
