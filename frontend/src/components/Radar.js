import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import './style/Radar.css'
import PropTypes from 'prop-types'

const RadarDashboard = ({userRadarDashboard}) => {
  RadarDashboard.propTypes = {
    userRadarDashboard: PropTypes.array
  }
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={userRadarDashboard}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default RadarDashboard