import React from 'react';
import Card from 'react-bootstrap/Card';

const CardData = [
    {
        title: 'Respiratory Rate',
        value: '20 bpm',
        status: 'normal',
        backgroundColor: "#e1f2fa",
        iconColor: "#74cef7",
        icon: 'bi bi-lungs-fill',
    },
    {
        title: 'Heart Rate',
        value: '80 bpm',
        status: 'normal',
        backgroundColor: "#fee7f1",
        iconColor: "#f15a67",
        icon: 'bi bi-heart-fill',
    },
    {
        title: 'Temperature',
        value: '36.5°C',
        status: 'normal',
        backgroundColor: "#fee7e9",
        iconColor: "#f15a67",
        icon: 'bi bi-thermometer-half',
    }
];

function Cards() {
  return (
    <>
    <div className='d-flex justify-content-center'>
      {CardData.map((card, index) => (
        <Card key={index} className='rounded' style={{ backgroundColor: card.backgroundColor, width: '12rem', height: '16em', margin: '1rem', border: "none" }}>
          <Card.Body>
            <div className='circle' style={{backgroundColor: "white", borderRadius: "50%", width: "100px", height: "100px", display: "flex", justifyContent: "center", alignItems: "center"}}>
              <i className={card.icon} style={{color: card.iconColor, fontSize: "60px"}}></i>
            </div>
            <div className='text-left'>
              <p>{card.title}</p>
              <h1>{card.value}</h1>
              <p>{card.status}</p>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
    </>
  );
}

export default Cards;