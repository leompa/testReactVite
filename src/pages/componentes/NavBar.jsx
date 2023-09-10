import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ ruta }) {
  return (
    <div>
      <ul>
        <NavLink
          to={ruta + "/"}
          className={({ isActive }) =>
            isActive ? "text-2xl text-red-700" : "text-2xl text-blue  -700"
          }
        >
          Principal{" "}
        </NavLink>
        <NavLink to={ruta + "/about"}
        className={({ isActive }) =>
        isActive ? "text-2xl text-red-700" : "text-2xl text-blue  -700"
        }
      >Sobre Mi</NavLink>
      </ul>
    </div>
  );
}

export default NavBar;
