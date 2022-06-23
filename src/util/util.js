export const filterApply = (
  todos,
  setFilteredTodos,
  selectedDate,
  selectedStatus,
  priority
) => {
  //date

  let now = new Date();
  let todoList = todos;
  if (selectedDate == "today") {
    console.log("today");
    todoList = todoList.filter(
      (x) => x.date.toLocaleDateString() == now.toLocaleDateString()
    );
  } else if (selectedDate == "week") {
    todoList = todoList.filter(
      (x) =>
        x.date.getDate() >= now.getDate() &&
        x.date.getDate() < now.getDate() + 7 &&
        x.date.getMonth() == now.getMonth()
    );
  } else if (selectedDate == "month") {
    todoList = todoList.filter(
      (x) =>
        x.date.getMonth() >= now.getMonth() &&
        x.date.getMonth() < now.getMonth() + 1
    );
  } else if (selectedDate == "year") {
    todoList = todoList.filter(
      (x) =>
        x.date.getFullYear() >= now.getFullYear() &&
        x.date.getFullYear() < now.getFullYear() + 1
    );
  }

  //status

  if (selectedStatus == "completed") {
    todoList = todoList.filter((x) => x.isCompleted == 1);
  } else if (selectedStatus == "notCompleted") {
    todoList = todoList.filter((x) => x.isCompleted == 0);
  }

  if (priority == 1) {
    todoList = todoList.filter((x) => x.priority == 1);
  } else if (priority == 2) {
    todoList = todoList.filter((x) => x.priority == 2);
  } else if (priority == 3) {
    todoList = todoList.filter((x) => x.priority == 3);
  }

  setFilteredTodos(todoList);
};
