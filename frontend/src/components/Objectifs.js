import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import DatasAverageSessions from '../Axios/API/AxiosAverageSessions'
import DatasAverageSessionsMock from '../Axios/Mocks/AxiosAverageSessionsMock'
import './Objectifs.css'

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

export default function Objectifs() {
  let dataAverageSessions = Object.assign({}, DatasAverageSessions());
  let dataAverageSessions1 = Object.assign({}, dataAverageSessions[0]);
  let dataAverageSessions2 = Object.assign({}, dataAverageSessions[1]);
  let dataAverageSessions3 = Object.assign({}, dataAverageSessions[2]);
  let dataAverageSessions4 = Object.assign({}, dataAverageSessions[3]);
  let dataAverageSessions5 = Object.assign({}, dataAverageSessions[4]);
  let dataAverageSessions6 = Object.assign({}, dataAverageSessions[5]);
  let dataAverageSessions7 = Object.assign({}, dataAverageSessions[6]);

  let objet1 = {day:'L', sessionLength:dataAverageSessions1['sessionLength']};
  let objet2 = {day:'M', sessionLength:dataAverageSessions2['sessionLength']};
  let objet3 = {day:'M', sessionLength:dataAverageSessions3['sessionLength']};
  let objet4 = {day:'J', sessionLength:dataAverageSessions4['sessionLength']};
  let objet5 = {day:'V', sessionLength:dataAverageSessions5['sessionLength']};
  let objet6 = {day:'S', sessionLength:dataAverageSessions6['sessionLength']};
  let objet7 = {day:'D', sessionLength:dataAverageSessions7['sessionLength']};

  const data = [objet1,objet2,objet3,objet4,objet5,objet6,objet7];


  let dataAverageSessionsMock = Object.assign({}, DatasAverageSessionsMock());
  let dataAverageSessionsMock1 = Object.assign({}, dataAverageSessionsMock[0]);
  let dataAverageSessionsMock2 = Object.assign({}, dataAverageSessionsMock[1]);
  let dataAverageSessionsMock3 = Object.assign({}, dataAverageSessionsMock[2]);
  let dataAverageSessionsMock4 = Object.assign({}, dataAverageSessionsMock[3]);
  let dataAverageSessionsMock5 = Object.assign({}, dataAverageSessionsMock[4]);
  let dataAverageSessionsMock6 = Object.assign({}, dataAverageSessionsMock[5]);
  let dataAverageSessionsMock7 = Object.assign({}, dataAverageSessionsMock[6]);

  let objetMock1 =  {day:'L', sessionLength:dataAverageSessionsMock1['sessionLength']};
  let objetMock2 =  {day:'M', sessionLength:dataAverageSessionsMock2['sessionLength']};
  let objetMock3 =  {day:'M', sessionLength:dataAverageSessionsMock3['sessionLength']};
  let objetMock4 =  {day:'J', sessionLength:dataAverageSessionsMock4['sessionLength']};
  let objetMock5 =  {day:'V', sessionLength:dataAverageSessionsMock5['sessionLength']};
  let objetMock6 =  {day:'S', sessionLength:dataAverageSessionsMock6['sessionLength']};
  let objetMock7 =  {day:'D', sessionLength:dataAverageSessionsMock7['sessionLength']};

  const dataMock = [objetMock1,objetMock2,objetMock3,objetMock4,objetMock5,objetMock6,objetMock7];

  function ObjectifsToolType({active, payload}) {
    if (active){
    return (
        <Container>
            <Text1>{payload[0].value} min</Text1>
        </Container>
    
    );
    }
    return null
  }
  ObjectifsToolType.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
  };

  if (Object.keys(dataAverageSessions).length === 0 && dataAverageSessions.constructor === Object) {console.log("dataAverageSessions est vide, affichage des données mockées.");
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
            data={dataMock}
          >
            <XAxis dataKey="day" stroke="#FFFFFF" opacity={0.5} />
            <YAxis hide="true" />
            <Tooltip content={<ObjectifsToolType/>} />
            <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" fill='#000000' dot='' />
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  } else { console.log("dataAverageSessions est rempli, affichage des données API.");
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
            data={data}
          >
            <XAxis dataKey="day" stroke="#FFFFFF" opacity={0.5} />
            <YAxis hide="true" />
            <Tooltip content={<ObjectifsToolType/>} />
            <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" fill='#000000' dot='' />
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  }
}