import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import './Poids.css'

import styled from 'styled-components';
import PropTypes from 'prop-types';

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

export default function Poids({userActivity}) {
  // Variable données API
 
  let dataActivity1 = Object.assign({}, userActivity[0]);
  let dataActivity2 = Object.assign({}, userActivity[1]);
  let dataActivity3 = Object.assign({}, userActivity[2]);
  let dataActivity4 = Object.assign({}, userActivity[3]);
  let dataActivity5 = Object.assign({}, userActivity[4]);
  let dataActivity6 = Object.assign({}, userActivity[5]);
  let dataActivity7 = Object.assign({}, userActivity[6]);

  let objet1 = {day:dataActivity1['day'], 'Poids (kg)':dataActivity1['kilogram'],'Calories brûlées (kCal)':dataActivity1['calorie']};
  let objet2 = {day:dataActivity2['day'], 'Poids (kg)':dataActivity2['kilogram'],'Calories brûlées (kCal)':dataActivity2['calorie']};
  let objet3 = {day:dataActivity3['day'], 'Poids (kg)':dataActivity3['kilogram'],'Calories brûlées (kCal)':dataActivity3['calorie']};
  let objet4 = {day:dataActivity4['day'], 'Poids (kg)':dataActivity4['kilogram'],'Calories brûlées (kCal)':dataActivity4['calorie']};
  let objet5 = {day:dataActivity5['day'], 'Poids (kg)':dataActivity5['kilogram'],'Calories brûlées (kCal)':dataActivity5['calorie']};
  let objet6 = {day:dataActivity6['day'], 'Poids (kg)':dataActivity6['kilogram'],'Calories brûlées (kCal)':dataActivity6['calorie']};
  let objet7 = {day:dataActivity7['day'], 'Poids (kg)':dataActivity7['kilogram'],'Calories brûlées (kCal)':dataActivity7['calorie']};

  const data = [objet1,objet2,objet3,objet4,objet5,objet6,objet7];  

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
          data={data}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis orientation="right" />
          <Tooltip content={<ActivityToolType/>} />
          <Bar dataKey="Poids (kg)" fill="#282D30" barSize={7} radius={[10, 10, 0, 0]} />
          <Bar dataKey="Calories brûlées (kCal)" fill="#E60000" barSize={7} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}