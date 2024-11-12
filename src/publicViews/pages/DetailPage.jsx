import React from 'react'

export const DetailPage = () => {
  return (
    <>
      <div className="container mt-5">
          <article className="post">
              <h2 className="post-title">Nombre del Recurso (Link)</h2>
              <p><strong>Desarrollado por:</strong> Nombre del Desarrollador</p>
              <p><strong>Sirve para:</strong> Breve descripción del recurso</p>

              <p><strong>Perfiles demandados:</strong> Perfil profesional...</p>
              <ul>
              <li><strong>Te podría interesar si:</strong> Condiciones</li>
              <li><strong>Precio:</strong> Gratuito o de pago</li>
              <li><strong>Dificultad:</strong> Nivel</li>
              </ul>

              <p><em>Aportado por: Nombre del Usuario</em></p>

              <p><strong>Usado en combinación con:</strong> Otro software, etc.</p>
          </article>
      </div>
    </>
  )
}
