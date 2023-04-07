import React from "react"
import { Link } from "react-router-dom"
import logo from '../assets/logo/Logo.png'

export default function NavHorizontale() {
  return (
    <nav id="navigation">
      <Link to={`/`}><img id='logo' src={logo} alt="logo" /></Link>
      <Link to="/" className='accueil'>Accueil</Link>
      <Link to="/" className='profil'>Profil</Link>
      <Link to="/" className='reglage'>Réglage</Link>
      <Link to="/" className='communaute'>Communauté</Link>
    </nav>
  )
}