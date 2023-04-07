import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import DatasPerformance from '../Axios/AxiosPerformance'
import './Radar.css'

export default function RadarDashboard() {
  const dataPerformance = Object.assign({}, DatasPerformance());
  const dataPerformance1 = Object.assign({}, dataPerformance[0]);
  const dataPerformance2 = Object.assign({}, dataPerformance[1]);
  const dataPerformance3 = Object.assign({}, dataPerformance[2]);
  const dataPerformance4 = Object.assign({}, dataPerformance[3]);
  const dataPerformance5 = Object.assign({}, dataPerformance[4]);
  const dataPerformance6 = Object.assign({}, dataPerformance[5]);

  let objet1 = {kind:'Intensité', value:dataPerformance6['value']};
  let objet2 = {kind:'Vitesse', value:dataPerformance5['value']};
  let objet3 = {kind:'Force', value:dataPerformance4['value']};
  let objet4 = {kind:'Endurance', value:dataPerformance3['value']};
  let objet5 = {kind:'Energie', value:dataPerformance2['value']};
  let objet6 = {kind:'Cardio', value:dataPerformance1['value']};

  const data = [objet1,objet2,objet3,objet4,objet5,objet6];

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