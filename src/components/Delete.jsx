export default function Delete({ todos, setTodos, todoElement }) {
  const deletedTodo = (theDeletedTodo) => {
    const newTodos = todos.filter((todo) => {
      return todo !== theDeletedTodo;
    });
    console.log(todos);
    setTodos(newTodos);
  };

  return (
    <p>
      <button
        className="delete-button"
        onClick={() => {
          deletedTodo(todoElement);
        }}
      >
        Delete
      </button>
    </p>
  );
}
