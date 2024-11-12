import { Navigate, Route, Routes } from "react-router-dom"
import { DetailPage, HardwarePage, HomePage, ResourcesPage, SearchPage, SoftwarePage } from "../publicViews/pages"
import { ProtectedPage } from "../admin/pages"


export const AppRouters = () => {
  return (
    
    <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            {/* Rutas dinámicas */}
            {/* <Route path="/search/:name" element={<Detail />} /> */}


            <Route path="software" element={<SoftwarePage />} />
            <Route path="hardware" element={<HardwarePage />} />
            <Route path="resources" element={<ResourcesPage />} />


            {/* Ruta temporal para ver detalles */}
            <Route path="detail" element={<DetailPage />} />

            {/* RUTAS PROTEGIDAS */}
            {/* Rutas protegidas para el admin */}

           <Route path='admin' element={<ProtectedPage />} />

            {/* Rutas protegidas para el user */}

            {/* En el caso de que la ruta no exista lleva a: */}
          <Route path='/*' element={<Navigate to={'/'} />} />

            {/* En el caso de que la ruta no exista escribe: 
            <Route path="*" element={<h1>No hay resultados</h1>} />  */}
            
          </Routes>

  )
}
