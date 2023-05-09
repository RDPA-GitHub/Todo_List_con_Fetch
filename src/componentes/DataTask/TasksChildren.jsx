import React, { useState } from "react";
import { HiTrash } from 'react-icons/hi';
import { FiEdit } from 'react-icons/fi';


const TasksChildren = ({ id, texto, completada, completarTarea, eliminarTarea }) => {

  const [Data, setData] = useState(false);

  const currentChange = () => {
    setData(!Data);
    console.log("Data: ", Data);
  }

  return (

    <div className={completada ? 'tasks-container completada' : 'tasks-container'}>
      <div className="tasks-text"
        onClick={() => {
          completarTarea(id);
          // completada ? alert("Tarea Incompleta") : alert("Completar Tarea");
        }}>

        {
          Data == true ?
            <input
              key={id}
              className="Actualizacion"
              type="text"
              value='data'
              onChange={(e) => console.log(e.target.value)}
            />
            :
            texto
        }



      </div>


      <div className="Icons">

        <FiEdit className="tasks-icon2" onClick={() => currentChange()} />
        {/*----------------------------------------------------------------------------------- */}

        <HiTrash className="tasks-icon1" onClick={() => eliminarTarea(id)} />


      </div>
    </div>


  );
}

export default TasksChildren;