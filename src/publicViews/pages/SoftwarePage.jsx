import { useContext, useState } from "react";
import { GridSearch } from "../../components/GridSearch"
import { UserContext } from "../../context/UserContext";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import './softwarePage.css'
import { Buscador } from "../components/Buscador";



export const SoftwarePage = () => {
  console.log("Carga componente")
  const [searchText, setSearchText] = useState("");
  const [activeTags, setActiveTags] = useState([]);
  
  const { isAuthenticated } = useContext(UserContext);
  const navigate = useNavigate()

  const onNewFind =(search, tags=[])=>{
    setSearchText(search)
    setActiveTags(tags)
  }

  return (
    <>
      <div className="softwareContainer">
        
        <Buscador onNewFind={onNewFind}/>

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
          <GridSearch searchText={searchText} activeTags={activeTags} />
        </section>

    </>
  )
}
