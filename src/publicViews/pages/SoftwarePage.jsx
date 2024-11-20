import { useContext, useState } from "react";
import { GridSearch } from "../../components/GridSearch"
import { UserContext } from "../../context/UserContext";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import './softwarePage.css'

/* Importación de TAGS desde variables de entorno */
const TAGS = import.meta.env.VITE_TAGS
  ? JSON.parse(import.meta.env.VITE_TAGS)
  : [];


export const SoftwarePage = () => {
  const [activeTags, setActiveTags] = useState([]);
  const { isAuthenticated } = useContext(UserContext);
  const navigate = useNavigate()


  const toggleTag = (tag) => {
    // Actualiza el estado de las tags 
    setActiveTags((prevTags) => {
      // Si tag está la eliminamos
      if (prevTags.includes(tag)) {
        // Si ya está, la eliminamos usando filter. "t" es cada una de las etiquetas que no sean diferentes a "tag"
        return prevTags.filter((t) => t !== tag);
      } else {
        // Si no está se añade
        return [...prevTags, tag];
      }
    });
  };


  return (
    <>
      <div className="softwareContainer">
        <div className="formContainer">
          <form>

            <input
              type="text"
              className="searchBar"
              id="search-text"
              placeholder="búsqueda..."
            />

            <div>
              <button type="submit" >Buscar</button>
            </div>
          </form>

          {/* SELECTOR DE ETIQUETAS */}
          <div className="tagList">
            {TAGS.map((tag) => (
              <button
                key={tag}
                className={`tagButton ${activeTags.includes(tag) ? "active" : ""}`}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Añadir software si el usuario está registrado como admin */}

          {isAuthenticated && (
            <div className="addSoftwareButton">
              <button
              type="button"
              onClick={() => {
                navigate("/software-create");
                }
              }
            >
              Añadir Software
            </button>
          </div>
          )}
        </div>

        <section className="gridContainer">
          <GridSearch />
        </section>
      </div>
    </>
  )
}
