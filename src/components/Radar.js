import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'
import DatasPerformance from '../Axios/AxiosPerformance'
import DatasPerformanceMock from '../Axios/AxiosPerformanceMock'
import './Radar.css'

export default function RadarDashboard() {
  let dataPerformance = Object.assign({}, DatasPerformance());
  let dataPerformance1 = Object.assign({}, dataPerformance[0]);
  let dataPerformance2 = Object.assign({}, dataPerformance[1]);
  let dataPerformance3 = Object.assign({}, dataPerformance[2]);
  let dataPerformance4 = Object.assign({}, dataPerformance[3]);
  let dataPerformance5 = Object.assign({}, dataPerformance[4]);
  let dataPerformance6 = Object.assign({}, dataPerformance[5]);

  let objet1 = {kind:'Intensité', value:dataPerformance6['value']};
  let objet2 = {kind:'Vitesse', value:dataPerformance5['value']};
  let objet3 = {kind:'Force', value:dataPerformance4['value']};
  let objet4 = {kind:'Endurance', value:dataPerformance3['value']};
  let objet5 = {kind:'Energie', value:dataPerformance2['value']};
  let objet6 = {kind:'Cardio', value:dataPerformance1['value']};

  const data = [objet1,objet2,objet3,objet4,objet5,objet6];


  let dataPerformanceMock = Object.assign({}, DatasPerformanceMock());
  let dataPerformanceMock1 = Object.assign({}, dataPerformanceMock[0]);
  let dataPerformanceMock2 = Object.assign({}, dataPerformanceMock[1]);
  let dataPerformanceMock3 = Object.assign({}, dataPerformanceMock[2]);
  let dataPerformanceMock4 = Object.assign({}, dataPerformanceMock[3]);
  let dataPerformanceMock5 = Object.assign({}, dataPerformanceMock[4]);
  let dataPerformanceMock6 = Object.assign({}, dataPerformanceMock[5]);

  let objetMock1 = {kind:'Intensité', value:dataPerformanceMock6['value']};
  let objetMock2 = {kind:'Vitesse', value:dataPerformanceMock5['value']};
  let objetMock3 = {kind:'Force', value:dataPerformanceMock4['value']};
  let objetMock4 = {kind:'Endurance', value:dataPerformanceMock3['value']};
  let objetMock5 = {kind:'Energie', value:dataPerformanceMock2['value']};
  let objetMock6 = {kind:'Cardio', value:dataPerformanceMock1['value']};

  const dataMock = [objetMock1,objetMock2,objetMock3,objetMock4,objetMock5,objetMock6];
  
  // eslint-disable-next-line
  if (dataPerformance = {}) {console.log("data est vide.");
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={dataMock}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  } else {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}