import { useState } from "react"

export default function lista (){
    const [tareas, setTareas] = useState<string[]>([])
    const [tarea, setTarea] = useState<string>("")//En typescript <string[]> se especifica el tipo de dato que se va a almacenar en el array y ([]) es el valor inicial del array/estado.
    return(
        <div>
            <label className="mr-2 font-bold text-2xl" htmlFor="nombre">Nombre de la tarea:</label>
            <input className="border-1 mr-2" type="text" id="nombre" onChange={(e)=> {setTarea(e.target.value)}}/>
            {/* (e)=> {setTarea(e.target.value) Con la función flecha espera que pase algo, en este caso a que cambie,
            esta recibiendo "e" como parametro que es donde se almacena lo que se escribe en el input y mientras cambia
            va cambiando el state */}
            <button className="hover:bg-blue-600 bg-blue-500 text-white px-3 py-2 rounded" onClick={()=> setTareas(()=> [...tareas, tarea])}>Enviar</button>
        </div>
    )
}
