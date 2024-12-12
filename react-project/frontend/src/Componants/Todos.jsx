export function Todos({ Todos }) {
  return (
    <div>
      {Todos.map(function (todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed == true ? "complted":"mark as Complete"}</button>
          </div>
        );
      })}
    </div>
  );
}
