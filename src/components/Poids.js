import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DatasActivity from '../Axios/AxiosActivity'

/*const data = [
    {
        day: '2020-07-01',
        kilogram: 80,
        calories: 240
    },
    {
        day: '2020-07-02',
        kilogram: 80,
        calories: 220
    },
    {
        day: '2020-07-03',
        kilogram: 81,
        calories: 280
    },
    {
        day: '2020-07-04',
        kilogram: 81,
        calories: 290
    },
    {
        day: '2020-07-05',
        kilogram: 80,
        calories: 160
    },
    {
        day: '2020-07-06',
        kilogram: 78,
        calories: 162
    },
    {
        day: '2020-07-07',
        kilogram: 76,
        calories: 390
    }
]*/


export default function Poids() {

  console.log(DatasActivity());

  const dataActivity = Object.assign({}, DatasActivity());
  console.log(dataActivity);
  const dataActivity1 = Object.assign({}, dataActivity[0]);
  const dataActivity2 = Object.assign({}, dataActivity[1]);
  const dataActivity3 = Object.assign({}, dataActivity[2]);
  const dataActivity4 = Object.assign({}, dataActivity[3]);
  const dataActivity5 = Object.assign({}, dataActivity[4]);
  const dataActivity6 = Object.assign({}, dataActivity[5]);
  const dataActivity7 = Object.assign({}, dataActivity[6]);

  let objet1 = {day:dataActivity1['day'], kilogram:dataActivity1['kilogram'],calories:dataActivity1['calorie']};
  let objet2 = {day:dataActivity2['day'], kilogram:dataActivity2['kilogram'],calories:dataActivity2['calorie']};
  let objet3 = {day:dataActivity3['day'], kilogram:dataActivity3['kilogram'],calories:dataActivity3['calorie']};
  let objet4 = {day:dataActivity4['day'], kilogram:dataActivity4['kilogram'],calories:dataActivity4['calorie']};
  let objet5 = {day:dataActivity5['day'], kilogram:dataActivity5['kilogram'],calories:dataActivity5['calorie']};
  let objet6 = {day:dataActivity6['day'], kilogram:dataActivity6['kilogram'],calories:dataActivity6['calorie']};
  let objet7 = {day:dataActivity7['day'], kilogram:dataActivity7['kilogram'],calories:dataActivity7['calorie']};

  const data = [objet1,objet2,objet3,objet4,objet5,objet6,objet7];
  console.log(data);

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
          <Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={[10, 10, 0, 0]} />
          <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}