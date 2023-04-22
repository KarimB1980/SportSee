import React from 'react'
import './style/Header.css'
import PropTypes from 'prop-types'

const Header = ({userData}) => {
  Header.propTypes = {
    userData: PropTypes.array
  }
  return (
    <header>
      <div className='nameUser'>
        <h1>Bonjour</h1>
        <h2>{userData['firstName']}</h2>
      </div>
      <div className="messageObjectifs">
        <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
      </div>
    </header>
  )
}

export default Header