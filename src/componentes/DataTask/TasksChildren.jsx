import React from "react";
import { HiTrash } from 'react-icons/hi';
/*import { FiEdit } from 'react-icons/fi';
import { FiSend } from "react-icons/fi";*/


const TasksChildren = ({ id, texto,eliminarTarea }) => {

  /* const [Data, setData] = useState(false);
   const [inputUpdate, setInputUpdate] = useState('');

   const currentChange = () => {
    setData(!Data);
    console.log("Data: ", Data);  
  } 

  const handleUpdate = () => {
    
    actualizarTarea(inputUpdate);
    console.log(inputUpdate);
    currentChange();
  }; */
  
  const dataId = id.toString();

  return (

    <div className='tasks-container'>
      <div className="tasks-text">

        {
          /* Data ?
            <>
              <input
                key={id}
                className="Actualizacion rounded-start py-1 px-3 
              border border-0  
              tasks-input-2
              shadow bg-danger text-light fw-bold"
                type="text"
                value= {inputUpdate}
                onChange={(e) => {

                    console.log("texto: " ,e.target.value);
                    setInputUpdate(e.target.value);
                    
                  }
                  }
              />
              <button className="d-flex justify-content-center 
              pe-3 py-2    
              rounded-end border border-0 bg-danger text-light
              task-button-2"
                title='Agregar Tarea'
                onClick={() => {
                  handleUpdate()
                }}
              >
                <FiSend />
              </button>
            </>
            : */
          }

          {texto}

      </div>


      <div className="Icons">

        {
          /* !Data && 
          <FiEdit className="tasks-icon2" onClick={() => currentChange()} />
          */
        }

        {/*----------------------------------------------------------------------------------- */}

        <HiTrash className="tasks-icon1" onClick={() => eliminarTarea(id)} />


      </div>
    </div>


  );
}



export default TasksChildren;