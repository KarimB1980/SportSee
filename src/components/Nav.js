import React from 'react'
import { Link } from "react-router-dom"
import icon1 from '../assets/icones/icon1.png'
import icon2 from '../assets/icones/icon2.png'
import icon3 from '../assets/icones/icon3.png'
import icon4 from '../assets/icones/icon4.png'
import logo from '../assets/logo/Logo.png'

import Datas from '../fetch/Fetch'

// Création de l'en-tête
export default function Nav() {
  return (
    <nav>
      <header id='header-principal'>
        <nav id="navigation">
          <Link to={`/`}><img id='logo' src={logo} alt="logo" /></Link>
          <Link to="/" className='accueil'>Accueil</Link>
          <Link to="/" className='profil'>Profil</Link>
          <Link to="/" className='reglage'>Réglage</Link>
          <Link to="/" className='communaute'>Communauté</Link>
        </nav>
      </header>
      <div id='asideUser'>
        <aside id='aside-principal'>
          <nav id='aside'>
            <Link to={`/`}><img src={icon1} alt="icon1" /></Link>
            <Link to={'/'}><img src={icon2} alt="icon2" /></Link>
            <Link to={'/'}><img src={icon3} alt="icon3" /></Link>
            <Link to={'/'}><img src={icon4} alt="icon4" /></Link>
          </nav>
          <div id="titre">
            <h2>
              Copyright SportSee 2020
            </h2>
          </div>
        </aside>
        <div className='User'>
          <Datas/>
        </div>
      </div>
    </nav>
  )
}