import React from "react";
import { HiTrash } from 'react-icons/hi';
import { FiEdit } from 'react-icons/fi';


const TasksChildren = ({ id, texto, completada, completarTarea, eliminarTarea }) => {


  return (

        <div className={completada ? 'tasks-container completada' : 'tasks-container'}>
          <div className="tasks-text"
            onClick={() => {
              completarTarea(id);
              // completada ? alert("Tarea Incompleta") : alert("Completar Tarea");
            }}>

            < input className="Actualizacion" type="text" value={texto}onChange={(e) => console.log(e.target.value)}/>
            
            {texto}
          </div>
          <div className="Icons">
            <FiEdit className="tasks-icon2" />
            <div className="tasks-icon-container"
              onClick={() => eliminarTarea(id)}
            >
              <HiTrash className="tasks-icon1" />
            </div>

          </div>
        </div>
    

  );
}

export default TasksChildren;