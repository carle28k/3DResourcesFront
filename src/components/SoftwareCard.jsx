import React from 'react'

export const SoftwareCard = ({title, description_short, logo, tags}) => {
  
  return (
    <>
        <section>
            <h2>{title}</h2>

            <p>imagen:{logo}</p>

            <p>{description_short}</p>

            <div>
                <p>{tags}</p>
            </div>

        </section>

    </>
  )
}