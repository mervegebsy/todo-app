import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { getColor } from "./getColor";

import "./Todo.css";
import TodoUpdateItem from "./TodoUpdateItem";

const TodoItem = (props) => {
  const { todo, todos, setTodos } = props;

  const [update, setUpdate] = useState(false);

  const deleteFunc = () => {
    let todoList = todos.filter((x) => x.id != todo.id);
    setTodos(todoList);
  };

  const changeState = () => {
    let todoList = todos.map((x) => {
      if (x.id == todo.id) {
        let temp = x;
        temp.isCompleted = x.isCompleted == 1 ? 0 : 1;
        return temp;
      } else {
        return x;
      }
    });
    setTodos(todoList);
  };

  return (
    <Card className="todo-item">
      {update == false ? (
        <Card.Body>
          <div className="todo-item__title">
            <span
              className="todo-item__priority"
              style={{ backgroundColor: getColor(todo) }}
            ></span>
            <div className="todo-item__row">
              <Button variant="primary" onClick={() => setUpdate(true)}>
                Edit
              </Button>
              <Button variant="danger" onClick={deleteFunc}>
                Delete
              </Button>
              <Button variant="warning" onClick={changeState}>
                Change
              </Button>
            </div>
          </div>
          <Card.Title className="todo-item__task">
            {todo.isCompleted == 0 ? todo.task : <s>{todo.task}</s>}
          </Card.Title>

          <Card.Title className="todo-item__task">
            {todo.date.toLocaleDateString()}
          </Card.Title>
        </Card.Body>
      ) : (
        <TodoUpdateItem
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          setUpdate={setUpdate}
        />
      )}
    </Card>
  );
};

export default TodoItem;
