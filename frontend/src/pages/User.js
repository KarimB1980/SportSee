import React , {useEffect, useState} from 'react'
import NavHorizontale from '../components/NavHorizontale'
import NavVerticale from '../components/NavVerticale'
import '../components/NavHorizontale.css'
import './User.css'
import './Responsive.css'

import Datas from '../Axios/API/AxiosId'
import DatasMock from '../Axios/Mocks/AxiosIdMock'
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

import getAllData from '../_service/callerService'

//import test from '../_mocks/test'

// Affichage des cartes des logements
//export default function AffichageDonneesJSON() {
const AffichageDonneesJSON = () => {
  const [user, setUser] = useState([])
  const [activity, setActivity] = useState([])
  const [load, setLoad] = useState(true)

  useEffect(() => {
    // console.log(test());
    getAllData(12)
      .then(data => {
        console.log(data)
        setUser(data.user)
        setActivity(data.activity)
        setLoad(false)
      })
      .catch(err => console.log(err))
  }, [])

  // // Variable données API
  // let datasUser = Object.assign({}, Datas());
  // // Variable données mockées
  // let datasUserMock = Object.assign({}, DatasMock());

  // // Création du compteur de calories avec une virgule comme séparateur des milliers
  // let calorieCountMock = new Intl.NumberFormat("en-IN", {style: "decimal", maximumFractionDigits: 0}).format(datasUserMock.calorieCount);
  // let calorieCount = new Intl.NumberFormat("en-IN", {style: "decimal", maximumFractionDigits: 0}).format(datasUser.calorieCount);

  if(load){
    return <div>Loading data ....</div>
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
                    {/* <Objectifs/> */}
                  </div>
                  <div id='radar'>
                    {/* <RadarDashboard/> */}
                  </div>
                  <div id='kpi'>
                    {/* <KPI/> */}
                  </div>
                </div>
              </div>
              <div id="cards">
                {/* <Card description={"Calories"} valeur={`${calorieCount}kCal`} icon={calories} />
                <Card description={"Proteines"} valeur={`${datasUser.proteinCount}g`} icon={protein} />
                <Card description={"Glucides"} valeur={`${datasUser.carbohydrateCount}g`} icon={carbs} />
                <Card description={"Lipides"} valeur={`${datasUser.lipidCount}g`} icon={fat} /> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )



  // // Si l'API n'est pas lancée alors affichage des données mockées
  // if (Object.keys(datasUser).length === 0 && datasUser.constructor === Object) {console.log("dataUser est vide, affichage des données mockées.");
  //   return (
  //     <div className='utilisateurs'>
  //       <nav>
  //         <header id='header-principal'>
  //           <NavHorizontale />
  //         </header>
  //         <div id='asideUser'>
  //           <NavVerticale />
  //           <div className='poidsComposants'>
  //           <Header />
  //             <div className="poidsComposantsCards">     
  //               <div className="composantsCards">
  //                 <div id='poids'>
  //                   <Poids/>
  //                 </div>
  //                 <div className='composants'>
  //                   <div id='objectifs'>
  //                     <Objectifs/>
  //                   </div>
  //                   <div id='radar'>
  //                     <RadarDashboard/>
  //                   </div>
  //                   <div id='kpi'>
  //                     <KPI/>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div id="cards">
  //                 <Card description={"Calories"} valeur={`${calorieCountMock}kCal`} icon={calories} />
  //                 <Card description={"Proteines"} valeur={`${datasUserMock.proteinCount}g`} icon={protein} />
  //                 <Card description={"Glucides"} valeur={`${datasUserMock.carbohydrateCount}g`} icon={carbs} />
  //                 <Card description={"Lipides"} valeur={`${datasUserMock.lipidCount}g`} icon={fat} />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </nav>
  //     </div>
  //   )
  // // Si l'API est lancée alors affichage des données API
  // } else {console.log("dataUser est rempli, affichage des données API.");
  //   return (
  //     <div className='utilisateurs'>
  //       <nav>
  //         <header id='header-principal'>
  //           <NavHorizontale />
  //         </header>
  //         <div id='asideUser'>
  //           <NavVerticale />
  //           <div className='poidsComposants'>
  //             <Header userData={user} test={roger}/>
  //             <div className="poidsComposantsCards">     
  //               <div className="composantsCards">
  //                 <div id='poids'>
  //                   <Poids/>
  //                 </div>
  //                 <div className='composants'>
  //                   <div id='objectifs'>
  //                     <Objectifs/>
  //                   </div>
  //                   <div id='radar'>
  //                     <RadarDashboard/>
  //                   </div>
  //                   <div id='kpi'>
  //                     <KPI/>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div id="cards">
  //                 <Card description={"Calories"} valeur={`${calorieCount}kCal`} icon={calories} />
  //                 <Card description={"Proteines"} valeur={`${datasUser.proteinCount}g`} icon={protein} />
  //                 <Card description={"Glucides"} valeur={`${datasUser.carbohydrateCount}g`} icon={carbs} />
  //                 <Card description={"Lipides"} valeur={`${datasUser.lipidCount}g`} icon={fat} />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </nav>
  //     </div>
  //   )
  // }
}

export default AffichageDonneesJSON;