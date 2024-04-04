import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

function StepsCard(props) {
  const [isHovered, setIsHovered] = useState(false);

  const smallImgStyle = {
    width: '100px',
    height: '100px', 
    margin: 'auto' 
  }

  const cardStyle = {
    width: '20rem',
    borderRadius: '30px',
    borderColor: '#119e3e', 
    transition: 'transform 0.3s ease, border-width 0.3s ease', // Adaugă tranziție pentru transformare și grosimea border-ului
    borderWidth: isHovered ? '5px' : '1px', // Setează grosimea border-ului în funcție de starea hover
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  };

    const largeImgStyle = {
        width: '100%',
        borderRadius: '50px',
    }

  return (
    <Card 
      className={isHovered ? 'zoom-in' : ''} // Adaugă clasă pentru animația de zoom-in când este activat hover-ul
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)} // Activează hover-ul când mouse-ul intră pe card
      onMouseLeave={() => setIsHovered(false)} // Dezactivează hover-ul când mouse-ul iese de pe card
    >
      <Card.Img 
        variant="top" 
        src={props.imgSource} 
        style={smallImgStyle} // Aplică stilurile pentru imaginea mică
      />
      <Card.Body>
        <Card.Title 
          className={isHovered ? 'card-title hovered' : 'card-title'} 
          style={{textAlign: 'center'}} // Aliniază textul la centru
        >
          {props.title}
        </Card.Title>
        <Card.Img 
          src={props.imgSource2} 
          style={largeImgStyle} 
        />
        {props.content}
      </Card.Body>
    </Card>
  );
}

export default StepsCard;
