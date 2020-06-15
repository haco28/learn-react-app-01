const taskReducer = (state, action) => {
  let {list, currentTask, formIsDisplayed, title, desc, editing} = state;

  switch (action.type) {
    case 'ADD_TASK':
      list = [{title: action.title, desc: action.desc}, ...list];
      return {...state, list}
    case 'UPDATE_TASK':
      list[action.id] = {title: action.title, desc: action.desc};
      return {...state, list}
    case 'REMOVE_TASK':
      list = list.filter((task,index) =>  action.id !== index );
      return {...state, list};
    case 'SET_CURRENT_TASK':
      currentTask = state.currentTask === action.id ? null : action.id;
      return {...state, currentTask};
    case 'TOGGLE_DISPLAY_FORM':
      formIsDisplayed = !state.formIsDisplayed;
      return {...state, formIsDisplayed};
    case 'SET_TITLE':
      title = action.title;
      return {...state, title};
    case 'SET_DESC':
      desc = action.desc;
      return {...state, desc};
    case 'EDITING':
      editing = action.value;
      return {...state, editing};
    default:
      return state;
  }
}

export default taskReducer;