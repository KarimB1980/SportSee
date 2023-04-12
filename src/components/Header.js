import React from 'react'
import Datas from '../Axios/API/AxiosId'
import DatasMock from '../Axios/Mocks/AxiosIdMock'
import './Header.css'

export default function Header() {
  let datasUser = Object.assign({}, Datas());
  let datasUserMock = Object.assign({}, DatasMock());

  if (Object.keys(datasUser).length === 0 && datasUser.constructor === Object) {console.log("dataUserHeader est vide, affichage des données mockées.");
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
  } else { console.log("dataUserHeader est rempli, affichage des données API.");
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