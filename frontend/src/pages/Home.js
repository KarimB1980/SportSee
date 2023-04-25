import React, { useState, useEffect } from 'react'
import './style/Home.css'
import { Link } from 'react-router-dom'

// Creation of the homepage
const Home = () => {

  let status = localStorage.getItem('mock')

  let [Mock, setMock] = useState(status);

  // eslint-disable-next-line
  useEffect(() => {
    setMock(status)
  })

  if (Mock==="true") {
    document.getElementById('root').style.backgroundColor = " #fcfed0"; 
    return (
      <div className="Accueil">
        <div className="titre">
          <h1>
            Choix de l'utilisateur
          </h1>
        </div>
        <div className='choixUtilisateur'>
          <Link to={'/user/12'} >Accéder à l'utilisateur Karl</Link>
          <Link to={'/user/18'} >Accéder à l'utilisateur Cecilia</Link>
          <button onClick={() => {
            setMock(!Mock);
            localStorage.setItem("mock", false);
            window.location.reload(false);
          }} className="boutondonnees" id="donneesMock" > Données Mock </button>
        </div>
      </div>
    )
  } else {
    return (
      <div className="Accueil">
        <div className="titre">
          <h1>
            Choix de l'utilisateur
          </h1>
        </div>
        <div className='choixUtilisateur'>
          <Link to={'/user/12'}>Accéder à l'utilisateur Karl</Link>
          <Link to={'/user/18'}>Accéder à l'utilisateur Cecilia</Link>
          <button onClick={() => {
            setMock(!Mock);
            localStorage.setItem("mock", true);
            window.location.reload(false);
          }} className="boutondonnees" id="donneesAPI" > Données API </button>
        </div>
      </div>
    )
  }
}

export default Home