import React, { useState } from "react";
import { getColor } from "./getColor";
import { Button, Form } from "react-bootstrap";

import "./Todo.css";

const TodoUpdateItem = (props) => {
  const { todo, todos, setTodos, setUpdate } = props;

  const [updatedTodo, setUpdatedTodo] = useState({
    ...todo,
  });

  const updateFunc = () => {
    if (updatedTodo.task != "") {
      let todoList = todos.map((x) => {
        if (x.id == updatedTodo.id) {
          return updatedTodo;
        } else {
          return x;
        }
      });
      setTodos(todoList);
      setUpdate(false);
    } else {
      alert("Boş alan bırakılamaz");
    }
  };

  return (
    <div className="todo-item__update">
      <span
        className="todo-item__priority"
        style={{ backgroundColor: getColor(updatedTodo) }}
      ></span>
      <Form.Select
        value={updatedTodo.priority}
        onChange={(e) =>
          setUpdatedTodo({ ...updatedTodo, priority: e.target.value })
        }
      >
        <option value={1}>High</option>
        <option value={2}>Medium</option>
        <option value={3}>Low</option>
      </Form.Select>

      <Form.Control
        type="date"
        value={updatedTodo.date.toISOString().split("T")[0]}
        onChange={(e) =>
          setUpdatedTodo({ ...updatedTodo, date: new Date(e.target.value) })
        }
      />
      <Form.Control
        type="text"
        value={updatedTodo.task}
        onChange={(e) =>
          setUpdatedTodo({ ...updatedTodo, task: e.target.value })
        }
      />
      <div className="todo-item__row">
        <Button variant="danger" onClick={() => setUpdate(false)}>
          Cancel
        </Button>
        <Button variant="success" onClick={() => updateFunc()}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default TodoUpdateItem;
