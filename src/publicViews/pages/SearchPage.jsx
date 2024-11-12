import React from 'react'

export const SearchPage = () => {

    


  return (
    <>

        <div className="container mt-5">
            <form>
                <input
                    type="text"
                    className="form-control"
                    id="search-text"
                    placeholder="búsqueda..."
                />
                <div >
                <label>Categoría</label>
                <select id="category" className="form-select">
                    <option value="software">Software</option>
                    <option value="hardware">Hardware</option>
                    <option value="resources">Recursos</option>
                </select>
                </div>

                <div >
                <label >Etiquetas</label>
                <select id="tags">
                    <option value="3D">3D</option>
                    <option value="2D">2D</option>
                    <option value="animation">Animación</option>
                </select>
                </div>

                

                <div>
                <button type="submit" >Buscar</button>
                </div>
            </form>
        </div>



        {/* <div className="container mt-5">
            <form id="search-form" className="row g-3">
                <div className="col-md-4">
                <label htmlFor="category" className="form-label">Categoría</label>
                <select id="category" className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="software">Software</option>
                    <option value="hardware">Hardware</option>
                    <option value="resources">Recursos</option>
                </select>
                </div>

                <div className="col-md-4">
                <label htmlFor="tags" className="form-label">Etiquetas</label>
                <select id="tags" className="form-select" value={tag} onChange={(e) => setTag(e.target.value)}>
                    <option value="3D">3D</option>
                    <option value="2D">2D</option>
                    <option value="animation">Animación</option>
                </select>
                </div>

                <div className="col-md-4">
                <label htmlFor="search-text" className="form-label">Buscar</label>
                <input
                    type="text"
                    className="form-control"
                    id="search-text"
                    placeholder="Introduce un término..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                </div>

                <div className="col-12 text-center">
                <button type="submit" className="btn btn-primary">Buscar</button>
                </div>
            </form>
        </div> */}
    </>
    
  )
}
