import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { NavLink } from "react-router-dom"

export const Footer = () => {
    const { isAuthenticated, logout } = useContext(UserContext)

  return (
    <>
    <p>Esto es el footer</p>
          
          {/* <NavLink
              to={`/login`}
              className="login">
              Login
          </NavLink> */}

          {isAuthenticated ? (
            <span
            className="logout" style={{ cursor: "pointer", textDecoration: "underline" }} onClick={logout}>
              Logout
            </span>
          ) : (
            <NavLink to={`/login`} className="login">
              Login
            </NavLink>
          )}
    </>

  )
}
