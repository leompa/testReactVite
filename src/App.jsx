import { BrowserRouter, Route, Routes } from "react-router-dom";
import {TaskPage} from "./pages/TaskPage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import NavBar from "./pages/componentes/NavBar";

function App() {
  const ruta = "/testReactVite";
  return (
    <BrowserRouter>
    <NavBar ruta={ruta}/>
      <Routes>
        <Route path={ruta + "/"} element={<TaskPage/>}/>
        <Route path={ruta+ "/about"} element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
