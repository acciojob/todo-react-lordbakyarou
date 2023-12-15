import React, { useState } from "react";

const ToDoList = () => {
  const [taskName, setTaskName] = useState("");

  const [task, setTask] = useState([]);

  function addToDo(e) {
    e.preventDefault();
    setTask([...task, taskName]);
    setTaskName("");
  }

  function deleteTask(index) {
    const updatedTaks = [...task];
    updatedTaks.splice(index, 1);
    setTask(updatedTaks);
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
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
