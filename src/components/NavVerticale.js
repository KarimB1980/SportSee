import React from "react"
import { Link } from "react-router-dom"
import icon1 from '../assets/icones/icon1.png'
import icon2 from '../assets/icones/icon2.png'
import icon3 from '../assets/icones/icon3.png'
import icon4 from '../assets/icones/icon4.png'
import './NavVerticale.css'

export default function NavVerticale() {
  return (
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
  )
}