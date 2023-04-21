import React from "react";
import TaskList from "./DataTask/TaskList";
import "../tasks-style/Tasks.css";


const Tasks = () => {
  return (
    <div className="task-applications">
      <div className="tasks-list-principal">
        <h1>TODO LIST with fETCH API</h1>
          <TaskList />
      </div>
    </div>
  );
}

export default Tasks;
