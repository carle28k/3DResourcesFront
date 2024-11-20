import { apiRest } from "../api/apiRest"

export const getSoftwares = (software) => {

    if(!software) return

    const url = `${import.meta.env.VITE_URL_BASE}/`

    const [ Arraysoftwares] = await apiRest()

    const softwares = Arraysoftwares.map((software) => (
        {


        }
    ))


  return (
    <div>getSoftwares</div>
  )
}
