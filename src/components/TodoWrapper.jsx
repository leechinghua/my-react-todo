import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper() {
  const [todos, setTodos] = useState([
    { content: "打掃廁所", id: Math.random() },
    { content: "寫作業", id: Math.random() },
  ]);
  return (
    <div className="wrapper">
      <h1>待辦事項</h1>
      <CreateForm  />
      {todos.map((todo) => {
        return <Todo todo={todo.content} key={todo.id} />;
      })}
    </div>
  );
}

export default TodoWrapper;
