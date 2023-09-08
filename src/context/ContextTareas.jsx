import { createContext, useState,useEffect } from "react";
import { task as data } from "../componentes/Task";

export const ContextTareas = createContext();

export function ContextTareasProvider(props) {
  const [tareas, settareas] = useState([]);

  useEffect(() => {
    settareas(data)}, []
  );


  function agregarTareas(tituloTarea, descTarea) {
    settareas([
      ...tareas,
      { id: tareas.length, titulo: tituloTarea, desc: descTarea },
    ]);
  }

  function DeleteTareas(idD) {
    settareas(tareas.filter((t) => t.id !== idD));
    console.log(idD);
    console.log(tareas);
  }

  return (
    <ContextTareas.Provider
      value={{ tareas, agregarTareas, DeleteTareas }}
    >
      {props.children}
    </ContextTareas.Provider>
  );
}
