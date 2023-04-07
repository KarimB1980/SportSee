import React from 'react'
import Datas from '../Axios/AxiosId'

import './Header.css'

export default function Header() {
  const datasUser = Object.assign({}, Datas());

  return (
    <header>
      <div className='nameUser'>
        <h1>Bonjour</h1>
        <h2>{datasUser['firstName']}</h2>
      </div>
      <div className="messageObjectifs">
        <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
      </div>
    </header>
  )
}