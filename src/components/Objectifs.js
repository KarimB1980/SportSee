import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
//import './Objectifs.css';

//import { USER_AVERAGE_SESSIONS } from '../_mocks/data';
//import { USER_MAIN_DATA,USER_ACTIVITY,USER_AVERAGE_SESSIONS,USER_PERFORMANCE} from "../_mocks/data";

/*const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];*/

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