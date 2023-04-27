import React from 'react';
import './style/Card.css';
import PropTypes from 'prop-types'

const Card = ({description, valeur, icon}) => {
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

Card.propTypes = {
  description: PropTypes.string,
  valeur: PropTypes.string,
  icon: PropTypes.string
}

export default Card