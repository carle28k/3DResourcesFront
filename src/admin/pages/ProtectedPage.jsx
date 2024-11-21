import { NavLink } from "react-router-dom"

import './ProtectedPage.css'

export const ProtectedPage = () => {
  return (
    <>
      <div className="ProtedtedPageContainer">
        <h1 className="title">Area Privada</h1>
        <nav>
          <ul className="ProtedtedPageNavBar">

            <li>
              <NavLink
                to={`/softwares`}
                className="ProtedtedPageNavButton">
                Software
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/hardware`}
                className="ProtedtedPageNavButton">
                Hardware
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/detail`}
                className="ProtedtedPageNavButton">
                Documentación
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
