import React from 'react';
import './tarea.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {

    return(
        <div className={completada ? 'lista__tarea tarea__container tarea-completada' : 'lista__tarea tarea__container'}>
            <div 
            className={completada ? 'tarea__texto texto-tachado' : 'tarea__texto'}
            onClick={()=>{completarTarea(id)}}>
                {texto}
            </div>
            <div className='tarea__close-icon-container'>
                <AiOutlineCloseCircle className='tarea__close-icon'
                onClick={()=>{eliminarTarea(id)}}/>
            </div>
        </div>
    );
};

export default Tarea;