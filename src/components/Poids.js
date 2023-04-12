import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import DatasActivity from '../Axios/AxiosActivity'
import DatasActivityMock from '../Axios/AxiosActivityMock'
import './Poids.css'

import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Poids() {
  let dataActivity = Object.assign({}, DatasActivity());
  let dataActivity1 = Object.assign({}, dataActivity[0]);
  let dataActivity2 = Object.assign({}, dataActivity[1]);
  let dataActivity3 = Object.assign({}, dataActivity[2]);
  let dataActivity4 = Object.assign({}, dataActivity[3]);
  let dataActivity5 = Object.assign({}, dataActivity[4]);
  let dataActivity6 = Object.assign({}, dataActivity[5]);
  let dataActivity7 = Object.assign({}, dataActivity[6]);

  let objet1 = {day:dataActivity1['day'], 'Poids (kg)':dataActivity1['kilogram'],'Calories brûlées (kCal)':dataActivity1['calorie']};
  let objet2 = {day:dataActivity2['day'], 'Poids (kg)':dataActivity2['kilogram'],'Calories brûlées (kCal)':dataActivity2['calorie']};
  let objet3 = {day:dataActivity3['day'], 'Poids (kg)':dataActivity3['kilogram'],'Calories brûlées (kCal)':dataActivity3['calorie']};
  let objet4 = {day:dataActivity4['day'], 'Poids (kg)':dataActivity4['kilogram'],'Calories brûlées (kCal)':dataActivity4['calorie']};
  let objet5 = {day:dataActivity5['day'], 'Poids (kg)':dataActivity5['kilogram'],'Calories brûlées (kCal)':dataActivity5['calorie']};
  let objet6 = {day:dataActivity6['day'], 'Poids (kg)':dataActivity6['kilogram'],'Calories brûlées (kCal)':dataActivity6['calorie']};
  let objet7 = {day:dataActivity7['day'], 'Poids (kg)':dataActivity7['kilogram'],'Calories brûlées (kCal)':dataActivity7['calorie']};

  const data = [objet1,objet2,objet3,objet4,objet5,objet6,objet7];


  let dataActivityMock = Object.assign({}, DatasActivityMock());
  let dataActivityMock1 = Object.assign({}, dataActivityMock[0]);
  let dataActivityMock2 = Object.assign({}, dataActivityMock[1]);
  let dataActivityMock3 = Object.assign({}, dataActivityMock[2]);
  let dataActivityMock4 = Object.assign({}, dataActivityMock[3]);
  let dataActivityMock5 = Object.assign({}, dataActivityMock[4]);
  let dataActivityMock6 = Object.assign({}, dataActivityMock[5]);
  let dataActivityMock7 = Object.assign({}, dataActivityMock[6]);

  let objetMock1 =  {day:dataActivityMock1['day'], 'Poids (kg)':dataActivityMock1['kilogram'],'Calories brûlées (kCal)':dataActivityMock1['calorie']};
  let objetMock2 =  {day:dataActivityMock2['day'], 'Poids (kg)':dataActivityMock2['kilogram'],'Calories brûlées (kCal)':dataActivityMock2['calorie']};
  let objetMock3 =  {day:dataActivityMock3['day'], 'Poids (kg)':dataActivityMock3['kilogram'],'Calories brûlées (kCal)':dataActivityMock3['calorie']};
  let objetMock4 =  {day:dataActivityMock4['day'], 'Poids (kg)':dataActivityMock4['kilogram'],'Calories brûlées (kCal)':dataActivityMock4['calorie']};
  let objetMock5 =  {day:dataActivityMock5['day'], 'Poids (kg)':dataActivityMock5['kilogram'],'Calories brûlées (kCal)':dataActivityMock5['calorie']};
  let objetMock6 =  {day:dataActivityMock6['day'], 'Poids (kg)':dataActivityMock6['kilogram'],'Calories brûlées (kCal)':dataActivityMock6['calorie']};
  let objetMock7 =  {day:dataActivityMock7['day'], 'Poids (kg)':dataActivityMock7['kilogram'],'Calories brûlées (kCal)':dataActivityMock7['calorie']};

  const dataMock = [objetMock1,objetMock2,objetMock3,objetMock4,objetMock5,objetMock6,objetMock7];

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

  // eslint-disable-next-line
  if (dataActivity = {}) {console.log("data est vide.");
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
            data={dataMock}
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
  } else {
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
    )
  }
}