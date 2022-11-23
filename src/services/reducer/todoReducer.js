import {
  TODO_FAILED,
  TODO_REQUEST,
  TODO_SUCCESS,
} from "../constants/todosConstants";

const initialState = {
  isLoading: false,
  todos: [],
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case TODO_SUCCESS:
      return {
        isLoading: false,
        todos: action.payload,
        error: null,
      };
    case TODO_FAILED:
      return {
        isLoading: false,
        todos: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default todoReducer;
