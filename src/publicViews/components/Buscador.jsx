import { useState } from "react";


/* Importación de TAGS desde variables de entorno */
const TAGS = import.meta.env.VITE_TAGS
  ? JSON.parse(import.meta.env.VITE_TAGS)
  : [];

export const Buscador = ({onNewFind}) => {

    const [searchText, setSearchText] = useState("");
    const [activeTags, setActiveTags] = useState([]);

    
  /* Actualización de la búsqueda al cambior el texto */
  const handleSubmit = (ev) => {
    ev.preventDefault()
    setSearchText(ev.target.searchtext.value);
    /* console.log(search.target.value) */
    onNewFind(searchText,activeTags)
  };

  /* CONTROL DE ETIQUETAS SELECCINADAS */
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

    onNewFind(searchText,activeTags)

  };

  return (
    <>
        <div className="formContainer">
            
          <form onSubmit={handleSubmit}>

            <input
              type="text"
              className="searchBar"
              id="searchtext"
              name="searchtext"
              placeholder="búsqueda..."
             
            />

            <button type="submit">Buscar</button>
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
        </div>
    </>
  )
}
