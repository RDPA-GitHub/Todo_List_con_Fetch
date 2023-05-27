import React from 'react';
import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import '../../tasks-style/TaskForm.css';
import { HiTrash } from 'react-icons/hi';

// Este componente Principal para colocar las tareas

const TaskForm = ({ onSubmit }) => {
  //-------------------  ZONA DE FUNCIONES  ----------------------------------------
  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  }

  const manejarEnvio = e => {

    e.preventDefault();

    if (input !== '') {

      const tareaNueva = {
        text: input
      }
      onSubmit(tareaNueva);
      setInput("");
    }

  }


  //-------------------------------------------------------------------------------
  return (

    <div className='d-flex justify-content-center'>

      <form
        action=""
        className="task-form"
        onSubmit={manejarEnvio}
      >
        <input
          type="text"
          className="task-input"
          placeholder='Ingrese una Tarea'
          name='text'
          value={input}
          onChange={manejarCambio}
        />

        <button className="task-button" title='Agregar Tarea'>
          <FiSend />
        </button>

      </form>

      <button className="btn btn-secondary ms-2">
          <HiTrash className='Font-Size-Icon'/>
      </button>

    </div>

  );
}

export default TaskForm;