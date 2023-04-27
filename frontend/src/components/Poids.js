import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import './style/Poids.css'
import styled from 'styled-components'
import ActivityToolTip from './toolTip/ActivityToolTip'
import PropTypes from 'prop-types'

const Head = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 20px;
margin-right: 20px;
`

const Title= styled.h2`
font-size: 15px;
line-height: 24px;
color: #20253A;
margin-left: 20px;
`

const Text = styled.p`
font-weight: 500;
font-size: 14px;
color: #74798c;
margin-left: 10px;
`

const Icon = styled.div`
height: 8px;
width: 8px;
border-radius: 50%;
background-color: ${(props) => props.color};
align-self: center;
margin-left: 30px;
`

const Legend = styled.div`
display: flex;
`

const Info = styled.div`
display: flex;
align-items:center;
`

const Poids = ({userActivity}) => {
  return (
    <>
      <Head>
        <Title>Activité quotidienne</Title>
        <Legend>
          <Info>
            <Icon color='#282D30' />
            <Text>Poids (kg)</Text>
          </Info>
          <Info>
            <Icon color='#E60000' />
            <Text>Calories brûlées (kCal)</Text>
          </Info>
        </Legend>
      </Head>

      <ResponsiveContainer width="100%" height="100%" >
        <BarChart
          width={500}
          height={300}
          data={userActivity}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis orientation="right" />
          <Tooltip content={<ActivityToolTip/>} />
          <Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={[10, 10, 0, 0]} />
          <Bar dataKey="calorie" fill="#E60000" barSize={7} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

Poids.propTypes = {
  userActivity: PropTypes.array.isRequired,
};

export default Poids