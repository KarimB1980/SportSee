import { Cell, ResponsiveContainer, RadialBarChart, RadialBar } from "recharts"
import Datas from "../Axios/API/AxiosId"
import DatasMock from "../Axios/Mocks/AxiosIdMock"
import './KPI.css'

export default function KPI() {
  // Variables données API
  let data = Object.assign({}, Datas());
  let todayScore = data['todayScore'];
  let tableau = [];
  tableau = [{todayScore}];

  // Variable données mockées
  let dataMock = Object.assign({}, DatasMock());
  let todayScoreMock = dataMock['todayScore'];
  let tableauMock = [];
  tableauMock = [{todayScoreMock}];

  // Si l'API n'est pas lancée alors affichage des données mockées
  if (Object.keys(data).length === 0 && data.constructor === Object) {console.log("data est vide, affichage des données mockées.");
    return (
      <>
        <div className="contenairKPI">
          <h2>Score</h2>
        </div>
        <div className="disc"></div>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart 
            width={160} 
            height={160}  
            cx="50%" 
            cy="50%" 
            innerRadius="80" 
            outerRadius="90" 
            startAngle={90} 
            endAngle={tableauMock[0].todayScoreMock*360+90} 
            barSize={10} 
            data={tableauMock}>
            <RadialBar
              dataKey="todayScoreMock"
            >
              <Cell
                key={'arc'}
                fill={'#FF0000'}
                cornerRadius="50%"
              />
            </RadialBar>
          </RadialBarChart>
        </ResponsiveContainer>

        <div className="score">
          <h2>
            {dataMock['todayScore']*100}%<br />
          </h2>
          <h3>
            de votre<br />
          </h3>
          <h3>  
            objectif
          </h3>
        </div>
      </>
    );
  // Si l'API est lancée alors affichage des données API
  } else { console.log("data est rempli, affichage des données API.");
    return (
      <>
        <div className="contenairKPI">
          <h2>Score</h2>
        </div>
        <div className="disc"></div>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart 
            width={160} 
            height={160}  
            cx="50%" 
            cy="50%" 
            innerRadius="80" 
            outerRadius="90" 
            startAngle={90} 
            endAngle={tableau[0].todayScore*360+90} 
            barSize={10} 
            data={tableau}>
            <RadialBar
              dataKey="todayScore"
            >
              <Cell
                key={'arc'}
                fill={'#FF0000'}
                cornerRadius="50%"
              />
            </RadialBar>
          </RadialBarChart>
        </ResponsiveContainer>

        <div className="score">
          <h2>
            {data['todayScore']*100}%<br />
          </h2>
          <h3>
            de votre<br />
          </h3>
          <h3>  
            objectif
          </h3>
        </div>
      </>
    );
  }
}