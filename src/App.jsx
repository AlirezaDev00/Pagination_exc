import React, { useEffect, useState } from "react";
import "./App.css";
import Users from "./Components/Users/Users";

export default function App() {
  const [todos, set_todos] = useState(null);
  const [is_pending, set_is_pending] = useState(true);
  const [error, set_error] = useState(null);

  const [current_page , set_current_page] = useState(2)

  const item_count = 10

  const start_index = (current_page - 1) * item_count;

  const end_index = current_page * item_count


  useEffect(() => {
    fetch("/src/Data/data.json")
      .then((res) => res.json())
      .then((data) => {
        set_todos(data);
        set_is_pending(false);
      })
      .catch((err) => {
        set_error(err.message);

        set_is_pending(false);
      });
  }, []);

  return (
    <>
      {is_pending && <h2>Loading ...</h2>}
      {todos && <Users todos={todos} start={start_index} end={end_index}></Users>}
      {error === `Unexpected token '<', "<!doctype "... is not valid JSON` && (
        <p>Url Is Not Valid!!</p>
      )}
      {/* <Pagination></Pagination> */}
    </>
  );
}
