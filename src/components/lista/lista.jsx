import React, { useState } from "react";
import TareaForm from "../formulario/formulario"
import Tarea from '../../components/tarea/tarea'
import './lista.css'
 
function ListaTareas({ inStorage }) {

    let [tareas, setTareas] = useState([...inStorage].sort((a, b) => b.createdAt - a.createdAt));
    
    const agregarTarea = tarea => {
        const fechaActual = new Date().getTime();
        const nuevaTarea = { ...tarea, createdAt: fechaActual };
        localStorage.setItem(nuevaTarea.id, JSON.stringify(nuevaTarea));
        const tareasActualizadas = [nuevaTarea, ...tareas];
        setTareas(tareasActualizadas);
    };

    const eliminarTarea = id => {
        const tareaEliminada = tareas.filter( tarea => {return tarea.id === id })
        const idTareaEliminada = tareaEliminada[0].id;
        localStorage.removeItem(idTareaEliminada)

        const tareasActualizadas = tareas.filter( tarea => tarea.id !== id )
        setTareas(tareasActualizadas)
    };
    
    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id ) {
                tarea.completada = !tarea.completada;
                localStorage.setItem(tarea.id, JSON.stringify(tarea));
            }
            return tarea;
        })
        setTareas(tareasActualizadas);
    };

    return(
        <>
            <TareaForm onSubmit={agregarTarea}/>
            <div className="tarea__lista-container">
                {
                    tareas.map((tarea) =>
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            eliminarTarea={eliminarTarea}
                            completarTarea={completarTarea}
                        />
                    )
                }
            </div>
        </>
    );
}

export default ListaTareas;