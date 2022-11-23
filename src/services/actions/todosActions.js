import axios from "axios";
import {
  TODO_FAILED,
  TODO_REQUEST,
  TODO_SUCCESS,
} from "../constants/todosConstants";

export const getAllTodos = () => async (ariful) => {
  ariful({ type: TODO_REQUEST });

  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(res.data);
    ariful({ type: TODO_SUCCESS, payload: res.data });
  } catch (error) {
    ariful({
      type: TODO_FAILED,
      payload: error.message,
    });
  }
};
