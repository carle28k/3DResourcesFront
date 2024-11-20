import React from 'react'
import { SoftwareCard } from '../ui/components/SoftwareCard'
/* import { useFetch } from '../hooks/useFetch' */

import './gridSearch.css'
import { useFetch } from '../hooks/useFetch'
import { useParams } from 'react-router-dom'


export const GridSearch = ({busqueda}) => {

  const {p}= useParams()
  const page = !p ? 0 : p
  const endpoint=`softwares`

  const {softwares, isLoading, errors}=useFetch(endpoint)
  /* console.log (softwares) */
  const {ok, msg, result}=softwares

/* const { softwares: dataFech, isLoading} = useFetch(busqueda) */

const arrayCardRecursosTemp=[
    {
      id: 1,
      title: "MAYA",
      description_short: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, pariatur voluptatem, voluptas enim...",
      logo: "ruta logo 01",
      category: "Software",
      tags: ["3D", "Rigging", "Animation","Cosa"]
    },
    {
      id: 2,
      title: "Substance Painter",
      description_short: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, pariatur voluptatem, voluptas enim...",
      logo: "ruta logo 02",
      category:"Software",
      tags: ["3D", "Animation","Cosa", "otra","simulación"]
    },
    {
      id: 3,
      title: "Houdini",
      description_short: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, pariatur voluptatem, voluptas enim...",
      logo: "ruta logo 03",
      category:"Software",
      tags: ["3D"]
    },
    {
      id: 4,
      title: "Blender",
      description_short: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, pariatur voluptatem, voluptas enim...",
      logo: "ruta logo 04",
      category:"Software" ,
      tags: ["3D"]
    }
]


  return (
    <>
      <div className='grid-container'>
          {
            errors 
              ?
                <p>${erorrs}</p>
              :
                (
                  isLoading 
                    ? 
                      <h3>CARGANDO</h3>
                    :
                      result.map((result)=>(
                        <SoftwareCard 
                          key={result.software_id}
                          {...result}
                        /> 
                      )
                )            
            )
          }
        </div>
    </>
   /*  <>
      <div className='grid-container'>
        {arrayCardRecursosTemp.map((software)=>
            <SoftwareCard 
              key={software.id}
              title={software.title}
              description_short={software.description_short}
              logo={software.logo}
              tags={software.tags}
            />  
          )
        }
        
      </div>
    </> */
  )
}

