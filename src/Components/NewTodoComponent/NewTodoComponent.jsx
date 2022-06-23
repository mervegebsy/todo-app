import React, { useState } from "react";

import { Button, Form } from "react-bootstrap";
import { getColor } from "../TodoList/getColor";
import "./NewTodoComponent.css";

const NewTodoComponent = (props) => {
  const { todos, setTodos } = props;

  const [newTodo, setNewTodo] = useState({
    id: Math.random(),
    task: "",
    isCompleted: 0,
    date: new Date(),
    priority: 1,
  });

  const newFunc = () => {
    if (newTodo.task != "") {
      let todoList = [...todos];
      todoList.push(newTodo);
      setTodos(todoList);
      setNewTodo({
        id: Math.random(),
        task: "",
        isCompleted: 0,
        date: new Date(),
        priority: 1,
      });
    } else {
      alert("Boş alan bırakılamaz");
    }
  };

  return (
    <div className="todo-item__update newTodo">
      <h2>Add New</h2>
      <span
        className="todo-item__priority"
        style={{ backgroundColor: getColor(newTodo) }}
      ></span>
      <Form.Select
        value={newTodo.priority}
        onChange={(e) => setNewTodo({ ...newTodo, priority: e.target.value })}
      >
        <option value={1}>High</option>
        <option value={2}>Medium</option>
        <option value={3}>Low</option>
      </Form.Select>

      <Form.Control
        type="date"
        value={newTodo.date.toISOString().split("T")[0]}
        onChange={(e) =>
          setNewTodo({ ...newTodo, date: new Date(e.target.value) })
        }
      />
      <Form.Control
        type="text"
        value={newTodo.task}
        onChange={(e) => setNewTodo({ ...newTodo, task: e.target.value })}
      />
      <div className="todo-item__row">
        <Button variant="success" onClick={() => newFunc()}>
          Create
        </Button>
      </div>
    </div>
  );
};

export default NewTodoComponent;
