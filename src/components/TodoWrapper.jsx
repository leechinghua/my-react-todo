import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper() {
  const [todos, setTodos] = useState([
    { content: "打掃廁所", id: Math.random(), isCompleted: false },
    { content: "寫作業", id: Math.random(), isCompleted: false },
  ]);
  const addTodo = (content) => {
    setTodos([...todos, { content, id: Math.random(), isCompleted: false }]);
  };
  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };
  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id == id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      })
    );
  };
  return (
    <div className="wrapper">
      <h1>待辦事項</h1>
      <CreateForm addTodo={addTodo} />
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleCompleted={toggleCompleted}
          />
        );
      })}
    </div>
  );
}

export default TodoWrapper;
