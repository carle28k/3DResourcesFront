import React from 'react'

import MayaLogo from '../../assets/LogosSoftware/MayaLogo.png'

import './softwareCard.css'
import { Link } from 'react-router-dom';

export const SoftwareCard = ({software_id, title, description_short, logo, tags}) => {
  
  const ShowTags = tags.slice(0, 3);
  const TagsCount = tags.length - 3;


  return (
    <>
        <article className="softwareCard">
          
            {/* <div className="card-logo">
              <img src={logo} alt={`${title} logo`} />
            </div> */}
            <div className="cardLogo">
              <img className="imgLogo" src={MayaLogo} alt={`${title} logo`} />
            </div>

            <h2 className="cardTitle">{title}</h2>

            <p className="card-description">{description_short}</p>
            
            <div className="cardTags">
              {ShowTags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
              {TagsCount > 0 && (
                <span className="tagPlus">+{TagsCount}</span>
              )}
            </div>
            
            <div>
              <Link to={`/software/${software_id}`} className='cardButton'>
                Ver más
              </Link>
            </div>
            
            {/* <div>
            <button className="cardButton">Ver más</button>
            </div> */}
            
        </article>

    </>
  )
}