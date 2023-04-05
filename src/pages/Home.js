import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

// Création de la page d'accueil
export default function Home() {
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
      </div>

    </div>
  )
}