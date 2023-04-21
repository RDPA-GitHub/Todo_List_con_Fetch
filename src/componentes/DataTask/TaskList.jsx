import React from "react";
import { useState } from "react";
import '../../tasks-style/TaskList.css';
import TaskForm from "./TaskForm";
import TasksChildren from "./TasksChildren";

const TaskList = () => {

  const [tareas, setTareas] = useState([]);

// Agregando Tarea
  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
    
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
              texto = {tarea.texto}
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