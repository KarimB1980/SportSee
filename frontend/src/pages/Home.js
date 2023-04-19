import React, { useState, useEffect } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import './Responsive.css'


// Création de la page d'accueil
const Home = () => {

  let status = localStorage.getItem('mock')
  //console.log(status)

  let [API, Mocks] = useState(status);
  //console.log(API)

  // eslint-disable-next-line
  useEffect(() => {
    Mocks(status)
  })

  if (API==="true") {
    //console.log(API)
    return (
      <div className="App">
        <div className="titre">
          <h1>
            Choix de l'utilisateur
          </h1>
        </div>
        <div className='choixUtilisateur'>
          <Link to={'/user/12'} >Accéder à l'utilisateur Karl</Link>
          <Link to={'/user/18'} >Accéder à l'utilisateur Cecilia</Link>
          <button onClick={() => {
            Mocks(!API);
            localStorage.setItem("mock", false);
            window.location.reload(false);
          }} className="boutondonnees" id="donneesMock" > Données Mock </button>
        </div>
      </div>
    )
  } else {
    return (
      <div className="App">
        <div className="titre">
          <h1>
            Choix de l'utilisateur
          </h1>
        </div>
        <div className='choixUtilisateur'>
          <Link to={'/user/12'}>Accéder à l'utilisateur Karl</Link>
          <Link to={'/user/18'}>Accéder à l'utilisateur Cecilia</Link>
          <button onClick={() => {
            Mocks(!API);
            localStorage.setItem("mock", true);
            window.location.reload(false);
          }} className="boutondonnees" id="donneesAPI" > Données API </button>
        </div>
        {/* <Switch intitule1="API" intitule2="Mock" /> */}
      </div>
    )
  }
}

export default Home