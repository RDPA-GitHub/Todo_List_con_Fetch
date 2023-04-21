import React from 'react';
import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import {v4 as uuidv4} from 'uuid';
import '../../tasks-style/TaskForm.css';

const TaskForm = ({onSubmit}) => {
  //-------------------  ZONA DE FUNCIONES  ----------------------------------------
  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  }

  const manejarEnvio = e => {

    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    onSubmit(tareaNueva);
    setInput("")

  }


  //-------------------------------------------------------------------------------
  return (
    <form
    action=""
    className="task-form"
    onSubmit={manejarEnvio}
    >
      <input
        type="text"
        className="task-input"
        placeholder='Ingrese una Tarea'
        name='texto'  
        value={input}
        onChange={manejarCambio}
        />
      <button className="task-button" title='Agregar Tarea'>
        
        <FiSend />
      </button>
    </form>
  );
}

export default TaskForm;