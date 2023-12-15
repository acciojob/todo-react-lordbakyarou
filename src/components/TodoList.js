import React, { useState } from "react";

const ToDoList = () => {
  const [taskName, setTaskName] = useState("");

  const [task, setTask] = useState([]);

  function addToDo(e) {
    e.preventDefault();
    setTask([...task, taskName]);
    setTaskName("");
  }

  return (
    <div>
      <form>
        <p>To-Do List</p>
        <input
          type="text"
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
        />
        <button onClick={addToDo}>Add Todo</button>
      </form>

      <ul>
        {task.map((item, index) => {
          console.log(item);
          return (
            <li key={index}>
              <p>{item}</p>{" "}
              {/* <button onClick={(e) => e.target.parentNode.remove()}>
                Delete
              </button> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
