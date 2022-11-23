import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../services/actions/todosActions";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  return (
    <div>
      <h2>todo</h2>
      {isLoading && <p>Loading......</p>}
      {todos && todos.map((todo, index) => <p key={index}>{todo.title}</p>)}
      {error && <p>{error}</p>}
      {console.log(todos)}
    </div>
  );
};

export default Todos;
