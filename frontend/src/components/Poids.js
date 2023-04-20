import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import './style/Poids.css'
import styled from 'styled-components'
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

const Container = styled.div`
background-color:#E60000;
width:39px;
height:63px;
display:flex;
flex-direction:column;
align-items:center;
`

const Text1 = styled.p `
color:white;
font-weight: 500;
font-size: 10px;
line-height: 18px;
margin-top:7px;
`

const Poids = ({userActivity}) => {
  function ActivityToolType({active, payload}) {
    if (active){
    return (
      <Container>
        <Text1>{payload[0].value}kg</Text1>
        <Text1>{payload[1].value}Kcal</Text1>
      </Container>
     );
    }
    return null
  }
  ActivityToolType.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
  };

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
          <Tooltip content={<ActivityToolType/>} />
          <Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={[10, 10, 0, 0]} />
          <Bar dataKey="calorie" fill="#E60000" barSize={7} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default Poids