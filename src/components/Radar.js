import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    value: 90,
    kind: 'Intensité'
  },
  {
    value: 200,
    kind: 'Vitesse'
  },
  {
    value: 50,
    kind: 'Force'
  },
  {
    value: 140,
    kind: 'Endurance'
  },
  {
    value: 120,
    kind: 'Energie'
  },
  {
    value: 80,
    kind: 'Cardio'
  }
]

export default function RadarDashboard() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <Radar name="Mike" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}