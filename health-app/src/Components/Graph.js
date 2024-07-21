import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Oct 2023', systolic: 160, diastolic: 78 },
    { name: 'Nov 2023', systolic: 150, diastolic: 80 },
    { name: 'Dec 2023', systolic: 155, diastolic: 75 },
    { name: 'Jan 2024', systolic: 145, diastolic: 70 },
    { name: 'Feb 2024', systolic: 140, diastolic: 72 },
    { name: 'Mar 2024', systolic: 135, diastolic: 68},
  // Add data points for Nov 2023, Dec 2023, Jan 2024, Feb 2024, and Mar 2024
  // ...

  // Example data points:
  // { name: 'Nov 2023', systolic: 150, diastolic: 80 },
  // { name: 'Dec 2023', systolic: 155, diastolic: 75 },
  // ...

  // Customize other data points as needed
];

const Graph = () => {
  return (
    <LineChart width={600} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="systolic" stroke="#ff0080" name="Systolic" />
      <Line type="monotone" dataKey="diastolic" stroke="#8000ff" name="Diastolic" />
    </LineChart>
  );
};

export default Graph;

