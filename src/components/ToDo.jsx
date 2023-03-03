import { useState } from "react";
import List from "./List";

export default function ToDo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  return (
    <p>
      <input
        type="text"
        value={todo}
        name="todo"
        placeholder="todo list item goes here"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        //todo is whatever is typed into the inbox box
      />
      <button className="add-button" onClick={addTodo}>
        {" "}
        add
      </button>
      <List todos={todos} setTodos={setTodos} todo={todo} />
    </p>
  );
}
