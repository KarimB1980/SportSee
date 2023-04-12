import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"
import Datas from "../Axios/API/AxiosId"
import DatasMock from "../Axios/Mocks/AxiosIdMock"
import './KPI.css'

export default function KPI() {
  let data = Object.assign({}, Datas());
  let todayScore = data['todayScore'];
  let tableau = [];
  tableau = [{todayScore}];

  let dataMock = Object.assign({}, DatasMock());
  let todayScoreMock = dataMock['todayScore'];
  let tableauMock = [];
  tableauMock = [{todayScoreMock}];

  if (Object.keys(data).length === 0 && data.constructor === Object) {console.log("data est vide, affichage des données mockées.");
    return (
      <>
        <div className="contenairKPI">
          <h2>Score</h2>
        </div>
        <div className="disc"></div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={160} height={160}>
            <Pie
              data={tableauMock}
              dataKey="todayScoreMock"
              innerRadius={70}
              outerRadius={80}
              startAngle={90}
              endAngle={tableauMock[0].todayScoreMock*360+90}
            >
              <Cell
                key={'arc'}
                fill={'#FF0000'}
                cornerRadius="50%"
              />
            </Pie>
          </PieChart>
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
  } else { console.log("data est rempli, affichage des données API.");
    return (
      <>
        <div className="contenairKPI">
          <h2>Score</h2>
        </div>
        <div className="disc"></div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={160} height={160}>
            <Pie
              data={tableau}
              dataKey="todayScore"
              innerRadius={70}
              outerRadius={80}
              startAngle={90}
              endAngle={tableau[0].todayScore*360+90}
            >
              <Cell
                key={'arc'}
                fill={'#FF0000'}
                cornerRadius="50%"
              />
            </Pie>
          </PieChart>
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