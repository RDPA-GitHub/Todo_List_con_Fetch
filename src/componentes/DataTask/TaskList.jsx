import React from "react";
import { useState } from "react";
import '../../tasks-style/TaskList.css';
import TaskForm from "./TaskForm";
import TasksChildren from "./TasksChildren";

const TaskList = () => {

  const [tareas, setTareas] = useState([]);
  const [text, setText] = useState("");
  const [url] = useState('http://localhost:3002');

// Agregando Tarea
  const agregarTarea = async tarea => {
  
    const options = {
      method: 'POST', // Tipos de Metodos: (GET, POST, PUT, DELETE)
      body: JSON.stringify(tarea), //-> Solo se usa con POST & PUT
      headers: {
        "Content-Type": "application/json"
      }
    }

    try {

      const response = await fetch(`${url}/notes`, options)
      //console.log(response);

      const data = await response.json();

      console.log("Note Saved");
      console.log(data);

      if (data.id) {

        setTareas((prevState) => prevState.concat(data));
        setText(''); // Limpia el Input
        // setNotes((prevState) => [...prevState, data]);
        // getNotes(); // Actualizar la Data en la pagina

      }

    }
    catch (error) {
      console.log(error.message)
    }
  
  
  
  
    /* if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [...tareas, tarea ];
      setTareas(tareasActualizadas);
    }*/
    
  }

// Eliminando Tarea
  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  }

// Completar Tarea
  const completarTarea = id => {
    const tareasActualizadas = tareas.map(
      tarea => {
        if (tarea.id === id){
          tarea.completada = !tarea.completada;
        }
        return tarea;
      }
    );
    setTareas(tareasActualizadas);
  }

  return (
    <>
      <TaskForm
        onSubmit={agregarTarea}
      />
      <div className="task-list-container">
        {
          tareas.map((tarea) =>
            <TasksChildren
              key = {tarea.id}
              id = {tarea.id}
              texto = {tarea.text}
              completada = {tarea.completada}
              eliminarTarea = {eliminarTarea}
              completarTarea = {completarTarea}
            />
          )
        }
      </div>
    </>
  );
}

export default TaskList;