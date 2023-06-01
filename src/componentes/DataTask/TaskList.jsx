import React from "react";
import { useState, useEffect } from "react";
import '../../tasks-style/TaskList.css';
import TaskForm from "./TaskForm";
import TasksChildren from "./TasksChildren";

const TaskList = () => {

  //--------------------------------------------------------------------  
  // Zona de Estados

  const [tareas, setTareas] = useState([]);
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [notaActual, setNotaActual] = useState(null);
  // const [url] = useState('http://localhost:3002');
  const [url] = useState('https://assets.breatheco.de/apis/fake/todos/user/RDPA-GitHub');

  /*  const tareaActual = () => {
     if (notaActual && notaActual.text !== '') {
       ActualizarTarea('perrotp');
     }
   }
  */

  //--------------------------------------------------------------------
  // useEffect

  useEffect(() => {
    getHistory();
  }, []);

  //--------------------------------------------------------------------  
  // Funcion de Historial de Tareas

  //console.log('Text: ', text, 'Error: ', error, 'Nota Actual: ', notaActual);

  // Cargando Data - OK - GET
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

    fetch(`${url}`, options)
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

  // Agregando Tarea - OK - POST
  const agregarTarea = async () /*tarea*/ => {

    const options = {
      method: 'POST', // Tipos de Metodos: (GET, POST, PUT, DELETE)
      body: JSON.stringify(/* tarea */[]), //-> Solo se usa con POST & PUT
      headers: {
        "Content-Type": "application/json"
      }
    }

    try {

      const response = await fetch(`${url}`, options)
      //console.log(response);

      //const data = await response.json();

      console.log("Creacion de Array! -> OK!  ");
      //console.log(data);
      getHistory();
    }
    catch (error) {
      console.log(error.message)
    }

    /* if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [...tareas, tarea ];
      setTareas(tareasActualizadas);
     } */

  }

  // Actualizar Tarea
  const ActualizarTarea = async (tarea) => {

    const options = {
      method: 'PUT',
      body: JSON.stringify(tareas),
      headers: {
        "Content-Type": "application/json"
      }
    }

    try {

      const response = await fetch(`${url}`, options);
      const info = await response.json();

      //console.log(tareas[0].label)

      if (info.result) {
        if (tareas.length === 1 && tareas[0].label === 'sample task') {
          setTareas(tarea);

        } else {
          setTareas((prevState) => prevState.concat(tarea))
          console.log(tareas);
        }

        setText('');
        //getHistory();


      } else {
        setError("Error al intentar eliminar");
      }

    } catch (error) {
      console.log(error.message);
    }

  }

  

  // Eliminando Tarea individuales - OK - DELETE
 /*  const eliminarTarea = async id => {

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

  // Delete All - OK - DELETE
  const deleteAll = async () => {

    const options = {
      method: 'DELETE',
      //body:
      headers: {
        "Content-Type": "application/json"
      }
    }
    //console.log('Item #' + id.toString() + ': Delete');

    try {
      const response = await fetch(`${url}`, options);

      if (response.status === 200) {

        agregarTarea();

        //setTareas((prevState) => prevState.filter((tareas) => tareas.id !== id));
        //setError(null);

      } else {
        setError("Error al intentar eliminar!");
      }
    }
    catch (error) {
      console.log(error.message);
    }

    // const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    // setTareas(tareasActualizadas);
  }

  return (
    <>
      <TaskForm
        onSubmit={ActualizarTarea}
        deleteAll={deleteAll}
      />
      {/* ----------------------------------------------------------- */}
      <div className="task-list-container">

        {


          tareas.length > 0 && tareas[0].label !== 'sample task' &&

          tareas.map((tarea, ID) =>

            <TasksChildren
              key={ID}
              id={ID}
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