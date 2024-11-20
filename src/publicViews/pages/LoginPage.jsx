import { useNavigate } from "react-router-dom"
import { useUser } from "../../hooks/useUser"

export const LoginPage = () => {

    const {isAuthenticated, login, setUser } = useUser()
    const navigate = useNavigate()

    const handleSubmit = (ev) => {
        ev.preventDefault()

        const nombre = ev.target.nombre.value.trim()
        const password = ev.target.password.value.trim()


        /* comprobar que existe usuario con ese nombre y contraseña en la base de datos*/

        const logeredUser = {
            id: 2,
            nombre,
            roll: 'admin'
        }

        setUser(logeredUser)
        login()
        navigate('/admin')
    }
    return (
        <div>
            <h1>LoginPage</h1>
            <p>{isAuthenticated ? 'está autenticado' : 'no está autenticado'}</p>

            <form
                id='login'
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name='nombre'
                    id='nombre'
                    placeholder='Nombre'
                />
                <input
                    type="text"
                    name='password'
                    id='password'
                    placeholder='Password'
                />
                <button type='submit'>
                    Login
                </button>
            </form>
        </div>
    )
}