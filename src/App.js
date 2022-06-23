import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { myTodoData } from "./data/myTodoData";
import TodoList from "./Components/TodoList/TodoList";
import NewTodoComponent from "./Components/NewTodoComponent/NewTodoComponent";
import { filterApply } from "./util/util";

import Filter from "./Components/Filter/Filter";

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
      <Filter
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
      selectedStatus={selectedStatus}
      setSelectedStatus={setSelectedStatus}
      priority={priority}
      setPriority={setPriority}
  
      />
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
