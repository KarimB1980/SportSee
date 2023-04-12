import React from 'react'
import './ErrorPage.css'
import { Link } from "react-router-dom"
import './Responsive.css'

// Création de la page d'erreur
export default function ErrorPage() {
  return (
    <div id="page-erreur-404">
      <h1>Erreur 404</h1>
      <h2>La page que vous demandez n'existe pas.</h2>
      <h2><Link to="/">Retourner sur la page d'accueil</Link></h2>
    </div>
  )
}