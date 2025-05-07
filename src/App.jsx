import React, { useEffect, useState } from "react";
import "./App.css";
import Users from "./Components/Users/Users";
import Pagination from "./Components/Pagination/Pagination";

export default function App() {
  const [todos, set_todos] = useState(null);
  const [is_pending, set_is_pending] = useState(true);
  const [error, set_error] = useState(null);

  const [current_page, set_current_page] = useState(1);

  const [pages_count , set_pages_count] = useState(null)

  const item_count = 10;

  const start_index = (current_page - 1) * item_count;

  const end_index = current_page * item_count;

  const pages_arr = Array.from(Array(pages_count).keys())

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        set_todos(data);
        set_pages_count(Math.ceil(data.length / item_count))
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
      {todos && (
        <>
          <Users todos={todos} start={start_index} end={end_index} ></Users>
          <Pagination set_current_page={set_current_page} pages={pages_arr}></Pagination>
        </>
      )}
      {error === `Unexpected token '<', "<!doctype "... is not valid JSON` && (
        <p>Url Is Not Valid!!</p>
      )}
    </>
  );
}
