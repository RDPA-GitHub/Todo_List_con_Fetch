import React from "react";
import { useState, useEffect } from "react";
import '../../tasks-style/TaskList.css';
import TaskForm from "./TaskForm";
import TasksChildren from "./TasksChildren";

const TaskList = () => {
  //--------------------------------------------------------------------
  // useEffect

  useEffect(() => {
    getHistory();
  }, []);

  //--------------------------------------------------------------------  
  // Zona de Estados

  const [tareas, setTareas] = useState([]);
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [notaActual, setNotaActual] = useState(null);
  // const [url] = useState('http://localhost:3002');
  const [url] = useState('https://assets.breatheco.de/apis/fake/todos/user');

  /*  const tareaActual = () => {
     if (notaActual && notaActual.text !== '') {
       ActualizarTarea('perrotp');
     }
   }
  */
  //--------------------------------------------------------------------  
  // Funcion de Historial de Tareas

  console.log('Text: ', text, 'Error: ', error, 'Nota Actual: ', notaActual);

  const getHistory = () => {

    //----------------------------------------------------------------------------

    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    }

    //----------------------------------------------------------------------------
    //-------------------------- Fetch Asincrono ---------------------------------

    fetch(`${url}/ronald2023`, options)
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((info) => {
        console.log(info);
        setTareas(info);
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  // Agregando Tarea - OK
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

        getHistory(); // Historial de la Data en la pagina
        setText(''); // Limpia el Input

        // setNotes((prevState) => [...prevState, data]);
        // setTareas((prevState) => prevState.concat(data));

      }

    }
    catch (error) {
      console.log(error.message)
    }

    // if (tarea.texto.trim()) {
    //  tarea.texto = tarea.texto.trim();
    //  const tareasActualizadas = [...tareas, tarea ];
    //  setTareas(tareasActualizadas);
    // }

  }

  // Actualizar Tarea
  /* const ActualizarTarea = async (tarea) => {
      
    const options = {
      method: 'PUT',
      body: JSON.stringify(tarea),
      headers: {
        "Content-Type": "application/json"
      }
    }
  
    try {
  
      const response = await fetch(`${url}/notes/${tarea.id}`, options);
  
      if (response.status === 200) {
        getHistory();
        //   setNotes((prevState) => prevState.filter((note) => note.id !== id))
        setError(null);
        setNotaActual(null);
      } else {
        setError("Error al intentar eliminar");
      }
  
    } catch (error) {
      console.log(error.message);
    }
  
  } */

  // Eliminando Tarea - OK
  /* const eliminarTarea = async id => {

    const options = {
      method: 'DELETE',
      //body:
      headers: {
        "Content-Type": "application/json"
      }
    }
    console.log('Item #' + id.toString() + ': Delete');

    try {
      const response = await fetch(`${url}/notes/${id}`, options);

      if (response.status === 200) {

        getHistory();
        //setTareas((prevState) => prevState.filter((tareas) => tareas.id !== id));
        setError(null);
      } else {
        setError("Error al intentar eliminar!");
      }
    }
    catch (error) {
      console.log(error.message);
    }

    // const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    // setTareas(tareasActualizadas);
  } */


  return (
    <>
      <TaskForm
        onSubmit={agregarTarea}
      />
      {/* ----------------------------------------------------------- */}
      <div className="task-list-container">

        {
          tareas.map((tarea) => 

            <TasksChildren
              key={tarea.id}
              id={tarea.id}
              texto={tarea.label}
            //completada = {tarea.completada}
            //eliminarTarea = {eliminarTarea}
            /* actualizarTarea = {tareaActual} */
            />
          
          )
        }

      </div>
      {/* ----------------------------------------------------------- */}

    </>
  );
}

export default TaskList;