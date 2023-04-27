import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import './style/Objectifs.css'
import ObjectifsToolTip from './toolTip/ObjectifsToolTip'
import PropTypes from 'prop-types'

const Objectifs = ({userAverageSessions}) => {
  return (
    <>
      <h2 className="text-heading">
        <span>Durée moyenne des</span>
        <span>sessions</span>
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={userAverageSessions}
        >
          <XAxis dataKey="day" stroke="#FFFFFF" opacity={0.5} />
          <YAxis hide="true" />
          <Tooltip content={<ObjectifsToolTip/>} />
          <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" fill='#000000' dot='' />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}

Objectifs.propTypes = {
  userAverageSessions: PropTypes.array.isRequired,
};

export default Objectifs