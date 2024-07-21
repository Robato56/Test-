import React from 'react';


const data = [
  { id: 1,"Problem/Diagnosis": "Hypertension", Description: 'Chronic high blood pressure', Status: "Under observtion" },
  { id: 2,"Problem/Diagnosis": "Diabetes", Description: 'High blood sugar', Status: "Under treatment" },
  { id: 3,"Problem/Diagnosis": "Asthma", Description: 'Chronic respiratory disease', Status: "Under observtion" },
];

function UserTable() {
  return (
    <card className= "rounded bg-white">
      <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: "10%" }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', borderBottom: 'none', background: "#eeeee4"}}>Problem/Diagnosis</th>
            <th style={{ padding: '10px', borderBottom: 'none', background: "#eeeee4" }}>Description</th>
            <th style={{ padding: '10px', borderBottom: 'none', background: "#eeeee4" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td style={{ padding: '10px', borderBottom: 'none' }}>{item['Problem/Diagnosis']}</td>
              <td style={{ padding: '10px', borderBottom: 'none' }}>{item.Description}</td>
              <td style={{ padding: '10px', borderBottom: 'none' }}>{item.Status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </card>
  );
}

export default UserTable;
