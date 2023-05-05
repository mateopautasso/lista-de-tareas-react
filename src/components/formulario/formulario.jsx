import React, { useState } from 'react';
import './formulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaForm(props) {

    const [nombreTarea, setNombreTarea] = useState('')


    const manejarCambio = e => {
        setNombreTarea(e.target.value)
    }

    const manejarEnvio = e => {
        e.preventDefault();
        if(nombreTarea.trim()) {
            const tareaNueva = {
                id: uuidv4(),
                texto: nombreTarea,
                completada: false
            }
            props.onSubmit(tareaNueva);
        }
        else {
            alert('Por favor ingrese un nombre para su nueva tarea')
        }
    }

    return(
        <form 
        className='tarea__form' 
        onSubmit={manejarEnvio}>

            <input 
            className='tarea__input' 
            type="text" 
            placeholder='Escribe tu tarea' 
            name='texto' 
            onChange={manejarCambio} />

            <button className='tarea__btn'>Agregar Tarea</button>
        </form>
    )   
}

export default TareaForm;
