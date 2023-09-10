import { TaskList } from "./componentes/TaskList";
import { TaskForm } from "./componentes/TaskForm";
import '../index.css'

export function TaskPage() {
  return (
    <main className="bg-slate-500 h-screen">
      <div className="container mx-auto">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}


