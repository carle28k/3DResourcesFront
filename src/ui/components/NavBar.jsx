import { NavLink } from "react-router-dom"


import './navBar.css'

export const NavBar = () => {



  return (
    <nav>
      <ul className="navBar">

        <li>
          <NavLink
            to={`/software`}
            className={({ isActive }) => isActive ? 'navLoaded' : ''}>
            Software
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/hardware`}
            className={({ isActive }) => isActive ? 'navLoaded' : ''}>
            Hardware
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/detail`}
            className={({ isActive }) => isActive ? 'navLoaded' : 'navNotLoaded'}>
            Documentación
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
