import Delete from "./Delete";

export default function List({ todos, setTodos, todo }) {
  return todos.length !== 0 ? (
    <ul className="to-do list">
      {todos.map((todoElement, index) => (
        <div>
          <li key={index}>{todoElement}</li>
          <Delete todos={todos} setTodos={setTodos} todoElement={todoElement} />
        </div>
      ))}
    </ul>
  ) : (
    <div className="empty">list is empty</div>
  );
}
