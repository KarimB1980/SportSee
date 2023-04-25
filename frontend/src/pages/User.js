import React , {useEffect, useState} from 'react'
import NavHorizontale from '../components/NavHorizontale'
import NavVerticale from '../components/NavVerticale'
import './style/User.css'
import './style/Screen.css'

import Header from '../components/Header'
import Objectifs from '../components/Objectifs'
import RadarDashboard from '../components/Radar'
import KPI from '../components/KPI'
import Poids from '../components/Poids'
import Card from '../components/Card'

import calories from '../assets/icones/calories-icon.png'
import carbs from '../assets/icones/carbs-icon.png'
import fat from '../assets/icones/fat-icon.png'
import protein from '../assets/icones/protein-icon.png'

import getAllData from '../_service/callerService'
import { useParams } from 'react-router-dom'

// Creation of the user page
const AffichageDonneesUser = () => {

  const [user, setUser] = useState([])
  const [activity, setActivity] = useState([])
  const [averageSessions, setAverageSessions] = useState([])
  const [radarDashboard, setRadarDashboard] = useState([])
  const [userKPI, setuserKPI] = useState([])
  const [userCard, setuserCard] = useState([])

  const [load, setLoad] = useState(true)

  const [error, setError] = useState(false)

  const { userid } = useParams()
  const id = parseInt(userid)

  useEffect(() => {
    getAllData(id)
      .then(data => {
        setUser(data.user)
        setActivity(data.activity)
        setAverageSessions(data.averageSessions)
        setRadarDashboard(data.radarDashboard)
        setuserKPI(data.userKPI)
        setuserCard(data.userCard)

        setLoad(false)
      })
      .catch(err => {
        console.log(err)
        setError(true)
        setLoad(false)
      })
       
  // eslint-disable-next-line
  }, [])

  if(load){
    return (
      <div className='utilisateurs'>
        <nav>
          <header id='header-principal'>
            <NavHorizontale />
          </header>
          <div id='asideUser'>
            <NavVerticale />
            <div className='errorMessage'>
              <h2>
                Loading data...
              </h2>
            </div>
          </div>
        </nav>
      </div>  
    )
  }

  if (error) {
    return (
      <div className='utilisateurs'>
        <nav>
          <header id='header-principal'>
            <NavHorizontale />
          </header>
          <div id='asideUser'>
            <NavVerticale />
            <div className='errorMessage'>
              <h2>
                <span>Une erreur est survenue,</span>
                <span>veuillez nous excuser pour la gêne occasionnée.</span>
              </h2>
            </div>
          </div>
        </nav>
      </div>
    )
  }

  return (
    <div className='utilisateurs'>
      <nav>
        <header id='header-principal'>
          <NavHorizontale />
        </header>
        <div id='asideUser'>
          <NavVerticale />
          <div className='poidsComposants'>
            <Header userData={user}/>
            <div className="poidsComposantsCards">     
              <div className="composantsCards">
                <div id='poids'>
                  <Poids userActivity={activity}/>
                </div>
                <div className='composants'>
                  <div id='objectifs'>
                    <Objectifs userAverageSessions={averageSessions}/>
                  </div>
                  <div id='radar'>
                    <RadarDashboard userRadarDashboard={radarDashboard} />
                  </div>
                  <div id='kpi'>
                    <KPI userKPI={userKPI} />
                  </div>
                </div>
              </div>
              <div id="cards">
                <Card description={"Calories"} valeur={`${new Intl.NumberFormat("en-IN", {style: "decimal", maximumFractionDigits: 0}).format(userCard[0].keyData.calorieCount)}kCal`} icon={calories} />
                <Card description={"Proteines"} valeur={`${userCard[0].keyData.proteinCount}g`} icon={protein} />
                <Card description={"Glucides"} valeur={`${userCard[0].keyData.carbohydrateCount}g`} icon={carbs} />
                <Card description={"Lipides"} valeur={`${userCard[0].keyData.lipidCount}g`} icon={fat} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default AffichageDonneesUser;