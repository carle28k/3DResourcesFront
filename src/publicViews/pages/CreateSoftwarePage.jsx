import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useForm } from "../../hooks/useForm";
import { serializeForm } from "../../helpers/serializeForm";



export const CreateSoftwarePage = () => {

  
  
  const {getApi} = useFetch()


  /* ENVIO DEL FORMULARIO */
  const handleSubmit = async (ev) => {
    ev.preventDefault()
    const form = serializeForm(ev.target)
    console.log(form)
    try{
      const endpoint = "softwares/create"
      const method = "POST"
      const resp = await getApi(endpoint, method, form)
      /* console.log(resp) */
      /* if (resp.ok){
        console.log("software creado")
        
      } else {
        console.log("Error al crear software")
      } */
      } catch (error) {
        console.log (error)
      }
  }

 

  return (
    <>
      <div>CreateSoftwarePage</div>

      <form className="createSoftwareForm" onSubmit={handleSubmit}>
      <fieldset>
            
        {/* TITLE */}
        <div>
        <label htmlFor="title">Nombre del Software:</label>
        <input type="text" name="title"  required />
        </div>

        {/* DESCRIPTION_SHORT */}
        <div>
        <label htmlFor="description_short">Descripción corta:</label>
        <textarea type="text" name="description_short" required />
        </div>

        {/* TAGS */}
        <div>
        <label htmlFor="tags">Etiquetas (separadas por comas):</label>
        <textarea type="text" name="tags"  required />
        </div>
    </fieldset>
        

        



        <button type="submit" >
         Crear Software
        </button>
      </form>

  

    
    </>
  )
}
