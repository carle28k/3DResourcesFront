import { GridSearch } from "../../components/GridSearch"


import './softwarePage.css'

export const SoftwarePage = () => {
  return (
    <>
        <div className="softwareContainer"> 
          <div className="formContainer">
            <form>
                <input
                    type="text"
                    className="formControl"
                    id="search-text"
                    placeholder="búsqueda..."
                />
                <div >
                <label>Categoría</label>
                <select id="category" className="formSelect">
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

        <div className="gridContainer">
          <GridSearch />
        </div>
      </div> 
    </>
  )
}
