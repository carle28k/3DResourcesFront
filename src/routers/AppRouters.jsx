import { Navigate, Route, Routes } from "react-router-dom"
import { DetailPage, HardwarePage, HomePage, ResourcesPage, SearchPage, SoftwarePage, LoginPage, CreateSoftwarePage, SoftwareDetailsPage } from "../publicViews/pages"
import { ProtectedPage } from "../admin/pages"
import { UserContext } from "../context/UserContext"
import { useContext } from "react"


export const AppRouters = () => {
  const { isAuthenticated } = useContext(UserContext)


  return (
    
    <Routes>
            
            {/* RUTAS PÚBLICAS */}
            <Route path="/" element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            {/* Rutas dinámicas */}
            {/* <Route path="/search/:name" element={<Detail />} /> */}


            <Route path="softwares" element={<SoftwarePage />} />
            <Route path="software/:id" element={<SoftwareDetailsPage />} />
            {/* <Route path="software-create" element={<CreateSoftwarePage />} /> */}
            <Route path="hardware" element={<HardwarePage />} />
            <Route path="resources" element={<ResourcesPage />} />
            <Route path='login' element={<LoginPage />} />

            {/* Ruta temporal para ver detalles */}
            <Route path="detail" element={<DetailPage />} />

            {/* RUTAS PROTEGIDAS */}
            {/* Rutas protegidas para el admin */}

            {
                isAuthenticated
                    ?
                    <Route path="software-create" element={<CreateSoftwarePage />} />
                    :
                    <Route path='/*' element={<Navigate to={'/'} />} />
            }

            {
                isAuthenticated
                    ?
                    <Route exact path='admin' element={<ProtectedPage />} />
                    :
                    <Route path='/*' element={<Navigate to={'login'} />} />
            }


            {/* Rutas protegidas para el user */}

            {/* En el caso de que la ruta no exista lleva a: */}
          <Route path='/*' element={<Navigate to={'/'} />} />

            {/* En el caso de que la ruta no exista escribe: 
            <Route path="*" element={<h1>No hay resultados</h1>} />  */}
            
          </Routes>

  )
}
