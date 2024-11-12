
import { Navigate, Route, Routes } from 'react-router-dom'

/* Importación extandar de rutas */
/* import { DetailPage } from './publicViews/pages/DetailPage'
import { HomePage } from './publicViews/pages/HomePage'
import { SearchPage } from './publicViews/pages/SearchPage'  */


import {ProtectedPage } from './admin/pages'


import { NavBar } from './ui/components'
import { AppRouters } from './routers/AppRouters'

import './App.css'

function App() {

  return (
    <>
      <header>
        <p>Esto es el header</p>
      </header>

      <nav>
        <NavBar />
      </nav>

      <main>

        
          <AppRouters />
          
       
      
      </main>
    
      <footer>
        <p>Esto es el footer</p>
      </footer>
    </>
  )
}

export default App







/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */
