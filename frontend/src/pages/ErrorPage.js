import React from 'react'
import './style/ErrorPage.css'
import { Link } from 'react-router-dom'

// Création de la page d'erreur
const ErrorPage = () => {
  return (
    <div id="page-erreur-404">
      <h1>Erreur 404</h1>
      <h2>La page que vous demandez n'existe pas.</h2>
      <h3><Link to="/">Retourner sur la page d'accueil</Link></h3>
    </div>
  )
}

export default ErrorPage