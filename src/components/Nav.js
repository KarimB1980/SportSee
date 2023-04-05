import React from "react"
import { Link } from "react-router-dom"
import icon1 from '../assets/icones/icon1.png'
import icon2 from '../assets/icones/icon2.png'
import icon3 from '../assets/icones/icon3.png'
import icon4 from '../assets/icones/icon4.png'
import logo from '../assets/logo/Logo.png'

import Datas from '../Axios/AxiosId'
import Objectifs from './Objectifs'
import RadarDashboard from './Radar'
import KPI from './KPI'
import Poids from './Poids'
import Card from "./Card"

import calories from '../assets/icones/calories-icon.png';
import carbs from '../assets/icones/carbs-icon.png';
import fat from '../assets/icones/fat-icon.png';
import protein from '../assets/icones/protein-icon.png';

export default function Nav() {

  const datasUser = Object.assign({}, Datas());
  console.log(datasUser);

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

        <div className='poidsComposants'>
          <div className='nameUser'>
            <h1>Bonjour</h1>
            <h2>{datasUser['firstName']}</h2>
          </div>
          <div className="messageObjectifs">
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
          </div>
          <div className="poidsComposantsCards">     
            <div className="composantsCards">
              <div id='poids'>
                <Poids/>
              </div>
              <div className='composants'>
                <div id='objectifs'>
                  <Objectifs/>
                </div>
                <div id='radar'>
                  <RadarDashboard/>
                </div>
                <div id='kpi'>
                  <KPI/>
                </div>
              </div>
            </div>
            <div id="cards">
              <Card description={"Calories"} valeur={`${datasUser.calorieCount/1000}kCal`} icon={calories} />
              <Card description={"Proteines"} valeur={`${datasUser.proteinCount}g`} icon={protein} />
              <Card description={"Glucides"} valeur={`${datasUser.carbohydrateCount}g`} icon={carbs} />
              <Card description={"Lipides"} valeur={`${datasUser.lipidCount}g`} icon={fat} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}