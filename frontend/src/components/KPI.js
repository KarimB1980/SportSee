import { Cell, ResponsiveContainer, RadialBarChart, RadialBar } from "recharts"
import './style/KPI.css'
import PropTypes from 'prop-types'

const KPI = ({userKPI}) => {
  KPI.propTypes = {
    userKPI: PropTypes.array
  }
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
          endAngle={userKPI[0].todayScore*360+90}
          barSize={10}
          data={userKPI}>
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
          {userKPI[0].todayScore*100}%<br />
        </h2>
        <h3>
          de votre<br />
        </h3>
        <h3>  
          objectif
        </h3>
      </div>
    </>  
  )  
}

export default KPI