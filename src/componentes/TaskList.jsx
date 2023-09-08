import { TaskCard } from "./TaskCard";
import { useContext } from "react";
import { ContextTareas } from "../context/ContextTareas";

export function TaskList({}) {
  const {DeleteTareas, tareas} = useContext(ContextTareas)
  if (tareas.length === 0) {
    return <h1 className="text-4xl font-bold text-center">No hay tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {tareas.map((tarea) => (
        <TaskCard key={tarea.id} t={tarea} del={DeleteTareas} />
      ))}
    </div>
  );
}
