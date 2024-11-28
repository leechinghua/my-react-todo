import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper() {
  const [todos, setTodos] = useState(["打掃廁所", "寫作業"]);
  return (
    <div className="wrapper">
      <h1>待辦事項</h1>
      <CreateForm />
      {todos.map((todo)=>)}
      <Todo  />
    </div>
  );
}

export default TodoWrapper;
