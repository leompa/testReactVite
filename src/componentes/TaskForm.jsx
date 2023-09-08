import { useState, useContext } from "react";
import { ContextTareas } from "../context/ContextTareas";

function TaskForm() {
  const [titulo, setTitulo] = useState("");
  const [desc, setDesc] = useState("");

  const {agregarTareas} = useContext(ContextTareas)
  
  const monSubmit = (e) => {
    e.preventDefault();
    agregarTareas(titulo, desc);
    setDesc("");
    setTitulo("");
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl mx-auto">Crear Tareas</h1>
      <form className="bg-slate-300 p-10 md-4" onSubmit={monSubmit}>
      <input
      className="mb-10 p-3 w-full"
        placeholder="Escribe una Tarea"
        onChange={(e) => setTitulo(e.target.value)}
        value={titulo}
        autoFocus
      />
      <input
      className="mb-10 p-3 w-full"
        placeholder="Descripcion de la Tarea"
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
      />
      <button className="bg-orange-400 px-2 py-1.5 rounded-md mt-4 hover:bg-orange-200" >Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
