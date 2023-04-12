import React from 'react'
import Datas from '../Axios/AxiosId'
import DatasMock from '../Axios/AxiosIdMock'
import './Header.css'

export default function Header() {
  let datasUser = Object.assign({}, Datas());
  let datasUserMock = Object.assign({}, DatasMock());

  // eslint-disable-next-line
  if (datasUser = {}) {console.log("data est vide.");
    return (
      <header>
        <div className='nameUser'>
          <h1>Bonjour</h1>
          <h2>{datasUserMock['firstName']}</h2>
        </div>
        <div className="messageObjectifs">
          <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </div>
      </header>
    )
  } else {
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
}