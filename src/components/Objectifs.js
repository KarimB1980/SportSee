import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import DatasAverageSessions from '../Axios/AxiosAverageSessions';
import './Objectifs.css'

export default function Objectifs() {
  const dataAverageSessions = Object.assign({}, DatasAverageSessions());
  const dataAverageSessions1 = Object.assign({}, dataAverageSessions[0]);
  const dataAverageSessions2 = Object.assign({}, dataAverageSessions[1]);
  const dataAverageSessions3 = Object.assign({}, dataAverageSessions[2]);
  const dataAverageSessions4 = Object.assign({}, dataAverageSessions[3]);
  const dataAverageSessions5 = Object.assign({}, dataAverageSessions[4]);
  const dataAverageSessions6 = Object.assign({}, dataAverageSessions[5]);
  const dataAverageSessions7 = Object.assign({}, dataAverageSessions[6]);

  let objet1 = {day:'L', sessionLength:dataAverageSessions1['sessionLength']};
  let objet2 = {day:'M', sessionLength:dataAverageSessions2['sessionLength']};
  let objet3 = {day:'M', sessionLength:dataAverageSessions3['sessionLength']};
  let objet4 = {day:'J', sessionLength:dataAverageSessions4['sessionLength']};
  let objet5 = {day:'V', sessionLength:dataAverageSessions5['sessionLength']};
  let objet6 = {day:'S', sessionLength:dataAverageSessions6['sessionLength']};
  let objet7 = {day:'D', sessionLength:dataAverageSessions7['sessionLength']};

  const data = [objet1,objet2,objet3,objet4,objet5,objet6,objet7];

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
          <Tooltip />
          <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" fill='#000000' dot='' />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}