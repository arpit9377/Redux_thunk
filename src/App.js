import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData, delData } from "./actions";

function App() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.data.todo);

  const handleFetch = () => {
    dispatch(addData());
  }

  const handleDel = () => {
    dispatch(delData());
  }

  return (
    <>
      <button onClick={handleFetch}>Fetch</button>
      <button onClick={handleDel}>Delete</button>

      {todo && <div>{JSON.stringify(todo)}</div>}
    </>
  );
}

export default App
