import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const data = [
  {
      day: 'L',
      sessionLength: 30
  },
  {
      day: 'M',
      sessionLength: 23
  },
  {
      day: 'M',
      sessionLength: 45
  },
  {
      day: 'J',
      sessionLength: 50
  },
  {
      day: 'V',
      sessionLength: 0
  },
  {
      day: 'S',
      sessionLength: 0
  },
  {
      day: 'D',
      sessionLength: 60
  }
]

export default function Objectifs() { 
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
          margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 5,
          }}
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