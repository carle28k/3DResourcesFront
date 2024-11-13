import { GridSearch } from "../../components/GridSearch"

export const SoftwarePage = () => {
  return (
    <>
      <div className="">
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

        <div>
          <GridSearch />
        </div>
    </>
  )
}
