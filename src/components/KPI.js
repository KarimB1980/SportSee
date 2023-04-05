import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import Datas from "../Axios/AxiosId";

/*const data = [
  { todayScore: 0.12 }
]*/

export default function KPI() {

  const data = Object.assign({}, Datas());
  //console.log(data['todayScore']);
  let todayScore = data['todayScore'];
  //console.log(todayScore);
  let tableau = [];
  tableau = [{todayScore}];
  //console.log(tableau);

  return (
    <>
      <div className="contenairKPI">
        <h2>Score</h2>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={160} height={160}>
          <Pie
            data={tableau}
            dataKey="todayScore"
            innerRadius={70}
            outerRadius={80}
            startAngle={0}
            endAngle={tableau[0].todayScore*360}
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