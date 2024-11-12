import { NavLink } from "react-router-dom"


import './navBar.css'

export const NavBar = () => {
  return (
    <>
      <div>NavBar</div>

      <div className="text-center">

        <p><NavLink
          to={`/`}
          className={({ isActive }) => isActive ? 'navLoaded' : ''}>
          Inicio
        </NavLink></p>
        <p><NavLink
          to={`/search`}
          className={({ isActive }) => isActive ? 'navLoaded' : ''}>
          Buscador
        </NavLink></p>
        <p><NavLink
          to={`/detail`}
          className={({ isActive }) => isActive ? 'navLoaded' : ''}>
          Detalles
        </NavLink></p>

      </div>

      <ul>
        {/* <li><NavLink to={search}>Buscador</NavLink></li> */}
      </ul>
    </>
  )
}
