import { useState, useContext } from "react";

export function TaskCard({ t, del }) {
  return (
    <div className="bg-blue-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{t.titulo}</h1>
      <p className="text-sm text-zinc-400 capitalize">{t.desc}</p>
      <button className="bg-orange-400 px-2 py-1.5 rounded-md mt-4 hover:bg-orange-200" onClick={() => del(t.id)}>Eliminar</button>
    </div>
  );
}
