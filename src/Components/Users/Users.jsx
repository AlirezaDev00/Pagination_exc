import "./Users.css";

export default function Users({ todos , start , end }) {
  const filtered_todos = todos.slice(start, end);

  return (
    <table className="users_table">
      <thead>
        <tr>
          <th>ID</th>
          <th>UserId</th>
          <th>title</th>
          <th>IsCompleted</th>
        </tr>
      </thead>
      <tbody>
        {filtered_todos.map((todo) => (
          <tr key={todo.id} id={todo.id === filtered_todos.length  ? "last_todo" : ""}>
            <td>{todo.id}</td>
            <td>{todo.user_id}</td>
            <td>{todo.title.slice(0, 25) + "..."}</td>
            <td className="status">
              <span className={`status_text ${todo.is_completed}`}>
                {todo.is_completed}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
