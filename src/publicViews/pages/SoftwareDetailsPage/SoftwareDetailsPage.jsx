import { Link, useParams } from "react-router-dom"

import './SoftwareDetailsPage.css'
import { useFetch } from "../../../hooks/useFetch"


export const SoftwareDetailsPage = () => {

  const { id } = useParams()
  console.log(id)

  const endpoint = `software/${id}`
  console.log(endpoint)
  const { softwares, isLoading, errors } = useFetch(endpoint)

  const { ok, msg, result } = softwares
  console.log(result)

  return (
    <>
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
              <article className="post">
                <section className="postHeader">
                  <h1 className="postTitle">{result.title}</h1>
                  <p className="postCompany">Desarrollado por {result.company}</p>
                  <div className="topImg">
                    <Link target="_blank" to={`https://www.autodesk.com/es/products/maya/overview?mktvar002=3466774|SEM|21277022041|164539612720|kwd-2998184332&utm_source=GGL&utm_medium=SEM&utm_campaign=GGL_Maya_Maya_EMEA_ES_eComm_SEM_BR_NA_MIX_0000_3466774&utm_id=3466774&utm_term=kwd-2998184332&gclsrc=aw.ds&&ef_id=EAIaIQobChMI1NCr_-DoiQMVq6hoCR1xRjo-EAAYASAAEgIwCvD_BwE:G:s&s_kwcid=AL!11172!3!698958466555!b!!g!!maya%20autodesk!21277022041!164539612720&mkwid=s|pcrid|698958466555|pkw|maya%20autodesk|pmt|b|pdv|c|slid||pgrid|164539612720|ptaid|kwd-2998184332|pid|&utm_medium=cpc&utm_source=google&utm_campaign&utm_term=maya%20autodesk&utm_content=s|pcrid|698958466555|pkw|maya%20autodesk|pmt|b|pdv|c|slid||pgrid|164539612720|ptaid|kwd-2998184332|&gad_source=1&gclid=EAIaIQobChMI1NCr_-DoiQMVq6hoCR1xRjo-EAAYASAAEgIwCvD_BwE&term=1-YEAR&tab=subscription&plc=MAYA`} className='postLink'>
                      Explora la web de {result.title}
                    </Link>
                    <div className="cardTags">
                      {result.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </section>

                <section className="postMainImg">
                  <p>Imagen del PROGRAMA</p>
                  <p>LOGO del PROGRAMA</p>
                </section>

                <section className="postDetails">
                  <p>Dificultad</p>
                  <p>Precio</p>
                </section>

                <section className="postDescription" >
                  <p className="postDescriptionText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima saepe molestiae et quis aut mollitia ullam asperiores voluptatem voluptas quibusdam! Officiis omnis saepe nam dolorem perspiciatis excepturi ullam, veniam cupiditate.

                    hola



                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita a consequuntur doloribus maxime cumque aliquam dignissimos quae numquam. Earum neque sit optio ipsam minus illo nulla voluptatibus provident quibusdam iste.
                  </p>
                  <p><em>Aportado por: Nombre del Usuario</em></p>
                </section>

                <section className="postGallery">
                  <p>Galería de fotos</p>
                </section>

                <section className="postProfiles">
                  <h2 className="postProfilesText">PERFILES DEMANDADOS</h2>
                </section>

                <section className="postCombined">
                  <h2 className="postCombinedText">USADO EN COMBINACIÓN CON</h2>
                </section>

                <aside className="postRelated">
                  <h2 className="postRelatedText">TE PODRÍA INTERESAR</h2>
                </aside>

              </article>
          )
      }

    </>
  )
}
