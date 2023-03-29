import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { todayScore: 0.12 }
]

export default function KPI() {
  return (
    <>
      <div className="contenairKPI">
        <h2>Score</h2>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={160} height={160}>
          <Pie
            data={data}
            dataKey="todayScore"
            innerRadius={70}
            outerRadius={80}
            startAngle={0}
            endAngle={data[0].todayScore*360}
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
          {data[0].todayScore*100}%<br />
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