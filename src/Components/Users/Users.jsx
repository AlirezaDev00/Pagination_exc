import "./Users.css";

export default function Users() {
  return (
    <table className="users_table">
      <thead>
        <tr className="js">
          <th>ID</th>
          <th>UserId</th>
          <th>title</th>
          <th>IsCompleted</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>5</td>
          <td>10</td>
          <td>Hello Im Alireza</td>
          <td className="status"><span className="status_text completed">Completed</span></td>
        </tr>
        <tr>
          <td>5</td>
          <td>10</td>
          <td>Hello Im Alireza</td>
          <td className="status"><span className="status_text completed">Completed</span></td>
        </tr>
        <tr>
          <td>5</td>
          <td>10</td>
          <td>Hello Im Alireza</td>
          <td className="status"><span className="status_text completed">Completed</span></td>
        </tr>
        <tr>
          <td>5</td>
          <td>10</td>
          <td>Hello Im Alireza</td>
          <td className="status"> <span className="status_text un_completed">UnCompleted</span></td>
        </tr>
        <tr>
          <td>5</td>
          <td>10</td>
          <td>Hello Im Alireza</td>
          <td className="status"><span className="status_text un_completed">UnCompleted</span></td>
        </tr>
      </tbody>
    </table>
  );
}
