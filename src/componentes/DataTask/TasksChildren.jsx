import React from "react";
import {TfiTrash} from 'react-icons/tfi';


const TasksChildren = ({id, texto, completada, completarTarea, eliminarTarea}) => {
  return (
    <div className={completada ? 'tasks-container completada' :  'tasks-container'}>
      <div className="tasks-text"
        onClick={() => {
          completarTarea(id);
          completada ? alert("Tarea Incompleta") :  alert("Completar Tarea");
        }}
      >
        {texto}
      </div>
      <div className="tasks-icon-container"
        onClick={() => eliminarTarea(id)}
      >
        <TfiTrash className="tasks-icon"/>
      </div>
    </div>
  );
}

export default TasksChildren;