import React from 'react';
import './style/Card.css';
import PropTypes from 'prop-types'

const Card = ({description, valeur, icon}) => {
  Card.propTypes = {
    description: PropTypes.string,
    valeur: PropTypes.string,
    icon: PropTypes.string
  }
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

export default Card