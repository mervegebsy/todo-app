export   const getColor = (todo) => {
    if (todo.priority == 1) {
      return "red";
    } else if (todo.priority == 2) {
      return "orange";
    } else if (todo.priority == 3) {
      return "yellow";
    }
  };