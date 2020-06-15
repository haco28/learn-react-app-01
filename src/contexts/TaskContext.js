import React, {createContext, useReducer} from "react";
import taskReducer from "../reducers/taskReducer";

export const TaskContext = createContext();

const TaskContextProvider = (props)  => {
  const [state, dispatch] = useReducer(taskReducer, {
      list: [],
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
    dispatch({type: 'SET_CURRENT_TASK', id});
    dispatch({type: 'EDITING', value: false});
  }

  const toggleDisplayForm = () => {
    dispatch({type: 'TOGGLE_DISPLAY_FORM'});
    dispatch({type: 'SET_TITLE', title: ''});
    dispatch({type: 'SET_DESC', desc: ''});
  }

  const toggleEditTask = (id) => {
    dispatch({type: 'SET_CURRENT_TASK', id});
    dispatch({type: 'EDITING', value: !state.editing});
    dispatch({type: 'SET_TITLE', title: state.title === '' ? state.list[id].title : ''});
    dispatch({type: 'SET_DESC', desc: state.desc === '' ? state.list[id].desc : ''});
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
