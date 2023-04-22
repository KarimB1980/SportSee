import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import './style/Objectifs.css'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
background-color:#FFFFFF;
width:39px;
height:25px;
display:flex;
flex-direction:column;
align-items:center;
`

const Text1 = styled.p `
  color:black;
  font-weight: 500;
  font-size: 8px;
  line-height: 13px;
  margin-top:7px;
`

const Objectifs = ({userAverageSessions}) => {
  function ObjectifsToolType({active, payload}) {
    if (active){
      return (
        <Container>
          <Text1>{payload[0].value} min</Text1>
        </Container>
      );
    }
  }
  ObjectifsToolType.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
  };

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
          <Tooltip content={<ObjectifsToolType/>} />
          <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" fill='#000000' dot='' />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}

export default Objectifs