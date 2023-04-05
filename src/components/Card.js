import React from 'react';
import './Card.css';

export default function Card({description, valeur, icon}) {
  return (
    <article className="card" id={description} >
      <img className="imageIconCard" src={icon} alt='imageIconCard' />
      <div className='valeurdescription'>
        <div className='valeurCard'>
          {valeur}
        </div>
        <div className='descriptionCard'>
          {description}
        </div>
      </div>
    </article>
  )
}