import React, { useEffect } from 'react'
import NavHorizontale from '../components/NavHorizontale'
import NavVerticale from '../components/NavVerticale'
import '../components/NavHorizontale.css'
import './User.css'
import './Responsive.css'

import Datas from '../Axios/AxiosId'
import DatasMock from '../Axios/AxiosIdMock'
import Objectifs from '../components/Objectifs'
import RadarDashboard from '../components/Radar'
import KPI from '../components/KPI'
import Poids from '../components/Poids'
import Card from '../components/Card'
import Header from '../components/Header'

import calories from '../assets/icones/calories-icon.png';
import carbs from '../assets/icones/carbs-icon.png';
import fat from '../assets/icones/fat-icon.png';
import protein from '../assets/icones/protein-icon.png';

import test from '../_mocks/test'

// Affichage des cartes des logements
export default function AffichageDonneesJSON() {
  useEffect(() => {
    console.log(test());
  }, [])

  let  datasUser = Object.assign({}, Datas());
  console.log(datasUser);

  const datasUserMock = Object.assign({}, DatasMock());

  // eslint-disable-next-line
  if (datasUser = {}) {console.log("dataUser est vide.");
    return (
      <div className='utilisateurs'>
        <nav>
          <header id='header-principal'>
            <NavHorizontale />
          </header>
          <div id='asideUser'>
            <NavVerticale />
            <div className='poidsComposants'>
            <Header />
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
                  <Card description={"Calories"} valeur={`${datasUserMock.calorieCount/1000}kCal`} icon={calories} />
                  <Card description={"Proteines"} valeur={`${datasUserMock.proteinCount}g`} icon={protein} />
                  <Card description={"Glucides"} valeur={`${datasUserMock.carbohydrateCount}g`} icon={carbs} />
                  <Card description={"Lipides"} valeur={`${datasUserMock.lipidCount}g`} icon={fat} />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  } else {
    return (
      <div className='utilisateurs'>
        <nav>
          <header id='header-principal'>
            <NavHorizontale />
          </header>
          <div id='asideUser'>
            <NavVerticale />
            <div className='poidsComposants'>
            <Header />
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
      </div>
    )
  }

}