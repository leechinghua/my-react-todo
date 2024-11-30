import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

function TodoWrapper() {
  const [todos, setTodos] = useState([
    {
      content: "打掃廁所",
      id: Math.random(),
      isCompleted: false,
      isEdited: false,
    },
    {
      content: "寫作業",
      id: Math.random(),
      isCompleted: false,
      isEdited: false,
    },
  ]);
  const addTodo = (content) => {
    setTodos([
      ...todos,
      { content, id: Math.random(), isCompleted: false, isEdited: false },
    ]);
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
  const toggleIsEditing = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id == id ? { ...todo, isEdited: !todo.isEdited } : todo;
      })
    );
  };
  const editTodo = (id, newContent) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, content: newContent, isEdited: false }
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
            toggleIsEditing={toggleIsEditing}
            editTodo={editTodo}
          />
        );
      })}
    </div>
  );
}

export default TodoWrapper;
