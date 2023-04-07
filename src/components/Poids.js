import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import DatasActivity from '../Axios/AxiosActivity'
import './Poids.css'

export default function Poids() {
  const dataActivity = Object.assign({}, DatasActivity());
  const dataActivity1 = Object.assign({}, dataActivity[0]);
  const dataActivity2 = Object.assign({}, dataActivity[1]);
  const dataActivity3 = Object.assign({}, dataActivity[2]);
  const dataActivity4 = Object.assign({}, dataActivity[3]);
  const dataActivity5 = Object.assign({}, dataActivity[4]);
  const dataActivity6 = Object.assign({}, dataActivity[5]);
  const dataActivity7 = Object.assign({}, dataActivity[6]);

  let objet1 = {day:dataActivity1['day'], 'Poids (kg)':dataActivity1['kilogram'],'Calories brûlées (kCal)':dataActivity1['calorie']};
  let objet2 = {day:dataActivity2['day'], 'Poids (kg)':dataActivity2['kilogram'],'Calories brûlées (kCal)':dataActivity2['calorie']};
  let objet3 = {day:dataActivity3['day'], 'Poids (kg)':dataActivity3['kilogram'],'Calories brûlées (kCal)':dataActivity3['calorie']};
  let objet4 = {day:dataActivity4['day'], 'Poids (kg)':dataActivity4['kilogram'],'Calories brûlées (kCal)':dataActivity4['calorie']};
  let objet5 = {day:dataActivity5['day'], 'Poids (kg)':dataActivity5['kilogram'],'Calories brûlées (kCal)':dataActivity5['calorie']};
  let objet6 = {day:dataActivity6['day'], 'Poids (kg)':dataActivity6['kilogram'],'Calories brûlées (kCal)':dataActivity6['calorie']};
  let objet7 = {day:dataActivity7['day'], 'Poids (kg)':dataActivity7['kilogram'],'Calories brûlées (kCal)':dataActivity7['calorie']};

  const data = [objet1,objet2,objet3,objet4,objet5,objet6,objet7];

  return (
    <>
      <h2 className="title-heading">
        Activité quotidienne
      </h2>
      <ResponsiveContainer width="100%" height="100%" >
        <BarChart
          width={500}
          height={300}
          data={data}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis orientation="right" />
          <Tooltip />
          <Legend layout="horizontal" verticalAlign="top" align="right" wrapperStyle={{top: -30, left: -10}} />
          <Bar dataKey="Poids (kg)" fill="#282D30" barSize={7} radius={[10, 10, 0, 0]} />
          <Bar dataKey="Calories brûlées (kCal)" fill="#E60000" barSize={7} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}