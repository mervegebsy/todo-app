import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { myTodoData } from "./data/myTodoData";
import TodoList from "./Components/TodoList/TodoList";
import NewTodoComponent from "./Components/NewTodoComponent/NewTodoComponent";
import { filterApply } from "./util/util";
import { Form } from "react-bootstrap";

function App() {
  const [todos, setTodos] = useState(myTodoData);

  const [selectedDate, setSelectedDate] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [priority, setPriority] = useState(0);

  useEffect(() => {
    filterApply(
      todos,
      setFilteredTodos,
      selectedDate,
      selectedStatus,
      priority
    );
  }, [selectedDate, selectedStatus, priority, todos]);

  return (
    <div className="App m-5">
      <br />
      <div>
        <Form.Label>Date Filter</Form.Label>
        <Form.Select
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        >
          <option value={"all"}>All</option>
          <option value={"today"}>Today</option>
          <option value={"week"}>This Week</option>
          <option value={"month"}>This Month</option>
          <option value={"year"}>This Year</option>
        </Form.Select>
        <br />
        <Form.Label>Completed Filter</Form.Label>
        <Form.Select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value={"all"}>All</option>
          <option value={"completed"}>Completed</option>
          <option value={"notCompleted"}>Not Completed</option>
        </Form.Select>
        <Form.Label>Priority Filter</Form.Label>
        <Form.Select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value={0}>All</option>
          <option value={1}>High</option>
          <option value={2}>Medium</option>
          <option value={3}>Low</option>
        </Form.Select>
      </div>
      <br />
      <NewTodoComponent todos={todos} setTodos={setTodos} />
      <TodoList
        todos={todos}
        filteredTodos={filteredTodos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
