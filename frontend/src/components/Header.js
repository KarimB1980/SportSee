import React from 'react'
// import Datas from '../Axios/API/AxiosId'
// import DatasMock from '../Axios/Mocks/AxiosIdMock'
import './Header.css'

// export default function Header({userData}) {
//   console.log(userData)
//     return (
//       <header>
//         <div className='nameUser'>
//           <h1>Bonjour</h1>
//           <h2>{userData}</h2>
//         </div>
//         <div className="messageObjectifs">
//           <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
//         </div>
//       </header>
//     )

  
// }


const Header = ({userData}) => {
    return (
      <header>
        <div className='nameUser'>
          <h1>Bonjour</h1>
          <h2>{userData['firstName']}</h2>
        </div>
        <div className="messageObjectifs">
          <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
        </div>
      </header>
    )
};

export default Header;

// export default function Header() {
//   // Variable données API
//   let datasUser = Object.assign({}, Datas());
//   // Variable données mockées
//   let datasUserMock = Object.assign({}, DatasMock());

//   // Si l'API n'est pas lancée alors affichage des données mockées
//   if (Object.keys(datasUser).length === 0 && datasUser.constructor === Object) {console.log("dataUserHeader est vide, affichage des données mockées.");
//     return (
//       <header>
//         <div className='nameUser'>
//           <h1>Bonjour</h1>
//           <h2>{datasUserMock['firstName']}</h2>
//         </div>
//         <div className="messageObjectifs">
//           <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
//         </div>
//       </header>
//     )
//   // Si l'API est lancée alors affichage des données API
//   } else { console.log("dataUserHeader est rempli, affichage des données API.");
//     return (
//       <header>
//         <div className='nameUser'>
//           <h1>Bonjour</h1>
//           <h2>{datasUser['firstName']}</h2>
//         </div>
//         <div className="messageObjectifs">
//           <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
//         </div>
//       </header>
//     )
//   }
// }