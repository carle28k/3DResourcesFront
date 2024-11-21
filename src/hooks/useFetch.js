import { useEffect, useState } from "react"
import { apiRest } from "../api/apiRest"


export const useFetch = (endpoint="", method = "GET", body = {}) => {

  const [softwares, setSoftwares] = useState([])
  //Mensaje de CARGANDO
  const [isLoading, setIsLoading] = useState(true)

  const [errors, setErrors] = useState(null)


  const getApi = async(customEndpoint = endpoint, customMethod = method, customBody = body)=>{
    try {
      const resp = await apiRest(customEndpoint, customMethod, customBody)
      /* CONSOLE de respuesta */
      /* console.log({resp}) */ 
      console.log(customBody,"En getApi")
      setSoftwares(resp)
      setIsLoading(false)
      setErrors(null)
    } catch (error) {
      setErrors(error)
      setIsLoading(false)
    }
    
  }


  useEffect(() => {
    getApi()
  }, [])

  return {
    softwares,
    isLoading,
    errors,
    getApi
  }
    
}
