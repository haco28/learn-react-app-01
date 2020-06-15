const taskReducer = (state, action) => {
  let {list} = state;

  switch (action.type) {

    case 'ADD_TASK':
      return {
        ...state,
        list: [{title: action.title, desc: action.desc}, ...list]
      }

    case 'UPDATE_TASK':
      list[action.id] = {title: action.title, desc: action.desc};
      return {
        ...state,
        list
      }

    case 'REMOVE_TASK':
      return {
        ...state,
        list: list.filter((task,index) =>  action.id !== index )
      };

    case 'SET_CURRENT_TASK':
      return {
        ...state,
        currentTask: action.id
      };

    case 'TOGGLE_DISPLAY_FORM':
      return {
        ...state,
        formIsDisplayed: !state.formIsDisplayed
      };

    case 'SET_TITLE':
      return {
        ...state,
        title: action.title
      };

    case 'SET_DESC':
      return {
        ...state,
        desc: action.desc
      };

    case 'EDITING':
      return {
        ...state,
        editing: action.value
      };

    default:
      return state;
  }
}

export default taskReducer;
