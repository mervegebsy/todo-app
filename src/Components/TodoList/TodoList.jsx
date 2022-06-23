import React from "react";
import TodoItem from "./TodoItem";

import "./Todo.css";

const TodoList = (props) => {
  const { todos, setTodos, filteredTodos } = props;

  return (
    <div className="todos">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
